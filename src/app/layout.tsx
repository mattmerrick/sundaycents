import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matt Merrick',
  description: 'Building a $1M solopreneur business - daily newsletter',
  openGraph: {
    type: 'website',
    url: 'https://www.mattmerrick.com/',
    title: 'Matt Merrick',
    description: 'Building a $1M solopreneur business - daily newsletter',
    images: ['/opengraph.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matt Merrick',
    description: 'Building a $1M solopreneur business - daily newsletter',
    images: ['/opengraph.jpg'],
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
      <body className={playfair.className}>
        {children}
      </body>
    </html>
  )
}
