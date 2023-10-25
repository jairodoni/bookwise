import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { getCssText } from '../../stitches.config'
import { globalStyles } from '@/styles/global'
import { Sidebar } from '@/component'
import { ReactNode } from 'react'

globalStyles()

export const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BookWise',
  description: ' Avalie seus livros favoritos.',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={nunito.className}>
        <Sidebar />
        <div>{children}</div>
      </body>
    </html>
  )
}
