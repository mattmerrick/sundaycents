import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TLDR Money - Get Smarter About Money in 5 Minutes',
  description: 'A Byte sized daily money newsletter. Get smarter about money in 5 minutes.',
  keywords: 'TLDR Money, financial news, market summaries, personal finance, business news, policy updates, daily newsletter',
  authors: [{ name: 'TLDR Money' }],
  openGraph: {
    title: 'TLDR Money - Get Smarter About Money in 5 Minutes',
    description: 'A Byte sized daily money newsletter.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TLDR Money - Get Smarter About Money in 5 Minutes',
    description: 'A Byte sized daily money newsletter.',
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
          data-domain="sundaycents.com"
          src="https://datafa.st/js/script.js">
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
