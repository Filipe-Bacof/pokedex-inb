import { IconCloseCircle } from '@/icons/IconCloseCircle'
import { IconPokeball } from '@/icons/IconPokeball'
import {
  Abilities,
  Moves,
  StatItem,
  TypePokemon,
} from '@/interfaces/pokemons.interface'
import { typeColors } from '@/utils/typeColors'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type ModalPokemonProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  currentPokemonUrl: string
}

export default function ModalPokemon({
  isOpen,
  setIsOpen,
  currentPokemonUrl,
}: ModalPokemonProps) {
  const [imagePokemon, setImagePokemon] = useState('')
  const [namePokemon, setNamePokemon] = useState('')
  const [idPokemon, setIdPokemon] = useState('')
  const [heightPokemon, setHeightPokemon] = useState('')
  const [weightPokemon, setWeightPokemon] = useState('')
  const [baseExperiencPokemon, setBaseExperiencPokemon] = useState('')
  const [typesPokemon, setTypesPokemon] = useState([])
  const [abilitiesPokemon, setabilitiesPokemon] = useState([])
  const [statsPokemon, setStatsPokemon] = useState([])
  const [movesPokemon, setMovesPokemon] = useState([])

  useEffect(() => {
    fetchOnePokeData(currentPokemonUrl)
  }, [currentPokemonUrl])

  const fetchOnePokeData = async (url: string) => {
    const APIResponse = await fetch(url)
    if (APIResponse.status === 200) {
      const data = await APIResponse.json()

      data.id && setIdPokemon(data.id)
      data.name && setNamePokemon(data.name)
      data.types && setTypesPokemon(data.types)
      data.stats && setStatsPokemon(data.stats)
      data.moves && setMovesPokemon(data.moves)
      data.weight && setWeightPokemon(data.weight)
      data.height && setHeightPokemon(data.height)
      data.abilities && setabilitiesPokemon(data.abilities)
      data.base_experience && setBaseExperiencPokemon(data.base_experience)

      data.sprites &&
        data.sprites.versions &&
        setImagePokemon(
          data.sprites.versions['generation-iv']['diamond-pearl'].front_default,
        )

      return data
    } else {
      console.log('Erro!')
    }
  }
  return (
    <div
      className={`fixed left-1/2 top-1/2 flex h-[32rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 flex-col rounded-md bg-black/90 p-4 text-white md:h-[36rem] md:w-[45rem] ${
        !isOpen && 'hidden'
      }`}
    >
      <div id="header-modal" className="flex flex-row justify-between">
        <h1 className="flex items-center gap-1 p-4 text-2xl font-bold">
          <IconPokeball className="text-red-600" />
          <span className="text-white/60">{idPokemon}&nbsp;-&nbsp;</span>
          {namePokemon.charAt(0).toUpperCase() + namePokemon.slice(1)}
        </h1>{' '}
        <div
          className="cursor-pointer p-4"
          onClick={() => {
            setIsOpen((prevState) => !prevState)
          }}
        >
          <IconCloseCircle className="h-6 w-6" />
        </div>
      </div>
      <div id="body-modal" className="flex flex-col md:flex-row">
        <div className="flex justify-between">
          {imagePokemon && (
            <Image
              className="ml-4 h-24 w-24"
              src={`${imagePokemon}`}
              alt={namePokemon}
              width={1000}
              height={1000}
            />
          )}
          <div className="mr-4 flex flex-col items-end md:items-start">
            <div className="flex md:flex-col">
              {typesPokemon.map((item: TypePokemon) => (
                <p
                  className={`m-1 rounded-md border px-1 font-medium text-black md:text-center ${
                    typeColors[item.type.name]
                  }`}
                  key={`${item.slot}${namePokemon}`}
                >
                  {item.type.name.toUpperCase()}
                </p>
              ))}
            </div>
            <p>
              <span>Base Exp:&nbsp;</span>
              {baseExperiencPokemon}
            </p>
            <p>
              <span>Weight:&nbsp;</span>
              {weightPokemon}
            </p>
            <p>
              <span>Height:&nbsp;</span>
              {heightPokemon}
            </p>
          </div>
        </div>
        <div className="m-4 md:flex md:w-[28rem] md:flex-row md:flex-wrap">
          <div className="flex flex-col md:flex-row md:items-center md:gap-4 md:pb-2">
            <h2>Abilities</h2>
            <div className="flex md:gap-6">
              {abilitiesPokemon.map((item: Abilities) => (
                <p
                  className={`m-1 rounded-md border bg-white/5 px-1 md:h-8`}
                  key={`${item.slot}${namePokemon}`}
                >
                  {item.ability.name.charAt(0).toUpperCase() +
                    item.ability.name.slice(1)}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:border-t md:pt-2">
            <h2>Stats</h2>
            <div className="flex flex-wrap md:justify-evenly">
              {statsPokemon.map((item: StatItem) => (
                <p
                  className={`m-1 rounded-md border bg-white/5 px-1 md:h-8 md:text-sm`}
                  key={`${item.stat.name}${namePokemon}`}
                >
                  <span>{item.stat.name.toUpperCase()}&nbsp;=&nbsp;</span>
                  {item.base_stat}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:m-4 md:mr-0 md:flex md:flex-col md:overflow-y-scroll md:pr-4">
        <h2>
          All the moves{' '}
          {namePokemon.charAt(0).toUpperCase() + namePokemon.slice(1)} can learn
        </h2>
        <div className="hidden md:flex md:flex-wrap md:justify-between md:text-sm">
          {movesPokemon.map((item: Moves) => (
            <p
              className="m-[0.15rem] rounded-md border bg-white/5 px-1"
              key={`${item.move.name}${namePokemon}`}
            >
              {item.move.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
