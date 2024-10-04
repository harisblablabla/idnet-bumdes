import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IdeaNet Smart Village',
  description: 'teknologi digital dari IdeaNet untuk menciptakan masa depan yang lebih baik bagi desa anda, dengan pengelolaan yang efisien dan layanan yang lebih baik.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
