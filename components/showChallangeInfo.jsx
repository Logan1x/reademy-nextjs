import InputForm from '../pages/input.jsx'

export default function ShowChallangeInfo() {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const d = new Date()
  return (
    <div className=" mx-4 md:mx-auto md:w-3/5 ">
      <h1 className="my-4 text-2xl font-semibold">Monthly Reading Challenge</h1>
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
          graphic novels, humor books{' '}
        </li>
        <li>
          4. <span className="font-semibold">curiosity</span> - this is for avid
          readers, picking up an out of comfort zone book, different opinion,
          long/academic books like architecture books, game design, etc.
        </li>
      </ol>
      <p>
        Enter your submissions below for{' '}
        <span className="font-semibold"> {monthNames[d.getMonth()]} </span>{' '}
        month.
        {/* // TODO:
          I'd recommend to pick only 1 for now (thinking to put some monetary
          friction to join multiple clubs at the same time).
           You'll get the link to join the community Discord server after you fill out this form. See you there! 👋 */}
      </p>
      <InputForm />
    </div>
  )
}
