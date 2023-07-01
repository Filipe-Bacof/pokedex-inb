'use client'

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

  return (
    <div className="flex w-[11rem] flex-col items-center justify-center rounded-md border border-black p-1">
      <h1 className="m-1">{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
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
          <p className="m-1 rounded-md border" key={`${item.slot}${name}`}>
            {item.type.name}
          </p>
        ))}
      </div>
    </div>
  )
}
