import './globals.css';
import NavBar from '@/components/NavBar';
import {Inter} from 'next/font/google';

const inter = Inter({subsets:['latin']})

export default function RootLayout ({children}:{children: React.ReactNode}){
  return(
    <html lang= 'en'>
      <body className={inter.className}>
        <NavBar/>
        <main className='max-w-3xl mx-auto py-10'>
          {children}
        </main>
      </body>
    </html>

  )
}