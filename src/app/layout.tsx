import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Unsplash Collection',
  description: 'A collection of images from Unsplash',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
