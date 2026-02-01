import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Weather Bot - Join the Revolution',
  description: 'Working on the perfect weather bot so a hedge fund hires me. Check it out on Telegram.',
  keywords: 'weather bot, weather trading, hedge fund, trading bot, weather prediction, telegram bot',
  authors: [{ name: 'Matt Merrick' }],
  creator: 'Matt Merrick',
  publisher: 'Matt Merrick',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.mattmerrick.com/'
  },
  openGraph: {
    title: 'Weather Bot - Working on the perfect weather bot',
    description: 'Join the journey to build the perfect weather trading bot. Check it out on Telegram.',
    type: 'website',
    siteName: 'Weather Bot',
    url: 'https://www.mattmerrick.com/',
    images: [
      {
        url: '/share.png',
        width: 1200,
        height: 630,
        alt: 'Weather Bot - Join the Revolution',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weather Bot - Join the Revolution',
    description: 'Working on the perfect weather bot so a hedge fund hires me.',
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
