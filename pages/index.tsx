import Head from 'next/head'
import InputForm from "./components/input";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className=" md:w-2/5 mx-4 md:mx-auto ">
      <h1 className="text-2xl font-semibold my-4">Monthly Reading Challenge</h1>
      <p>
        We have 4 different themes (will have different channels for each and
        the idea is to read one book a month):
      </p>
      <ol className="my-2">
        <li>
          1. <span className="font-semibold">adulting</span> - anything that you
          know will help you somehow, like atomic habits, the defining decade,
          becoming, lean in, educated, etc.
        </li>
        <li>
          2. <span className="font-semibold">escape</span> - classic
          fiction/scifi go here
        </li>
        <li>
          3. <span className="font-semibold">fun</span> - children's literature,
          graphic novels, humor books{" "}
        </li>
        <li>
          4. <span className="font-semibold">curiosity</span> - this is for avid
          readers, picking up an out of comfort zone book, different opinion,
          long/academic books like architecture books, game design, etc.
        </li>
      </ol>
      <p>
        I'd recommend to pick only 1 for now (thinking to put some monetary
        friction to join multiple clubs at the same time).
        {/* // TODO:  You'll get the link to join the community Discord server after you fill out this form. See you there! 👋 */}
      </p>
      <InputForm />
    </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <p>Made By <span>Logan1x</span></p>
      </footer>
    </div>
  )
}
