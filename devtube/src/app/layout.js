import { Providers } from './GlobalRedux/provider'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DevTube',
  description: 'Youtube for devs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${inter.className} min-h-screen flex flex-col text-center`}>
          <Header />
          <main className='grow'>
            {children}
          </main>
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
