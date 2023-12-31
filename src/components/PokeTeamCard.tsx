'use client'

import { IconDelete } from '@/icons/IconDelete'
import { IconPokeball } from '@/icons/IconPokeball'
import { TypePokemon } from '@/interfaces/pokemons.interface'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type PokeTeamCardProps = {
  name?: string
  leader?: boolean
  onRemove: () => void
}

export default function PokeTeamCard({
  name,
  leader = false,
  onRemove,
}: PokeTeamCardProps) {
  const [imagePokemon, setImagePokemon] = useState('')
  const [typesPokemon, setTypesPokemon] = useState([])

  async function fetchPokemon(poke: string) {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    if (APIResponse.status === 200) {
      const data = await APIResponse.json()

      data.sprites &&
        data.sprites.versions &&
        setImagePokemon(
          data.sprites.versions['generation-v']['black-white'].animated
            .front_default,
        )

      data.types && setTypesPokemon(data.types)

      console.log(data)
      return data
    } else {
      console.log('Erro!')
    }
  }

  useEffect(() => {
    if (name) {
      fetchPokemon(name)
    }
  }, [name])

  const typeColors: { [key: string]: string } = {
    bug: 'bg-lime-500 border-lime-600',
    dark: 'bg-zinc-900 border-zinc-950 text-white',
    dragon: 'bg-indigo-700 border-indigo-800',
    electric: 'bg-yellow-500 border-yellow-600',
    fairy: 'bg-pink-300 border-pink-400',
    fighting: 'bg-red-600 border-red-700',
    fire: 'bg-orange-600 border-orange-700',
    flying: 'bg-violet-500 border-violet-600',
    ghost: 'bg-violet-900 border-violet-950',
    grass: 'bg-green-500 border-green-600',
    ground: 'bg-orange-300 border-orange-400',
    ice: 'bg-cyan-400 border-cyan-500',
    normal: 'bg-amber-200 border-amber-300',
    poison: 'bg-purple-600 border-purple-700',
    psychic: 'bg-pink-500 border-pink-600',
    rock: 'bg-yellow-700 border-yellow-800',
    steel: 'bg-slate-400 border-slate-500',
    water: 'bg-sky-500 border-sky-600',
  }

  return (
    <div
      className={`my-2 w-80 rounded-lg border border-blue-600 bg-black/80 p-4 md:p-2 ${
        leader
          ? 'h-52 text-gray-200 md:h-[30rem]'
          : 'h-16 text-gray-400 md:h-[5.6rem]'
      }`}
    >
      <div
        className={`flex items-center justify-between ${!name && 'hidden'} ${
          leader ? '' : '-translate-y-2 md:translate-y-0'
        }`}
      >
        <h2
          className={`pl-2 text-sm font-semibold md:text-lg ${
            leader ? 'pb-0 text-4xl' : 'pb-[0.75rem] md:pb-0'
          }`}
        >
          {(name ?? '').charAt(0).toUpperCase() + (name ?? '').slice(1)}
        </h2>
        <div
          onClick={onRemove}
          className="cursor-pointer p-2 hover:text-red-500"
        >
          <IconDelete />
        </div>
      </div>
      {imagePokemon && (
        <div
          className={`relative -translate-y-14 translate-x-1/4 ${
            !name && 'hidden'
          } ${!leader && 'md:-translate-y-4 md:translate-x-2/3'}`}
        >
          <Image
            className={`absolute z-20 ${
              leader
                ? 'h-24 w-24 translate-y-12 md:h-48 md:w-48 md:-translate-x-8 md:translate-y-32'
                : 'h-12 w-12 translate-x-[4.5rem] translate-y-[0.9rem] md:-translate-y-[0.25rem] md:translate-x-[0]'
            }`}
            src={`${imagePokemon}`}
            alt={imagePokemon}
            width={1000}
            height={1000}
          />
          <div
            className={`absolute z-10 ${
              leader
                ? 'translate-x-12 translate-y-12 text-[7rem] text-red-600 md:-translate-x-12 md:translate-y-24 md:text-[16rem]'
                : 'translate-x-24 translate-y-[0.9rem] text-[3rem] text-black md:-translate-x-8 md:-translate-y-[0.25rem] md:text-5xl'
            }`}
          >
            <IconPokeball />
          </div>
        </div>
      )}
      {!name && name === '' && (
        <div>
          <div
            className={`z-10 pt-6 ${
              leader
                ? 'translate-x-[5.4rem] text-[7rem] text-red-800 md:translate-x-[1.7rem] md:translate-y-4 md:md:text-[16rem]'
                : '-translate-y-[2.1rem] translate-x-[4rem] text-[3rem] text-white md:-translate-y-2 md:translate-x-[9.3rem] md:text-5xl'
            }`}
          >
            <IconPokeball />
          </div>
          <p
            className={`z-20 flex items-center justify-center font-extrabold text-red-600 md:-translate-x-[4rem] md:-translate-y-[2.8rem] ${
              leader
                ? 'md:translate-x-[0.3rem] md:translate-y-8 md:text-3xl'
                : '-translate-y-[4.4rem] translate-x-[2rem]'
            }`}
          >
            EMPTY SLOT
          </p>
        </div>
      )}
      <div
        className={`flex ${
          leader
            ? 'translate-y-[6.5rem] justify-center'
            : 'max-w-[250px] -translate-y-[1rem] translate-x-1 justify-start md:translate-y-[0]'
        } ${!name && 'hidden'}`}
      >
        {typesPokemon.map((item: TypePokemon) => (
          <p
            className={`m-1 rounded-md border px-1 font-medium text-black md:text-sm ${
              typeColors[item.type.name]
            } ${
              leader
                ? 'md:translate-y-[15rem] md:p-2 md:px-6 md:text-2xl md:font-bold'
                : 'text-xs'
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
