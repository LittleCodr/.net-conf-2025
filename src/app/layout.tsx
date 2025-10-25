import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500']
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: '.NET Conf 2025 — MSA GLA Chapter | Jan 11, 2026',
  description: 'Join Microsoft Student Ambassadors GLA Chapter\'s virtual .NET Conf 2025 watch party on January 11, 2026 (18:00–21:00 IST). Official .NET 10 sessions, local demos, and community Q&A. Free to attend — register to get the stream link.',
  openGraph: {
    title: '.NET Conf 2025 — MSA GLA Chapter',
    description: 'Watch .NET 10 highlights, local demos, and join a live developer Q&A with Microsoft Student Ambassadors. Jan 11, 2026 · 18:00–21:00 IST.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://dotnetconf-gla.vercel.app',
    siteName: '.NET Conf 2025 MSA GLA',
  },
  twitter: {
    card: 'summary_large_image',
    title: '.NET Conf 2025 — MSA GLA Chapter',
    description: 'Watch .NET 10 highlights, local demos, and join a live developer Q&A with Microsoft Student Ambassadors. Jan 11, 2026 · 18:00–21:00 IST.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans bg-gradient-to-b from-navy to-indigo text-white min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
