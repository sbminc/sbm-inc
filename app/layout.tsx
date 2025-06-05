import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SBM Inc. | Empowering BIPOC Youth',
  description: 'SBM Inc. is dedicated to empowering BIPOC youth through education, mentorship, and community support. Join us in our mission to create lasting positive change.',
  keywords: 'BIPOC youth, education, mentorship, community support, empowerment, SBM Inc.',
  authors: [{ name: 'SBM Inc.' }],
  creator: 'SBM Inc.',
  publisher: 'SBM Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sbm-inc.org',
    title: 'SBM Inc. | Empowering BIPOC Youth',
    description: 'Empowering BIPOC youth through education, mentorship, and community support.',
    siteName: 'SBM Inc.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SBM Inc. - Empowering BIPOC Youth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SBM Inc. | Empowering BIPOC Youth',
    description: 'Empowering BIPOC youth through education, mentorship, and community support.',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
