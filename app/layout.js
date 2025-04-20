import { Inter } from 'next/font/google'
import { ConfigProvider } from 'antd'
import './globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import 'antd/dist/reset.css'
import { Suspense } from 'react'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tour & Travel - Explore the World',
  description: 'Your trusted partner for memorable travel experiences',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#1890ff',
            },
          }}
        >
          <Suspense fallback={<Loading />}>
            <Navbar />
            <main style={{ 
              minHeight: 'calc(100vh - 64px - 200px)', // 64px for navbar, 200px for footer
              paddingTop: '64px' // Add padding to account for fixed navbar
            }}>
              {children}
            </main>
            <Footer />
          </Suspense>
        </ConfigProvider>
      </body>
    </html>
  )
} 