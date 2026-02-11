import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Professional Prediction Market Trader - Join Me on Polymarket',
  description: 'I\'m trying to become a professional prediction market trader. Join me on this exciting journey into the future of markets.',
  keywords: 'prediction markets, polymarket, trading, forecasting, future markets, professional trader, crypto markets',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.mattmerrick.com/'
  },
  openGraph: {
    title: 'Professional Prediction Market Trader - Join Me',
    description: 'Navigate the future of markets with precision. Join me on Polymarket as I work to become a professional prediction market trader.',
    type: 'website',
    siteName: 'Prediction Market Trader',
    url: 'https://www.mattmerrick.com/',
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'Professional Prediction Market Trader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Prediction Market Trader - Join Me',
    description: 'I\'m trying to become a professional prediction market trader. Join me on Polymarket!',
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
      <body>
        <Script
          id="datafast-queue"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.datafast = window.datafast || function() {
              window.datafast.q = window.datafast.q || [];
              window.datafast.q.push(arguments);
            };
          `,
          }}
        />
        <Script
          defer
          data-website-id="68bfba1e9857cbb4de137228"
          data-domain="mattmerrick.com"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  )
}
