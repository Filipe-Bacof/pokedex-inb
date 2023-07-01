'use client'

import PokeTeamCard from '@/components/PokeTeamCard'
import { useEffect, useState } from 'react'

export default function Team() {
  const slots = ['poke1', 'poke2', 'poke3', 'poke4', 'poke5', 'poke6']
  const [pokemons, setPokemons] = useState<string[]>([])

  useEffect(() => {
    const retrievedPokemons = slots.map(
      (slot: string) => getItemFromLocalStorage(slot) || '',
    )
    setPokemons(retrievedPokemons)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function getItemFromLocalStorage(slot: string) {
    const poke =
      typeof window !== 'undefined' ? localStorage.getItem(slot) : null
    return poke || null
  }

  function removeItemFromLocalStorage(slot: string) {
    localStorage.removeItem(slot)
    const updatedPokemons = [...pokemons]
    const slotIndex = slots.indexOf(slot)
    updatedPokemons[slotIndex] = ''
    setPokemons(updatedPokemons)
  }

  return (
    <div className="flex w-[100vw] flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <PokeTeamCard
          name={pokemons[0]}
          leader={true}
          onRemove={() => removeItemFromLocalStorage('poke1')}
        />
        <div id="other-five">
          <PokeTeamCard
            name={pokemons[1]}
            onRemove={() => removeItemFromLocalStorage('poke2')}
          />
          <PokeTeamCard
            name={pokemons[2]}
            onRemove={() => removeItemFromLocalStorage('poke3')}
          />
          <PokeTeamCard
            name={pokemons[3]}
            onRemove={() => removeItemFromLocalStorage('poke4')}
          />
          <PokeTeamCard
            name={pokemons[4]}
            onRemove={() => removeItemFromLocalStorage('poke5')}
          />
          <PokeTeamCard
            name={pokemons[5]}
            onRemove={() => removeItemFromLocalStorage('poke6')}
          />
        </div>
      </div>
    </div>
  )
}
