'use client'

import { IconPokeball } from '@/icons/IconPokeball'
import { TypePokemon } from '@/interfaces/pokemons.interface'
import { typeColors } from '@/utils/typeColors'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type PokemonCardProps = { name: string; url: string }

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
      setImagePokemon(data.sprites.front_default)
      setTypesPokemon(data.types)
      return data
    } else {
      console.log('Erro!')
    }
  }

  return (
    <div className=" flex w-[14rem] flex-col items-center justify-center rounded-md border border-black bg-black/30 p-1 hover:bg-black/70">
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
        {typesPokemon.map((item: TypePokemon) => (
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
