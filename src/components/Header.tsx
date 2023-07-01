import {
  IconChat3Fill,
  IconFileBarGraphFill,
  IconSearch,
  IconTeamFill,
} from '@/icons/IconsHeader'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed z-50 flex h-14 w-full flex-row items-center justify-center border-b border-black bg-3xg-blue">
      <Image
        className="z-1 relative p-4"
        src={'/Pokemon_Logo.png'}
        alt="Pokémon Logo"
        width={123}
        height={45}
        priority
      />
      <nav className="flex flex-row items-center justify-center text-logo-yellow">
        <Link className="flex flex-row items-center justify-center" href={'/'}>
          <IconSearch />
          <span className="hidden md:block">&nbsp;Search</span>
        </Link>
        <span className="text-logo-shadow">&nbsp;|&nbsp;</span>
        <Link
          className="flex flex-row items-center justify-center"
          href={'/pokemons'}
        >
          <IconFileBarGraphFill />
          <span className="hidden md:block">&nbsp;Pokémons</span>
        </Link>
        <span className="text-logo-shadow">&nbsp;|&nbsp;</span>
        <Link
          className="flex flex-row items-center justify-center"
          href={'/team'}
        >
          <IconTeamFill />
          <span className="hidden md:block">&nbsp;Team</span>
        </Link>
        <span className="text-logo-shadow">&nbsp;|&nbsp;</span>
        <Link
          className="flex flex-row items-center justify-center"
          href={'/profoak'}
        >
          <IconChat3Fill />
          <span className="hidden md:block">&nbsp;Prof Oak</span>
        </Link>
      </nav>
    </header>
  )
}
