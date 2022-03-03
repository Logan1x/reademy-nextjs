import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import firebase from '../utility/firebase/firebase'
import Header from '../components/header'

export default function DisplayData() {
  const [loading, setLoading] = useState(false)
  const [booksData, setBooksData] = useState([])

  const cardShadowColor = {
    Adulting: 'hover:shadow-red-400 border-b-red-300',
    Curiosity: 'hover:shadow-yellow-400 border-b-yellow-400',
    Fun: 'hover:shadow-purple-400 border-b-purple-400',
    Escape: 'hover:shadow-indigo-400 border-b-indigo-400',
  }

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
        setBooksData(newTimes)
        setLoading(false)
      })
    return unsubscribe
  }, [])

  return (
    <div className='className="flex py-2" min-h-screen flex-col items-center justify-center bg-gray-50'>
      <Head>
        <title>Book Picks | Reademy</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main className=" mx-4 my-2 md:mx-auto md:w-3/5 ">
        <p className="my-4 text-center text-2xl">
          {' '}
          What Others are reading...{' '}
        </p>

        {loading ? <p className="text-center">Loading...</p> : ''}
        <div className="flex flex-wrap items-stretch justify-center gap-2">
          {booksData.map((time) => (
            <div
              key={time.id}
              className={`w-60 overflow-hidden rounded border border-2 bg-gray-100 p-2 text-center hover:shadow ${
                cardShadowColor[time.radioInput]
              }`}
            >
              <h3 className="text-gray-900">{time.bookName}</h3>
              <p className="text-neutral-400">{time.readerName} </p>
              <p className="text-xs"> {time.radioInput}</p>
              {time.twitterid != '' ? (
                <p className="cursor-pointer text-xs hover:text-[#1da1f2]">
                  <a href={`https://twitter.com/${time.twitterid}`}>
                    @{time.twitterid}
                  </a>
                </p>
              ) : (
                ''
              )}
            </div>
          ))}
        </div>

        <p className="my-4  text-center">
          It's your time to{' '}
          <span className="text-purple-600 underline hover:font-semibold hover:no-underline">
            <Link href="/">
              <a>Start </a>
            </Link>
          </span>
        </p>
      </main>
    </div>
  )
}
