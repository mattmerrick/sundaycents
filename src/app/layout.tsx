import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sunday Cents - Wealth Building Newsletter for Go-Getters',
  description: 'A newsletter for go-getters ready to grow wealth, build freedom, and live life on their own terms. Ten insights delivered every Sunday.',
  keywords: 'newsletter, wealth building, financial freedom, investing, entrepreneurship',
  authors: [{ name: 'Sunday Cents' }],
  openGraph: {
    title: 'Sunday Cents - Wealth Building Newsletter',
    description: 'Ten actionable insights delivered every Sunday for go-getters ready to build wealth.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunday Cents - Wealth Building Newsletter',
    description: 'Ten actionable insights delivered every Sunday for go-getters ready to build wealth.',
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
