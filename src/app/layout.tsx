import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mattmerrick.com'),
  title: 'A Daily Newsletter to Make You Think | Matt Merrick',
  description: 'A daily newsletter to make you think. Subscribe for thoughtful insights, every day.',
  openGraph: {
    type: 'website',
    url: 'https://www.mattmerrick.com/',
    title: 'A Daily Newsletter to Make You Think | Matt Merrick',
    description: 'A daily newsletter to make you think.',
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'Matt Merrick - Building a $1M solopreneur business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Daily Newsletter to Make You Think | Matt Merrick',
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
      <head>
        <script id="datafast-queue" dangerouslySetInnerHTML={{
          __html: `
            window.datafast = window.datafast || function() {
              window.datafast.q = window.datafast.q || [];
              window.datafast.q.push(arguments);
            };
          `
        }} />
        <script
          defer
          data-website-id="68bfba1e9857cbb4de137228"
          data-domain="mattmerrick.com"
          src="https://datafa.st/js/script.js">
        </script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
