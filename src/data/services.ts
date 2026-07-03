import {
  Code,
  Building2,
  Calculator,
  Users,
  Rocket,
  Shield,
  Lock,
  ClipboardCheck,
  UserPlus,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceStat {
  label: string;
  value: string;
}

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  stats: ServiceStat[];
  color: string;
  image: string;
  imageAlt: string;
}

const unsplash = (photoId: string) =>
  `https://images.unsplash.com/photo-${photoId}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200`;

export const services: ServiceData[] = [
  {
    slug: 'custom-software-development',
    icon: Code,
    title: 'Custom Software Development',
    description:
      'Build tailored digital products from scratch. Full-stack development with modern technologies to bring your vision to life.',
    longDescription:
      'We design and build custom software from the ground up, tailored to your exact workflow and business goals rather than forcing you into an off-the-shelf tool. Our engineers work across the full stack — from database and API design through to polished, responsive interfaces — using modern, production-proven technologies. Every project is built with maintainability and scale in mind, so the product you launch with is one you can keep growing for years.',
    features: [
      'Web & mobile app development',
      'Cloud-native architecture',
      'API design & integration',
      'Modern tech stack (React, Node.js, etc.)',
    ],
    stats: [
      { label: 'Products Shipped', value: '50+' },
      { label: 'Code Ownership', value: '100%' },
      { label: 'Avg. Time to MVP', value: '12 wks' },
    ],
    color: 'from-blue-600 to-blue-700',
    image: unsplash('1517694712202-14dd9538aa97'),
    imageAlt: 'Laptop displaying custom application code on a developer desk',
  },
  {
    slug: 'dedicated-development-teams',
    icon: Users,
    title: 'Dedicated Development Teams',
    description:
      'Extend your in-house capabilities with our skilled engineers. Scale your team up or down based on project needs.',
    longDescription:
      'When you need extra engineering capacity without the overhead of hiring, our dedicated teams plug directly into your existing workflow. We match you with pre-vetted senior developers who work as an extension of your in-house team — attending your standups, using your tools, and communicating directly with your stakeholders. Scale the team up during crunch periods or down once a milestone ships, with no long-term commitment required.',
    features: [
      'Pre-vetted senior developers',
      'Seamless team integration',
      'Flexible engagement models',
      'Direct communication & collaboration',
    ],
    stats: [
      { label: 'Team Onboarding', value: '48h' },
      { label: 'Team Retention', value: '95%' },
      { label: 'Engineers Scalable', value: '3-15' },
    ],
    color: 'from-purple-600 to-purple-700',
    image: unsplash('1522071820081-009f0129c71c'),
    imageAlt: 'Development team collaborating together around laptops',
  },
  {
    slug: 'product-design-strategy',
    icon: Rocket,
    title: 'Product Design & Strategy',
    description:
      'Transform ideas into market-ready products. UX/UI design, technical architecture, and go-to-market planning.',
    longDescription:
      "Great products start with great strategy. We help you validate ideas with real users, translate insights into wireframes and prototypes, and design a UI/UX system that scales across your product. Alongside design, we lay out the technical architecture and a realistic roadmap so design decisions and engineering effort stay in sync from day one — reducing rework and getting you to market faster.",
    features: [
      'User research & validation',
      'Wireframing & prototyping',
      'UI/UX design system',
      'Technical roadmap planning',
    ],
    stats: [
      { label: 'Discovery Sprint', value: '2 wks' },
      { label: 'Prototypes Delivered', value: '40+' },
      { label: 'User Test Approval', value: '90%' },
    ],
    color: 'from-emerald-600 to-emerald-700',
    image: unsplash('1531403009284-440f080d1e12'),
    imageAlt: 'Designer pinning UX flow diagrams to a wall during a planning session',
  },
  {
    slug: 'project-costing-estimation',
    icon: Calculator,
    title: 'Project Costing & Estimation',
    description:
      'Get transparent, detailed cost breakdowns before you commit. Understand scope, timeline, and resource requirements.',
    longDescription:
      "Before you commit budget to a project, you deserve to know exactly what you're paying for. We break your project down into itemized estimates covering scope, timeline, and resourcing, so there are no surprises later. Our estimates include risk assessment and flexible payment structures, giving you the clarity to plan confidently and the flexibility to adjust as the project evolves.",
    features: [
      'Itemized project estimates',
      'Timeline & milestone planning',
      'Risk assessment & mitigation',
      'Flexible payment structures',
    ],
    stats: [
      { label: 'Estimate Accuracy', value: '±10%' },
      { label: 'Turnaround Time', value: '48h' },
      { label: 'Hidden Fees', value: '0' },
    ],
    color: 'from-orange-600 to-orange-700',
    image: unsplash('1454165804606-c3d57bc86b40'),
    imageAlt: 'Team reviewing project cost estimates and timelines on paper and laptops',
  },
  {
    slug: 'enterprise-solutions',
    icon: Building2,
    title: 'Enterprise Solutions',
    description:
      'Large-scale systems for complex business needs. Scalable architecture, security, and compliance-first development.',
    longDescription:
      "Enterprise systems demand a different level of rigor. We design scalable architecture built to handle complex business logic, high traffic, and strict compliance requirements from the outset. Whether you're modernizing a legacy system or building new enterprise infrastructure, we prioritize security, performance, and long-term maintainability so your systems keep pace with your organization.",
    features: [
      'Enterprise architecture design',
      'Legacy system modernization',
      'Performance & scalability optimization',
    ],
    stats: [
      { label: 'Uptime SLA', value: '99.9%' },
      { label: 'Requests Handled', value: '10M+' },
      { label: 'Compliance Ready', value: 'SOC 2' },
    ],
    color: 'from-pink-600 to-pink-700',
    image: unsplash('1544197150-b99a580bb7a8'),
    imageAlt: 'Enterprise data center server rack with network cabling',
  },
  {
    slug: 'ongoing-support-maintenance',
    icon: Shield,
    title: 'Ongoing Support & Maintenance',
    description:
      'Long-term partnership beyond launch. Continuous improvement, monitoring, updates, and technical support.',
    longDescription:
      "Launch day is the beginning, not the end. Our ongoing support keeps your product healthy long after release with 24/7 monitoring, regular updates, and rapid response to issues. We continuously look for opportunities to improve performance and stay ahead of security patches and compliance changes, so you can focus on your business while we keep the technology running smoothly.",
    features: [
      '24/7 monitoring & support',
      'Regular updates & improvements',
      'Performance optimization',
      'Security patches & compliance',
    ],
    stats: [
      { label: 'Monitoring', value: '24/7' },
      { label: 'Avg. Response Time', value: '<1h' },
      { label: 'Issue Resolution', value: '99.9%' },
    ],
    color: 'from-indigo-600 to-indigo-700',
    image: unsplash('1551288049-bebda4e38f71'),
    imageAlt: 'Real-time monitoring dashboard with performance analytics charts',
  },
  {
    slug: 'cyber-security',
    icon: Lock,
    title: 'Cyber Security',
    description:
      'Protect your systems, data, and users with proactive security built into every layer of your stack.',
    longDescription:
      'Security is not a checkbox we add at the end — it is designed into your architecture from day one and continuously verified after launch. We run penetration testing and vulnerability assessments against your applications and infrastructure, perform secure code reviews to catch issues before they ship, and help you reach compliance standards like SOC 2, GDPR, and HIPAA. When something does go wrong, our incident response planning means your team already knows exactly what to do.',
    features: [
      'Penetration testing & vulnerability assessments',
      'Secure code review & remediation',
      'Compliance readiness (SOC 2, GDPR, HIPAA)',
      'Incident response planning & monitoring',
    ],
    stats: [
      { label: 'Client Breaches', value: '0' },
      { label: 'Threat Monitoring', value: '24/7' },
      { label: 'Audit Standard', value: 'OWASP' },
    ],
    color: 'from-red-600 to-red-700',
    image: unsplash('1550751827-4bd374c3f58b'),
    imageAlt: 'Glowing teal circuit board representing secure system architecture',
  },
  {
    slug: 'quality-assurance',
    icon: ClipboardCheck,
    title: 'Quality Assurance',
    description:
      'Catch issues before your users do. Manual and automated testing that keeps every release reliable.',
    longDescription:
      'A great product stays great release after release, and that only happens with disciplined QA. Our team combines hands-on manual and exploratory testing with automated unit, integration, and end-to-end test suites wired directly into your CI/CD pipeline, so regressions get caught before they reach production. We also run performance, load, and cross-browser/device testing to make sure your product holds up under real-world conditions, not just in a demo.',
    features: [
      'Manual & exploratory testing',
      'Automated test suites (unit, integration, E2E)',
      'CI/CD pipeline test gating',
      'Performance, load & cross-device testing',
    ],
    stats: [
      { label: 'Automated Coverage', value: '95%' },
      { label: 'Faster Release Cycles', value: '3x' },
      { label: 'Critical Bugs at Launch', value: '0' },
    ],
    color: 'from-cyan-600 to-cyan-700',
    image: unsplash('1571171637578-41bc2dd41cd2'),
    imageAlt: 'Dual monitors displaying test code and logs in a dark workspace',
  },
  {
    slug: 'staff-augmentation',
    icon: UserPlus,
    title: 'Staff Augmentation',
    description:
      'Add specialized talent to your team on demand — from a single specialist to a full pod, without the hiring overhead.',
    longDescription:
      'Sometimes you don\'t need a whole new team — you need one great engineer to fill a specific gap, fast. Our staff augmentation model places pre-vetted specialists directly into your existing team and workflow, reporting into your managers and using your tools, so there is no ramp-up friction. Scale up for a launch push or scale down once the gap is closed, on a flexible month-to-month basis, with none of the recruiting, payroll, or HR overhead of a direct hire.',
    features: [
      'Fill specific skill gaps fast (frontend, backend, DevOps, QA, etc.)',
      'Month-to-month flexible contracts',
      'Specialists report directly into your team',
      'No recruiting, payroll, or HR overhead',
    ],
    stats: [
      { label: 'Avg. Placement Time', value: '72h' },
      { label: 'Vetted Specialists', value: '150+' },
      { label: 'Contract Terms', value: 'Flexible' },
    ],
    color: 'from-amber-600 to-amber-700',
    image: unsplash('1521791136064-7986c2920216'),
    imageAlt: 'Business handshake representing a new specialist joining a team',
  },
];
