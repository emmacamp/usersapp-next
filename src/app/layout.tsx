"use client"

import { Container } from '@mantine/core'
import './globals.css'
import { Inter } from 'next/font/google'
import NavigationBar from '@/components/NavigationBar';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Users App',
  description: 'Users App with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const queryClient = new QueryClient()

  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <NavigationBar />
          <Container size="md">
            {children}
          </Container>
        </QueryClientProvider>
      </body>
    </html>
  )
}
