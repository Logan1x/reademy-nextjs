import Link from 'next/link'

export default function Header() {
  return (
    <nav className="flex h-12 w-full items-center justify-around border-b bg-gray-900 text-gray-50">
      <Link href="/">
        <a className="hover:underline">Home</a>
      </Link>
      <div className="space-x-2">
        <Link href="/picks">
          <a className="hover:underline">Picks</a>
        </Link>
        <Link href="https://discord.gg/fBNnvYK8ZZ">
          <a className="hover:underline">Discord</a>
        </Link>
      </div>
    </nav>
  )
}
