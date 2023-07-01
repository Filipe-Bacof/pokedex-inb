'use client'

import { useEffect, useState } from 'react'

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

  const apiFetch = async (url: string) => {
    const APIResponse = await fetch(url)
    if (APIResponse.status === 200) {
      const data = await APIResponse.json()
      console.log(data)
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
      <div className="m-6 flex justify-between">
        <button onClick={() => apiFetch(prevPage)} className="bg-red-500">
          PREV
        </button>
        <span>numero da página</span>
        <button onClick={() => apiFetch(nextPage)} className="bg-red-500">
          NEXT
        </button>
      </div>
      <div>
        {pokemons.length === 0
          ? 'Carregando...'
          : pokemons.map((item: PokemonItem) => (
              <h1 key={item.name}>{item.name}</h1>
            ))}
      </div>
    </section>
  )
}
