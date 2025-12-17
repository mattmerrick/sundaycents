import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Subscribe If you Want to Learn.',
  description: 'Get smarter every morning at 6am.',
  keywords: 'solopreneur, solo business, side hustle, audience building, newsletter, Matt Merrick, 5-day course',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.mattmerrick.com/'
  },
  openGraph: {
    title: 'Subscribe if you want to learn. | Matt Merrick',
    description: 'Get smarter every morning at 6am.',
    type: 'website',
    siteName: 'Matt Merrick',
    url: 'https://www.mattmerrick.com/',
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'Matt Merrick - Get smarter every morning at 6am',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get smarter every morning at 6am | Matt Merrick',
    description: 'A daily newsletter to make you think.',
    images: ['/share.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
