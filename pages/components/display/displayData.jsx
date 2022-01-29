import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import firebase from '../firebase/firebase'

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
    <div className='className="flex py-2" min-h-screen flex-col items-center justify-center'>
      <Head>
        <title>Books | Reademy</title>
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
      <main className=" mx-4 my-2 md:mx-auto md:w-3/5 ">
        <p className="my-4 text-center text-2xl">
          {' '}
          What Others are reading...{' '}
        </p>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-2">
            {times.map((time) => (
              <div
                key={time.id}
                className="h-28 w-60 overflow-hidden rounded border border-2 bg-gray-100 p-2 text-center hover:shadow-lg"
              >
                <h3>{time.bookName}</h3>
                <p>{time.readerName} </p>
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
        <p className="my-4 text-center">
          It's your time to{' '}
          <span className="my-2 rounded bg-purple-600 px-2 py-1 text-white">
            {' '}
            Start{' '}
          </span>{' '}
        </p>
      </main>
      <footer className="flex h-12 w-full items-center justify-center border-t">
        <p>
          Developed By{' '}
          <span className="cursor-pointer text-blue-500 underline hover:no-underline">
            {' '}
            <a href="https://logan1x.github.io">Logan1x</a>{' '}
          </span>
        </p>
      </footer>
    </div>
  )
}
