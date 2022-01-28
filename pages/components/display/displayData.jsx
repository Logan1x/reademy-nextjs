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
        console.log(times)
      })
    setLoading(false)
    return unsubscribe
  }, [])

  console.log(times)

  return (
    <div className='className="flex py-2" min-h-screen flex-col items-center justify-center'>
      <Head>
        <title>Books | Reademy</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <p className="my-4 text-center text-2xl"> Display Data </p>
      <Link href="/">
        <a>Home</a>
      </Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex items-center justify-center gap-2">
          {times.map((time) => (
            <div key={time.id} className="border border-2 p-2">
              <h3>{time.bookName}</h3>
              <p>{time.readerName} </p>
              <p> {time.radioInput}</p>
              <p> {time.twitterid}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
