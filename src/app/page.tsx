'use client'

import {
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
} from '@/components/IconsPrevNext'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [currentPoke, setCurrentPoke] = useState('charmander')
  const [pokeNumber, setPokeNumber] = useState('4')
  const [pokeName, setPokeName] = useState('Charmander')
  const [imagePokemon, setImagePokemon] = useState(
    '/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FPokeAPI%2Fsprites%2Fmaster%2Fsprites%2Fpokemon%2Fversions%2Fgeneration-v%2Fblack-white%2Fanimated%2F4.gif&w=2048&q=75',
  )
  const [inputValue, setInputValue] = useState('')
  let searchPokemon = '1'
  const form = useRef<HTMLFormElement>(null)

  async function fetchPokemon(poke: string) {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    if (APIResponse.status === 200) {
      const data = await APIResponse.json()
      return data
    } else {
      console.log('erro!!!!')
    }
  }

  async function renderPokemon(poke: string) {
    setPokeNumber('')
    setPokeName('Carregando...')

    const data = await fetchPokemon(poke)
    if (data) {
      setPokeName(data.name)
      setPokeNumber(data.id)
      setImagePokemon(
        data.sprites.versions['generation-v']['black-white'].animated
          .front_default,
      )
      setInputValue('')
      searchPokemon = `${data.id}`
    } else {
      setImagePokemon('./missingno.png')
      setPokeName('Não Encontrado')
      setPokeNumber('?')
    }
  }

  useEffect(() => {
    fetchPokemon(searchPokemon)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const handleFormSubmit = (event: Event) => {
      event.preventDefault()
      renderPokemon(currentPoke.toLowerCase())
    }

    if (form.current) {
      form.current.addEventListener('submit', handleFormSubmit)
    }

    return () => {
      if (form.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        form.current.removeEventListener('submit', handleFormSubmit)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
            className="relative mx-auto flex h-44 w-56 justify-end rounded-md border border-black bg-[#7D8283]"
          >
            <div className="h-[10.7rem] w-[13.7rem] rounded-md border-b border-l border-black bg-white">
              <div className="z-1 absolute rounded-md">
                <Image
                  className="relative left-5 top-5 z-10 h-28 w-44 rounded-lg border border-black"
                  src={'/bg-wild.png'}
                  alt="pokemon"
                  width={1000}
                  height={1000}
                />
                <Image
                  className="relative left-1/2 top-1/2 z-20 h-24 w-24 -translate-x-6 -translate-y-[5.5rem] transform"
                  src={`${imagePokemon}`}
                  alt="pokemon"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className="absolute bottom-2 right-2 z-10">
              <p className="font-bold text-gray-700">
                <span className="text-gray-500">{pokeNumber} - </span>
                {pokeName}
              </p>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={() => renderPokemon(inputValue)}
            id="search-box"
            className="mx-auto mt-6 flex items-center justify-end"
          >
            <div className="w-56 rounded-md border border-black bg-[#7D8283]">
              <input
                className="mb-1 ml-1 w-[13.6rem] rounded-md border-b border-l border-black bg-white px-4 py-1 placeholder:text-center"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Name or Number"
              />
            </div>
          </form>
          <div
            id="buttons-next-prev"
            className="mx-4 mt-6 flex justify-between"
          >
            <div className="w-[6.5rem] rounded-md border border-black bg-gray-800">
              <button className="mb-1 ml-1 flex h-6 w-[6.1rem] justify-center rounded-md border-b border-l border-black bg-gray-700 py-1 active:mb-0 active:ml-0 active:mr-1 active:mt-1 active:border-b-0 active:border-l-0 active:border-r active:border-t">
                <IconPlayerTrackPrev />
              </button>
            </div>
            <div className="w-[6.5rem] rounded-md border border-black bg-gray-800">
              <button className="mb-1 ml-1 flex h-6 w-[6.1rem] justify-center rounded-md border-b border-l border-black bg-gray-700 py-1 active:mb-0 active:ml-0 active:mr-1 active:mt-1 active:border-b-0 active:border-l-0 active:border-r active:border-t">
                <IconPlayerTrackNext />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
