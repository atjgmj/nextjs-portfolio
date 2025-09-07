import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'AI × フルスタックエンジニア | ポートフォリオ',
    template: '%s | AI × フルスタックエンジニア',
  },
  description: 'Next.js × FastAPI × AI を活用したWebアプリケーション開発を専門とするフルスタックエンジニアのポートフォリオサイトです。RAG、チャットボット、自動化ツールなどの開発実績をご紹介しています。',
  openGraph: {
    title: 'AI × フルスタックエンジニア | ポートフォリオ',
    description: 'Next.js × FastAPI × AI を活用したWebアプリケーション開発を専門とするフルスタックエンジニアのポートフォリオサイト',
    url: baseUrl,
    siteName: 'AI × フルスタックエンジニア ポートフォリオ',
    locale: 'ja_JP',
    type: 'website',
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
