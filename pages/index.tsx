import Head from 'next/head'
import Link from 'next/link'

import ShowChallangeInfo from "./components/inputForm/showChallangeInfo";

export default function Home() {

 

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <Head>
        <title>Reademy</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <nav className="flex h-12 w-full items-center justify-around border-b bg-gray-900 text-gray-50">
      <Link href="/">
          <a>Home</a>
        </Link>
      <Link href="/components/display/displayData">
          <a>Shelf</a>
        </Link>
      </nav>

      <main>
      
      <ShowChallangeInfo/>
      </main>

      <footer className="flex h-12 w-full items-center justify-center border-t">
        <p>Developed By <span className='underline text-blue-500 hover:no-underline cursor-pointer'> <a href="https://logan1x.github.io">Logan1x</a> </span></p>
      </footer>
    </div>
  )
}
