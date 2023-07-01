'use client'

import ModalPokemon from '@/components/ModalPokemon'
import PokemonCard from '@/components/PokemonCard'
import { IconPlayerTrackNext, IconPlayerTrackPrev } from '@/icons/IconsPrevNext'
import { useEffect, useRef, useState } from 'react'

interface PokemonItem {
  name: string
  url: string
}

export default function Pokemons() {
  useEffect(() => {
    apiFetch('https://pokeapi.co/api/v2/pokemon?limit=30')
  }, [])

  const [nextPage, setNextPage] = useState('')
  const [prevPage, setPrevPage] = useState('')
  const [pokemons, setPokemons] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [currentPokemonUrl, setCurrentPokemonUrl] = useState('')
  const nextBtn = useRef<HTMLButtonElement>(null)
  const prevBtn = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    const nextButton = nextBtn.current
    const prevButton = prevBtn.current

    if (nextButton) {
      nextButton.addEventListener('click', scrollToTop)
    }
    if (prevButton) {
      prevButton.addEventListener('click', scrollToTop)
    }

    return () => {
      if (nextButton) {
        nextButton.removeEventListener('click', scrollToTop)
      }
      if (prevButton) {
        prevButton.removeEventListener('click', scrollToTop)
      }
    }
  }, [])

  const getPageNumber = (url: string) => {
    const regex = /offset=(\d+)/
    const match = url.match(regex)

    const offsetValue = match ? match[1] : null

    if (offsetValue) {
      return Number(offsetValue) / 30
    }
    return 0
  }

  const apiFetch = async (url: string) => {
    const APIResponse = await fetch(url)
    if (APIResponse.status === 200) {
      const data = await APIResponse.json()
      setPokemons(data.results)
      setPrevPage(data.previous)
      setNextPage(data.next)
      return data
    } else {
      console.log('Erro!')
    }
  }
  return (
    <section>
      <div className="m-6 flex justify-between md:justify-around">
        <button
          onClick={() => apiFetch(prevPage)}
          className="rounded-lg bg-yellow-500 px-6 py-3"
        >
          <IconPlayerTrackPrev />
        </button>
        <span>Page&nbsp;{getPageNumber(nextPage)}&nbsp;of 42</span>
        <button
          onClick={() => apiFetch(nextPage)}
          className="rounded-lg bg-yellow-500 px-6 py-3"
        >
          <IconPlayerTrackNext />
        </button>
      </div>
      <div className="m-12 flex flex-wrap items-center justify-center gap-2">
        {pokemons.length === 0
          ? 'Carregando...'
          : pokemons.map((item: PokemonItem) => (
              <div
                key={item.name}
                className="cursor-pointer"
                onClick={() => {
                  setCurrentPokemonUrl(item.url)
                  setIsOpen((prevState) => !prevState)
                }}
              >
                <PokemonCard name={item.name} url={item.url} />
              </div>
            ))}
      </div>
      <div className="m-6 flex justify-between md:justify-around">
        <button
          ref={prevBtn}
          onClick={() => apiFetch(prevPage)}
          className="rounded-lg bg-yellow-500 px-6 py-3"
        >
          <IconPlayerTrackPrev />
        </button>
        <span>Page&nbsp;{getPageNumber(nextPage)}&nbsp;of 42</span>
        <button
          ref={nextBtn}
          onClick={() => apiFetch(nextPage)}
          className="rounded-lg bg-yellow-500 px-6 py-3"
        >
          <IconPlayerTrackNext />
        </button>
      </div>
      <ModalPokemon
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        currentPokemonUrl={currentPokemonUrl}
      />
    </section>
  )
}
