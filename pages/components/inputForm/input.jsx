import { useState } from 'react'

import firebase from '../firebase/firebase'

import toast, { Toaster } from 'react-hot-toast'

export default function InputForm() {
  const [readerName, setReaderName] = useState('')
  const [readerEmail, setReaderEmail] = useState('')
  const [bookName, setBookName] = useState('')
  const [radioInput, setRadioInput] = useState('')
  const [twitterid, setTwitterid] = useState('')
  const [error, setError] = useState('')

  const successNotify = () =>
    toast.success('Successfully created!', {
      position: 'bottom-center',
    })

  const errorNotify = () =>
    toast.error("This didn't work.", {
      position: 'bottom-center',
    })

  function formSubmit(e) {
    e.preventDefault()
    firebase
      .firestore()
      .collection('times')
      .add({
        uid,
        title,
        textdata,
      })
      .then(() => {
        setTitle('')
        setTextdata('')
        successNotify()
      })
      .catch((error) => {
        errorNotify()
      })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (radioInput === '') {
      setError('Please select a radio button')
    } else {
      setError('')
      firebase
        .firestore()
        .collection('books')
        .add({
          readerName,
          readerEmail,
          bookName,
          radioInput,
          twitterid,
          month: new Date().getMonth(),
        })
        .then(() => {
          setReaderName(''),
            setReaderEmail(''),
            setBookName(''),
            setRadioInput(''),
            setTwitterid('')
          console.log('success')
          notify()
        })
    }
  }

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
        Email<span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        placeholder="yourname@example.com"
        value={readerEmail}
        onChange={(e) => setReaderEmail(e.target.value)}
        className="border-1 w-full rounded border border-gray-900 px-2 py-1 text-gray-700 md:w-auto"
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
      <small className="text-red-500">{error}</small>
      <label htmlFor="">
        <input
          type="radio"
          name="Clubs"
          value={'Adulting'}
          onChange={(e) => setRadioInput(e.target.value)}
        />{' '}
        <span className="rounded bg-red-100 px-2 py-1 text-sm text-red-500">
          Adulting
        </span>
      </label>
      <label htmlFor="">
        <input
          type="radio"
          name="Clubs"
          value={'Escape'}
          onChange={(e) => setRadioInput(e.target.value)}
        />{' '}
        <span className="rounded bg-indigo-100 px-2 py-1 text-sm text-indigo-500">
          Escape
        </span>{' '}
      </label>
      <label htmlFor="">
        <input
          type="radio"
          name="Clubs"
          value={'Fun'}
          onChange={(e) => setRadioInput(e.target.value)}
        />{' '}
        <span className="rounded bg-purple-100 px-2 py-1 text-sm text-purple-500">
          Fun
        </span>{' '}
      </label>
      <label htmlFor="">
        <input
          type="radio"
          name="Clubs"
          value={'Curiosity'}
          onChange={(e) => setRadioInput(e.target.value)}
        />{' '}
        <span className="rounded bg-yellow-100 px-2 py-1 text-sm text-yellow-500">
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
      <button
        className="my-2 rounded bg-purple-600 px-2 py-1 text-white"
        type="submit"
      >
        Submit
      </button>
      <Toaster />
    </form>
  )
}
