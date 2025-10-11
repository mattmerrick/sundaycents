import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matt Merrick',
  description: 'Subscribe to My Daily Newsletter | Matt Merrick',
  openGraph: {
    type: 'website',
    url: 'https://www.mattmerrick.com/',
    title: 'Matt Merrick',
    description: 'Subscribe to My Daily Newsletter | Matt Merrick',
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
    title: 'Matt Merrick',
    description: 'Subscribe to My Daily Newsletter | Matt Merrick',
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
