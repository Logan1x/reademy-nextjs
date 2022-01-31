import Head from 'next/head'

import ShowChallangeInfo from "../components/showChallangeInfo";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {

 

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <Head>
        <title>Reademy</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main>
      
      <ShowChallangeInfo/>
      </main>

     <Footer />
    </div>
  )
}
