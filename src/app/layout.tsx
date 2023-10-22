import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { getCssText } from '../../stitches.config'
import { globalStyles } from '@/styles/global'

globalStyles()

export const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BookWise',
  description: ' Avalie seus livros favoritos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={nunito.className}>
        <div>{children}</div>
      </body>
    </html>
  )
}
