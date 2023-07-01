'use client'

import { IconPlayerTrackNext, IconPlayerTrackPrev } from '@/icons/IconsPrevNext'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'

export default function Home() {
  const [pokeNumber, setPokeNumber] = useState('1')
  const [pokeName, setPokeName] = useState('Bulbasaur')
  const [imagePokemon, setImagePokemon] = useState(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif',
  )
  const [inputValue, setInputValue] = useState('')
  const [searchPokemon, setSearchPokemon] = useState(1)
  const [bgType, setBgType] = useState('/bg-types/grass.jpg')

  const form = useRef<HTMLFormElement>(null)
  const nextBtn = useRef<HTMLButtonElement>(null)
  const prevBtn = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    renderPokemon(searchPokemon)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchPokemon])

  function savePokemonToLocalStorage(pokemonName: string) {
    if (pokemonName === 'não encontrado') {
      return toast('Não foi possível salvar esse pokémon.', {
        type: 'error',
      })
    }
    const slots = ['poke1', 'poke2', 'poke3', 'poke4', 'poke5', 'poke6']
    let slotIndex = -1

    for (let i = 0; i < slots.length; i++) {
      if (!localStorage.getItem(slots[i])) {
        slotIndex = i
        break
      }
    }

    if (slotIndex === -1) {
      toast('Todos os espaços estão ocupados.', {
        type: 'error',
      })
      return
    }

    localStorage.setItem(slots[slotIndex], pokemonName)
    toast(`O pokemon "${pokemonName}" foi salvo no slot ${slotIndex + 1}.`, {
      type: 'success',
    })
  }

  async function fetchPokemon(poke: string | number) {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    if (APIResponse.status === 200) {
      const data = await APIResponse.json()
      return data
    } else {
      console.log('⭐ Easter Egg: Missingno!!!!')
    }
  }

  async function renderPokemon(poke: string | number) {
    if (poke === undefined) {
      return
    }

    const regex = /^\d+$/
    const isNum = regex.test(`${poke}`)

    if (isNum) {
      if (Number(poke) >= 650) {
        setImagePokemon('/missingno.png')
        setBgType('/bg-wild.png')
        setPokeName('Não Encontrado')
        setSearchPokemon(0)
        setPokeNumber('?')
        return
      }
    }
    setPokeNumber('')
    setPokeName('Carregando...')

    const data = await fetchPokemon(`${poke}`.toLowerCase())

    if (data) {
      data.name &&
        setPokeName(data.name.charAt(0).toUpperCase() + data.name.slice(1))

      data.types &&
        data.types[0].type &&
        data.types[0].type.name &&
        setBgType(`/bg-types/${data.types[0].type.name}.jpg`)

      data.id && setPokeNumber(data.id)
      data.id && setSearchPokemon(data.id)

      data.sprites &&
        data.sprites.versions &&
        setImagePokemon(
          data.sprites.versions['generation-v']['black-white'].animated
            .front_default,
        )

      setInputValue('')
    } else {
      setImagePokemon('/missingno.png')
      setBgType('/bg-wild.png')
      setPokeName('Não Encontrado')
      setSearchPokemon(0)
      setPokeNumber('?')
    }
  }

  // INPUT FIELD
  useEffect(() => {
    const handleFormSubmit = (event: Event) => {
      event.preventDefault()
      renderPokemon(inputValue)
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

  // NEXT BUTTON
  useEffect(() => {
    const searchPoke = () => {
      setSearchPokemon((prevValue) => prevValue + 1)
    }

    const button = nextBtn.current

    if (button) {
      button.addEventListener('click', searchPoke)
    }

    return () => {
      if (button) {
        button.removeEventListener('click', searchPoke)
      }
    }
  }, [searchPokemon])

  // PREV BUTTON
  useEffect(() => {
    const searchPoke = () => {
      if (searchPokemon > 1) {
        setSearchPokemon((prevValue) => prevValue - 1)
      }
    }

    const button = prevBtn.current

    if (button) {
      button.addEventListener('click', searchPoke)
    }

    return () => {
      if (button) {
        button.removeEventListener('click', searchPoke)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchPokemon])

  return (
    <section className="flex flex-col items-center justify-center pb-72 pt-8 md:h-[90vh] md:p-0">
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
                console.log('Botão Vermelho')
              }}
            >
              <div className="h-3 w-3 rounded-full bg-red-600"></div>
            </div>
            <div
              id="yellow-btn"
              className="h-4 w-4 cursor-pointer overflow-hidden rounded-full border border-black bg-yellow-500"
              onClick={() => {
                console.log('Botão Amarelo')
                savePokemonToLocalStorage(pokeName.toLowerCase())
              }}
            >
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            </div>
            <div
              id="green-btn"
              className="h-4 w-4 cursor-pointer overflow-hidden rounded-full border border-black bg-green-600"
              onClick={() => {
                console.log('Botão Verde')
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
                  src={bgType}
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
              <button
                ref={prevBtn}
                className="mb-1 ml-1 flex h-6 w-[6.1rem] justify-center rounded-md border-b border-l border-black bg-gray-700 py-1 active:mb-0 active:ml-0 active:mr-1 active:mt-1 active:border-b-0 active:border-l-0 active:border-r active:border-t"
              >
                <IconPlayerTrackPrev />
              </button>
            </div>
            <div className="w-[6.5rem] rounded-md border border-black bg-gray-800">
              <button
                ref={nextBtn}
                className="mb-1 ml-1 flex h-6 w-[6.1rem] justify-center rounded-md border-b border-l border-black bg-gray-700 py-1 active:mb-0 active:ml-0 active:mr-1 active:mt-1 active:border-b-0 active:border-l-0 active:border-r active:border-t"
              >
                <IconPlayerTrackNext />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
