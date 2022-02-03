import Head from 'next/head'

import ShowChallangeInfo from "../components/showChallangeInfo";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {

 

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Reademy: Monthly Reading Challenge</title>
        <meta name="title" content="Reademy: Monthly Reading Challenge"/>
        <meta name="description" content="Reading alone is boring, Join us to read, learn, and discuss together."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://reademy.vercel.app/"/>
        <meta property="og:title" content="Reademy: Monthly Reading Challenge"/>
        <meta property="og:description" content="Reading alone is boring, Join us to read, learn, and discuss together."/>
        <meta property="og:image" content="https://i.imgur.com/Aoc4wLR.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://reademy.vercel.app/"/>
        <meta property="twitter:title" content="Reademy: Monthly Reading Challenge"/>
        <meta property="twitter:description" content="Reading alone is boring, Join us to read, learn, and discuss together."/>
        <meta property="twitter:image" content="https://i.imgur.com/Aoc4wLR.png"/>
      </Head>

      <Header />

      <main>
      
      <ShowChallangeInfo/>
      </main>

     <Footer />
    </div>
  )
}
