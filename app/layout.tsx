import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Arthur Lu — ML & AI Engineer',
  description: 'Arthur Lu (Zechuan Lu) is an M.S. Computer Science student at USC building machine learning and AI systems in Los Angeles.',
  generator: 'v0.app',
  keywords: ['Arthur Lu', 'Machine Learning', 'Artificial Intelligence', 'USC', 'LLM agents', 'Diffusion models'],
  openGraph: {
    title: 'Arthur Lu — ML & AI Engineer',
    description: 'M.S. Computer Science student at USC building machine learning and AI systems.',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Arthur Lu — ML & AI Engineer',
    description: 'M.S. Computer Science student at USC building machine learning and AI systems.',
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
  themeColor: '#f1f3f5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
