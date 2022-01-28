import Head from 'next/head'
import Link from 'next/link'

import ShowChallangeInfo from "./components/inputForm/showChallangeInfo";

import DisplayData from "./components/display/displayData";


export default function Home() {

 

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Reademy</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
      <Link href="/components/display/displayData">
          <a>Display</a>
        </Link>
      <ShowChallangeInfo/>
      </main>

      <footer className="flex h-16 w-full items-center justify-center border-t">
        <p>Developed By <span className='underline text-blue-500 hover:no-underline cursor-pointer'> <a href="https://logan1x.github.io">Logan1x</a> </span></p>
      </footer>
    </div>
  )
}
