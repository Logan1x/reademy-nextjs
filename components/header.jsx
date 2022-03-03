import Link from 'next/link'

export default function Header() {
  return (
    <nav className="flex h-12 w-full items-center justify-between border-b bg-gray-900 px-2 text-gray-50 md:justify-around">
      <Link href="/">
        <a className="hover:underline">Home</a>
      </Link>
      <div className="space-x-2">
        <Link href="/picks">
          <a className="hover:underline">Picks</a>
        </Link>
        <Link href="https://twitter.com/ReademyCafe">
          <a className="hover:underline">Twitter</a>
        </Link>
      </div>
    </nav>
  )
}
