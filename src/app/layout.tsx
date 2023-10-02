'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { cacheExchange, createClient, fetchExchange, Provider } from 'urql'

const inter = Inter({ subsets: ['latin'] })

const client = createClient({
  url: 'http://localhost:4000/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider value={client}>
          {children}
        </Provider>
        </body>
    </html>
  )
}
