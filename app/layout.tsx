import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TRADESEF Academy',
  description: 'Join TRADESEF Academy for expert trading education, mentorship, workshops, and a vibrant community. Learn from professionals and elevate your trading journey.',
  generator: 'Next.js',
  keywords: [
    'Trading',
    'Forex',
    'Mentorship',
    'Workshops',
    'Education',
    'Elite Trading',
    'TRADESEF',
    'Community',
    'Financial Markets',
    'Traders',
    'Learning'
  ],
  authors: [{ name: 'TRADESEF Academy', url: 'https://tradesef.com/' }],
  openGraph: {
    title: 'TRADESEF Academy – Elite Trading Education & Mentorship',
    description: 'Join TRADESEF Academy for expert trading education, mentorship, workshops, and a vibrant community. Learn from professionals and elevate your trading journey.',
    url: 'https://tradesef.com/',
    siteName: 'TRADESEF Academy',
    images: [
      {
        url: '/logo_trans.png',
        width: 800,
        height: 600,
        alt: 'TRADESEF Academy Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRADESEF Academy – Elite Trading Education & Mentorship',
    description: 'Join TRADESEF Academy for expert trading education, mentorship, workshops, and a vibrant community. Learn from professionals and elevate your trading journey.',
    images: ['/logo_trans.png'],
    creator: '@tradesefacademy',
  },
  category: 'Education',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
