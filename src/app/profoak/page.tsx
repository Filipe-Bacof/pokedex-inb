'use client'

import { useState } from 'react'
import { IconPlayerTrackNext, IconPlayerTrackPrev } from '@/icons/IconsPrevNext'
import Image from 'next/image'

export default function ProfOak() {
  const pokemonFireRed = [
    'Hello, there! Glad to meet you!',
    'Welcome to the world of Pokémon!',
    'My name is Oak. I study Pokémon as a profession.',
    'People affectionately refer to me as the Pokémon Professor.',
    'This world is inhabited far and wide by creatures called Pokémon.',
    'For some people, Pokémon are pets. Others use them for battling.',
    'Your very own Pokémon legend is about to unfold.',
    "A world of dreams and adventures with Pokémon awaits! Let's go!",
  ]

  const [currentSpeechIndex, setCurrentSpeechIndex] = useState(0)

  const handleNextSpeech = () => {
    if (currentSpeechIndex < pokemonFireRed.length - 1) {
      setCurrentSpeechIndex(currentSpeechIndex + 1)
    }
  }

  const handlePrevSpeech = () => {
    if (currentSpeechIndex > 0) {
      setCurrentSpeechIndex(currentSpeechIndex - 1)
    }
  }

  return (
    <section className="flex items-center justify-center">
      <div className="absolute">
        <Image
          className="relative left-0 top-0 z-10 -translate-x-16 translate-y-96"
          src={'/ProfOak.png'}
          alt="Prof Oak"
          width={214}
          height={331}
        />
        <Image
          className="relative left-0 top-0 z-10 -translate-y-8 translate-x-16"
          src={'/speak.png'}
          alt="Prof Oak"
          width={214}
          height={331}
        />
        <div className="absolute z-20 w-44 -translate-y-[10.5rem] translate-x-[5.7rem]">
          <div className="relative z-30 flex w-64 -translate-x-[0.5rem] -translate-y-2">
            <button
              className="flex h-24 w-24 items-end justify-start"
              onClick={handlePrevSpeech}
            >
              <IconPlayerTrackPrev />
            </button>
            <button
              className="flex h-24 w-24 items-end justify-end"
              onClick={handleNextSpeech}
            >
              <IconPlayerTrackNext />
            </button>
          </div>
          <h2 className="relative z-10 flex h-24 -translate-y-[6.5rem] items-center text-center text-sm">
            {pokemonFireRed[currentSpeechIndex]}
          </h2>
        </div>
      </div>
    </section>
  )
}
