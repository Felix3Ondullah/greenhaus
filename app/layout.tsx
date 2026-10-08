import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GREENHAUS — Brand Identity & Digital Marketing Studio',
  description: 'Greenhaus is a Nairobi-based creative studio building enduring visual identities and disciplined digital strategies for ambitious lifestyle brands.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="h-full scroll-smooth"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"/></head><body className="min-h-full overflow-x-hidden antialiased">{children}</body></html>;
}
