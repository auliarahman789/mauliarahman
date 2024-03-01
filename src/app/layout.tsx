import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import StarsCanvas from './components/star'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Muhammad Aulia Rahman',
  description: 'Muhammad Aulia Rahman&rsquo;s Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />

        {children}
      </body>
    </html>
  );
}
