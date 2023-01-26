import './globals.css'
import {Montserrat} from "@next/font/google"


const montserrat=Montserrat({
  weight:['400', '600', '700', '900'], 
  subsets:['latin'],
  variable:'--font-montserrat'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.className} mx-10`}>
      <h1 className='text-cust5 text-font-extrabold text-3xl tracking-widest uppercase font-black mt-5 bg-cust7 py-5 px-2 text-center' style={{textShadow: '2px 2px 2px black, 2px 2px 2px black'}}>Sunbird Movies</h1>


        {children}</body>
    </html>
  )
}

// [build]
// command = "npm run build && npm run export"
// publish = "out"