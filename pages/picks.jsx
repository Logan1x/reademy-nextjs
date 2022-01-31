import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import firebase from '../utility/firebase/firebase'
import Header from '../components/header'
import Footer from '../components/footer'

export default function DisplayData() {
  const [loading, setLoading] = useState(false)
  const [times, setTimes] = useState([])

  useEffect(() => {
    setLoading(true)
    const unsubscribe = firebase
      .firestore()
      .collection('books')
      .onSnapshot((snapshot) => {
        const newTimes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        // console.log(newTimes)
        setTimes(newTimes)
        // console.log(times)
      })
    setLoading(false)
    return unsubscribe
  }, [])

  // console.log(times)

  return (
    <div className='className="flex py-2" min-h-screen flex-col items-center justify-center bg-gray-50'>
      <Head>
        <title>Books | Reademy</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main className=" mx-4 my-2 md:mx-auto md:w-3/5 ">
        <p className="my-4 text-center text-2xl">
          {' '}
          What Others are reading...{' '}
        </p>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap items-stretch justify-center gap-2">
            {times.map((time) => (
              <div
                key={time.id}
                className="w-60 overflow-hidden rounded border border-2 bg-gray-100 p-2 text-center hover:shadow-lg"
              >
                <h3 className="text-gray-900">{time.bookName}</h3>
                <p className="text-neutral-400">{time.readerName} </p>
                <p className="text-xs"> {time.radioInput}</p>
                {time.twitterid != '' ? (
                  <p className="text-xs"> @{time.twitterid}</p>
                ) : (
                  ''
                )}
              </div>
            ))}
          </div>
        )}
        <p className="my-4  text-center">
          It's your time to{' '}
          <span className="font-semibold text-purple-600 underline hover:no-underline">
            <Link href="/">
              <a>Start </a>
            </Link>
          </span>
        </p>
      </main>
      <Footer />
    </div>
  )
}
