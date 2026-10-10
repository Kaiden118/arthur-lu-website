import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arthur Lu — Computer Science',
  description: 'Arthur Lu is an M.S. Computer Science student at the University of Southern California researching machine learning, medical imaging, and LLM agents.',
  generator: 'v0.app',
  keywords: ['Arthur Lu', 'Computer Science', 'USC', 'Machine Learning', 'Medical Imaging', 'LLM agents'],
  openGraph: {
    title: 'Arthur Lu — Computer Science',
    description: 'M.S. Computer Science student at the University of Southern California.',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Arthur Lu — Computer Science',
    description: 'M.S. Computer Science student at the University of Southern California.',
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
