import { NextRequest, NextResponse } from 'next/server';

// ---------------------------------------------------------------------------
// Rate limiter (in-memory)
// NOTE: This works for single-instance deployments only. On serverless platforms
// like Vercel, each cold-start gets a fresh instance so the store resets.
// For production, replace with Upstash Redis + @upstash/ratelimit:
//   https://github.com/upstash/ratelimit
// ---------------------------------------------------------------------------
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function getClientIP(req: NextRequest): string {
  // Vercel sets x-vercel-forwarded-for; fall back to standard x-forwarded-for
  return (
    req.headers.get('x-vercel-forwarded-for') ??
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    'unknown'
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count++;
  return false;
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest) {
  const ip = getClientIP(req);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request.' }, { status: 400 });
  }

  // Extract and sanitize fields
  const honeypot    = String(body.hp_check_2x9 ?? '');
  const loadTime    = Number(body._formLoadTime   ?? 0);
  const turnstileToken = String(body.turnstileToken ?? '');

  const name    = String(body.name    ?? '').trim();
  const email   = String(body.email   ?? '').trim();
  const company = String(body.company ?? '').trim();
  const role    = String(body.role    ?? '').trim();
  const inquiry = String(body.inquiry ?? '').trim();
  const budget  = String(body.budget  ?? '').trim();
  const message = String(body.message ?? '').trim();

  // ------------------------------------------------------------------
  // 1. Honeypot — silently "succeed" so bots don't know they were caught
  // ------------------------------------------------------------------
  if (honeypot) {
    console.log(`[SPAM:honeypot] IP=${ip}`);
    return NextResponse.json({ success: true, message: 'Message sent successfully.' });
  }

  // ------------------------------------------------------------------
  // 2. Timing check — real users take >2 s to fill in a form
  // ------------------------------------------------------------------
  const elapsed = Date.now() - loadTime;
  if (!loadTime || elapsed < 2000) {
    console.log(`[SPAM:timing] IP=${ip} elapsed=${elapsed}ms`);
    return NextResponse.json({ success: true, message: 'Message sent successfully.' });
  }

  // ------------------------------------------------------------------
  // 3. Server-side validation
  // ------------------------------------------------------------------
  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: 'Please fill in all required fields.' },
      { status: 400 },
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { success: false, message: 'Please enter a valid email address.' },
      { status: 400 },
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { success: false, message: 'Message must be at least 10 characters.' },
      { status: 400 },
    );
  }

  // ------------------------------------------------------------------
  // 4. Rate limiting (3 submissions per IP per hour)
  // ------------------------------------------------------------------
  if (isRateLimited(ip)) {
    console.log(`[SPAM:rate-limit] IP=${ip}`);
    return NextResponse.json(
      { success: false, message: 'Too many submissions. Please try again later.' },
      { status: 429 },
    );
  }

  // ------------------------------------------------------------------
  // 5. Cloudflare Turnstile verification
  //
  // To enable:
  //   1. Sign up at https://dash.cloudflare.com → Turnstile → Add site
  //   2. Add these to your environment variables:
  //        NEXT_PUBLIC_TURNSTILE_SITE_KEY=<your-site-key>    (public, for the widget)
  //        TURNSTILE_SECRET_KEY=<your-secret-key>            (server-only, for verification)
  //   3. On Vercel: Settings → Environment Variables
  //
  // If TURNSTILE_SECRET_KEY is not set, Turnstile is skipped (safe for local dev).
  // ------------------------------------------------------------------
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    if (!turnstileToken) {
      console.log(`[SPAM:turnstile-missing] IP=${ip}`);
      return NextResponse.json(
        { success: false, message: 'Security check failed. Please try again.' },
        { status: 400 },
      );
    }

    const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: turnstileSecret, response: turnstileToken, remoteip: ip }),
    });

    const verifyData = (await verifyRes.json()) as {
      success: boolean;
      'error-codes'?: string[];
    };

    if (!verifyData.success) {
      console.log(
        `[SPAM:turnstile-fail] IP=${ip} errors=${JSON.stringify(verifyData['error-codes'])}`,
      );
      return NextResponse.json(
        { success: false, message: 'Security check failed. Please try again.' },
        { status: 400 },
      );
    }
  }

  // ------------------------------------------------------------------
  // Forward validated submission to formsubmit.co
  // ------------------------------------------------------------------
  try {
    const fwRes = await fetch('https://formsubmit.co/ajax/enterprise@devmundus.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name, email, company, role, inquiry, budget, message,
        _subject: `New Contact Form Submission from ${name}`,
        _template: 'table',
      }),
    });

    if (!fwRes.ok) throw new Error(`formsubmit responded ${fwRes.status}`);

    console.log(`[OK] submission from ${email} (IP=${ip})`);
    return NextResponse.json({ success: true, message: 'Message sent successfully.' });
  } catch (err) {
    console.error(`[ERROR] submission from ${email} (IP=${ip}):`, err);
    return NextResponse.json(
      {
        success: false,
        message:
          'Failed to send your message. Please try again or email us directly at enterprise@devmundus.com',
      },
      { status: 500 },
    );
  }
}
