import { useState } from 'react'

export default function InputForm() {
  const [radioInput, setradioInput] = useState('')

  function handleChange(e) {
    console.log('in ')
    const checked = e.target.checked
    console.log(checked)
    const checkedValue = e.target.value
    console.log(checkedValue)

    // to get the checked name
    const checkedName = e.target.name
    console.log(checkedName)
  }

  function handleSubmit(e) {
    e.preventDefault()
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
        className="border-1 rounded border border-gray-900"
        required
      />
      <label htmlFor="">
        Email<span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        className="border-1 rounded border border-gray-900"
        required
      />
      <label htmlFor="">
        Book Name<span className="text-red-500">*</span>{' '}
      </label>
      <input
        type="text"
        name="bookName"
        className="border-1 rounded border border-gray-900"
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
          onChange={(e) => setradioInput(e.target.value)}
        />{' '}
        <span className="rounded bg-red-300 px-2 py-1 text-sm">Adulting</span>
      </label>
      <label htmlFor="">
        <input
          type="radio"
          name="Clubs"
          value={'Escape'}
          onChange={(e) => setradioInput(e.target.value)}
        />{' '}
        <span className="rounded bg-indigo-300 px-2 py-1 text-sm">Escape</span>{' '}
      </label>
      <label htmlFor="">
        <input
          type="radio"
          name="Clubs"
          value={'Fun'}
          onChange={(e) => setradioInput(e.target.value)}
        />{' '}
        <span className="rounded bg-purple-300 px-2 py-1 text-sm">Fun</span>{' '}
      </label>
      <label htmlFor="">
        <input
          type="radio"
          name="Clubs"
          value={'Curiosity'}
          onChange={(e) => setradioInput(e.target.value)}
        />{' '}
        <span className="rounded bg-yellow-300 px-2 py-1 text-sm">
          Curiosity
        </span>{' '}
      </label>
      <label htmlFor="">Twitter </label>
      <input
        type="url"
        name="twitter"
        className="border-1 rounded border border-gray-900"
      />
      <button
        className="my-2 rounded bg-purple-600 px-2 py-1 text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}
