import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Morning Markets - Markets Made Simple in 5 Minutes',
  description: 'Markets made simple — in 5 minutes a day. Daily insights on stocks, investing, and what\'s moving the market.',
  keywords: 'Morning Markets, financial news, market summaries, personal finance, business news, policy updates, daily newsletter',
  authors: [{ name: 'Morning Markets' }],
  creator: 'Morning Markets',
  publisher: 'Morning Markets',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Morning Markets - Markets Made Simple in 5 Minutes',
    description: 'Markets made simple — in 5 minutes a day. Daily insights on stocks, investing, and what\'s moving the market.',
    type: 'website',
    siteName: 'Morning Markets',
    url: 'https://tldrmoney.org',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Morning Markets Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morning Markets - Markets Made Simple in 5 Minutes',
    description: 'Markets made simple — in 5 minutes a day. Daily insights on stocks, investing, and what\'s moving the market.',
    images: ['/twitter-image'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script id="datafast-queue">
          {`
            window.datafast = window.datafast || function() {
              window.datafast.q = window.datafast.q || [];
              window.datafast.q.push(arguments);
            };
          `}
        </script>
        <script
          defer
          data-website-id="68bfba1e9857cbb4de137228"
          data-domain="tldrmoney.org"
          src="https://datafa.st/js/script.js">
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
