import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Dashboard',
  description: 'Track your social media analytics across platforms',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
