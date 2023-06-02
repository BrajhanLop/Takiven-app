import Navbar from '@/components/Header/Navbar'
import './globals.css'
import FooterSec from '@/components/Footer/FooterSec'



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=' min-h-screen md:bg-slate-200 flex flex-col md:justify-between'>
        <Navbar/>
        {children}
        <FooterSec/>
        </body>
    </html>
  )
}
