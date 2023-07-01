'use client'

import { IconPokeball } from '@/icons/IconPokeball'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type PokemonCardProps = { name: string; url: string }

interface typePokemon {
  slot: number
  type: {
    name: string
    url: string
  }
}

export default function PokemonCard({ name, url }: PokemonCardProps) {
  const [imagePokemon, setImagePokemon] = useState('')
  const [typesPokemon, setTypesPokemon] = useState([])

  useEffect(() => {
    fetchOnePokeData(url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchOnePokeData = async (url: string) => {
    const APIResponse = await fetch(url)
    if (APIResponse.status === 200) {
      const data = await APIResponse.json()
      console.log(data.types)
      setImagePokemon(data.sprites.front_default)
      setTypesPokemon(data.types)
      return data
    } else {
      console.log('Erro!')
    }
  }

  const typeColors: { [key: string]: string } = {
    fairy: 'bg-pink-300 border-pink-400',
    steel: 'bg-slate-400 border-slate-500',
    dark: 'bg-amber-900 border-amber-950',
    dragon: 'bg-indigo-700 border-indigo-800',
    ghost: 'bg-violet-900 border-violet-950',
    rock: 'bg-yellow-700 border-yellow-800',
    bug: 'bg-lime-500 border-lime-600',
    psychic: 'bg-pink-500 border-pink-600',
    flying: 'bg-violet-500 border-violet-600',
    ground: 'bg-orange-300 border-orange-400',
    poison: 'bg-purple-600 border-purple-700',
    fighting: 'bg-red-600 border-red-700',
    ice: 'bg-cyan-400 border-cyan-500',
    grass: 'bg-green-500 border-green-600',
    electric: 'bg-yellow-500 border-yellow-600',
    water: 'bg-sky-500 border-sky-600',
    fire: 'bg-orange-600 border-orange-700',
    normal: 'bg-amber-200 border-amber-300',
  }

  return (
    <div className=" flex w-[11rem] flex-col items-center justify-center rounded-md border border-black bg-black/30 p-1">
      <h1 className="m-1 flex items-center text-xl font-bold">
        <IconPokeball className="text-red-600" />
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h1>
      {imagePokemon && (
        <Image
          className="h-24 w-24"
          src={`${imagePokemon}`}
          alt={name}
          width={1000}
          height={1000}
        />
      )}
      <div className="flex justify-center">
        {typesPokemon.map((item: typePokemon) => (
          <p
            className={`m-1 rounded-md border px-1 font-medium ${
              typeColors[item.type.name]
            }`}
            key={`${item.slot}${name}`}
          >
            {item.type.name.toUpperCase()}
          </p>
        ))}
      </div>
    </div>
  )
}
