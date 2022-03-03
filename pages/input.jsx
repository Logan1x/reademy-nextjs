import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import firebase from '../utility/firebase/firebase'
import toast, { Toaster } from 'react-hot-toast'

export default function InputForm() {
  const router = useRouter()

  const [readerName, setReaderName] = useState('')
  const [bookName, setBookName] = useState('')
  const [radioInput, setRadioInput] = useState('')
  const [twitterid, setTwitterid] = useState('')
  const [error, setError] = useState('')

  // toast notication on submit

  const successNotify = () =>
    toast.success('Successfully created!', {
      position: 'bottom-center',
    })

  const errorNotify = () =>
    toast.error("This didn't work.", {
      position: 'bottom-center',
    })

  // Save to local storage

  function saveToLocalStorage(data) {
    localStorage.setItem('userData', JSON.stringify(data))
  }

  // Get from local storage

  function getFromLocalStorage() {
    const userData = JSON.parse(localStorage.getItem('userData'))

    if (userData) {
      setReaderName(userData.readerName)
      setBookName(userData.bookName)
      setTwitterid(userData.twitterid)
    }
  }

  // Save to firebase

  function handleSubmit(e) {
    e.preventDefault()
    if (twitterid != '' && twitterid[0] === '@') {
      setTwitterid(twitterid.slice(1))
    }
    if (readerName.length < 2 || bookName.length < 2 || twitterid.length < 2) {
      setError('Please enter a valid input of at least 2 characters')
    } else if (radioInput === '') {
      setError('Please select a Club Theme')
    } else {
      setError('')
      firebase
        .firestore()
        .collection('books')
        .add({
          readerName,
          bookName,
          radioInput,
          twitterid,
          month: new Date().getMonth(),
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          const dataLocal = {
            readerName,
            bookName,
            radioInput,
            twitterid,
            month: new Date().getMonth(),
          }
          saveToLocalStorage(dataLocal)
          setReaderName('')
          setBookName('')
          setRadioInput('')
          setTwitterid('')
          successNotify()
          setTimeout(router.push('/picks'), 2000)
        })
        .catch((error) => {
          errorNotify()
        })
    }
  }

  // Get data from local storage

  useEffect(() => {
    getFromLocalStorage()
  }, [])

  return (
    <form
      className="my-3 grid justify-items-start gap-2"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label htmlFor="">
        Name<span className="text-red-500">*</span>{' '}
      </label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={readerName}
        onChange={(e) => setReaderName(e.target.value)}
        className="border-1 w-full rounded border border-gray-900 px-2 py-1 text-gray-700 md:w-auto "
        required
      />
      <label htmlFor="">
        Book Name<span className="text-red-500">*</span>{' '}
      </label>
      <input
        type="text"
        name="bookName"
        placeholder="Book Name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        className="border-1 w-full rounded border border-gray-900 px-2 py-1 text-gray-700 md:w-auto"
        required
      />
      <label htmlFor="">
        Clubs<span className="text-red-500">*</span>{' '}
      </label>
      <label htmlFor="">
        <input
          type="radio"
          name="Clubs"
          value={'Adulting'}
          onChange={(e) => setRadioInput(e.target.value)}
          checked={radioInput === 'Adulting'}
        />{' '}
        <span className="rounded bg-red-100 px-2 py-1 text-sm text-red-700">
          Adulting
        </span>
      </label>
      <label htmlFor="">
        <input
          type="radio"
          name="Clubs"
          value={'Escape'}
          onChange={(e) => setRadioInput(e.target.value)}
          checked={radioInput === 'Escape'}
        />{' '}
        <span className="rounded bg-indigo-100 px-2 py-1 text-sm text-indigo-700">
          Escape
        </span>{' '}
      </label>
      <label htmlFor="">
        <input
          type="radio"
          name="Clubs"
          value={'Fun'}
          onChange={(e) => setRadioInput(e.target.value)}
          checked={radioInput === 'Fun'}
        />{' '}
        <span className="rounded bg-purple-100 px-2 py-1 text-sm text-purple-700">
          Fun
        </span>{' '}
      </label>
      <label htmlFor="">
        <input
          type="radio"
          name="Clubs"
          value={'Curiosity'}
          onChange={(e) => setRadioInput(e.target.value)}
          checked={radioInput === 'Curiosity'}
        />{' '}
        <span className="rounded bg-yellow-100 px-2 py-1 text-sm text-yellow-700">
          Curiosity
        </span>{' '}
      </label>
      <label htmlFor="">Twitter Username</label>
      <input
        type="text"
        name="twitter"
        placeholder="twitterid"
        value={twitterid}
        onChange={(e) => setTwitterid(e.target.value)}
        className="border-1 w-full rounded border border-gray-900 px-2 py-1 text-gray-700 md:w-auto"
      />
      <small className="text-red-500">{error}</small>
      <button
        className="my-2 w-full rounded bg-purple-600 px-2 py-1 text-white md:w-auto"
        type="submit"
      >
        Submit
      </button>
      <Toaster />
    </form>
  )
}
