'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [currentPoke, setCurrentPoke] = useState('charmander')
  const [pokeNumber, setPokeNumber] = useState('4')
  const [pokeName, setPokeName] = useState('Charmander')
  const [imagePokemon, setImagePokemon] = useState(
    '/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FPokeAPI%2Fsprites%2Fmaster%2Fsprites%2Fpokemon%2Fversions%2Fgeneration-v%2Fblack-white%2Fanimated%2F4.gif&w=2048&q=75',
  )
  async function fetchPokemon(poke: string) {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    if (APIResponse.status === 200) {
      const data = await APIResponse.json()
      console.log(data)
      setImagePokemon(
        data.sprites.versions['generation-v']['black-white'].animated
          .front_default,
        // data.sprites.versions['generation-ii'].crystal.front_default,
      )
      setPokeName(data.name.charAt(0).toUpperCase() + data.name.slice(1))
      setPokeNumber(data.id)
      return data
    }
  }

  useEffect(() => {
    fetchPokemon(currentPoke)
  }, [currentPoke])

  return (
    <section className="flex h-[90vh] flex-col items-center justify-center">
      <div
        id="lateral-pokedex"
        className="flex h-96 w-[16.7rem] flex-row-reverse rounded-l-3xl border-l border-black bg-pokedex-b"
      >
        <div
          id="main-pokedex"
          className="flex h-96 w-64 flex-col rounded-l-3xl border border-black bg-pokedex"
        >
          <div id="buttons-container" className="m-2 flex flex-row gap-2">
            <div className="h-14 w-14 rounded-full border border-black bg-white pl-[0.26rem] pt-[0.1rem]">
              <div
                id="blue-btn"
                className="h-12 w-12 overflow-hidden rounded-full border border-black bg-xs-blue"
              >
                <div className="relative m-1 h-10 w-10 rounded-full bg-xg-blue">
                  <div className="absolute top-[-2px] ml-1 h-[1.6rem] w-[1.6rem] rounded-full bg-xs-blue">
                    <div className="absolute left-[25%] top-[13%] h-3 w-3 rounded-full bg-xxs-blue"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="red-btn"
              className="h-4 w-4 cursor-pointer overflow-hidden rounded-full border border-black bg-red-700"
              onClick={() => {
                setCurrentPoke('charmander')
                fetchPokemon(currentPoke)
              }}
            >
              <div className="h-3 w-3 rounded-full bg-red-600"></div>
            </div>
            <div
              id="yellow-btn"
              className="h-4 w-4 cursor-pointer overflow-hidden rounded-full border border-black bg-yellow-500"
              onClick={() => {
                setCurrentPoke('charmeleon')
                fetchPokemon(currentPoke)
              }}
            >
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            </div>
            <div
              id="green-btn"
              className="h-4 w-4 cursor-pointer overflow-hidden rounded-full border border-black bg-green-600"
              onClick={() => {
                setCurrentPoke('charizard')
                fetchPokemon(currentPoke)
              }}
            >
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div
            id="screen-pokedex"
            className="relative mx-auto flex h-40 w-56 justify-end rounded-md border border-black bg-[#7D8283]"
          >
            <div className="flex h-[9.7rem] w-[13.7rem] justify-center rounded-md border-b border-l border-black bg-white">
              <div className="absolute inset-0 z-10 rounded-md"></div>
              <Image
                className="z-1 relative h-32 w-32 p-4"
                src={`${imagePokemon}`}
                alt="pokemon"
                width={1000}
                height={1000}
              />
            </div>
            <div className="absolute bottom-2 right-2 z-10">
              <p className="font-bold text-gray-700">
                <span className="text-gray-500">{pokeNumber} - </span>
                {pokeName}
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center">
            <div>
              <input
                className="bg-white"
                type="text"
                placeholder="Name or Number"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
