import '../styles/globals.css';
import { Header } from '@/components/Header';

export const metadata = {
  title: 'Devmundus',
  description: 'Connecting tech stars with companies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="min-h-screen px-4 md:px-8 py-6">{children}</main>
      </body>
    </html>
  );
}
