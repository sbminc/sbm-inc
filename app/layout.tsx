import type { Metadata } from 'next'
import './globals.css'
import BackToTop from '@/components/back-to-top'

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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google verification code
  },
}

// Structured data for the organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'NonprofitOrganization',
  name: 'SBM Inc.',
  url: 'https://sbm-inc.org',
  logo: 'https://sbm-inc.org/SBM-Logo-4.png',
  description: 'SBM Inc. is dedicated to empowering BIPOC youth through education, mentorship, and community support.',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Florida',
    addressCountry: 'US'
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61576995671629',
    'https://www.instagram.com/sbmincorg/',
    'https://www.youtube.com/channel/UCj_LR2uIn5mdwvT5UB9BsdA'
  ]
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
        <link rel="canonical" href="https://sbminc.org" />
        <meta name="description" content="SBM Inc. is dedicated to empowering BIPOC youth through education, mentorship, and community support. Join us in our mission to create lasting positive change." />
        <meta name="keywords" content="BIPOC youth, education, mentorship, community support, empowerment, SBM Inc." />
        <meta property="og:title" content="SBM Inc. | Empowering BIPOC Youth" />
        <meta property="og:description" content="Empowering BIPOC youth through education, mentorship, and community support." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://sbminc.org" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SBM Inc. | Empowering BIPOC Youth" />
        <meta name="twitter:description" content="Empowering BIPOC youth through education, mentorship, and community support." />
        <meta name="twitter:image" content="/og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
