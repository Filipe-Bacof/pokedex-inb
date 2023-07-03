'use client'

import { useEffect, useState } from 'react'
import { IconPlayerTrackNext, IconPlayerTrackPrev } from '@/icons/IconsPrevNext'
import Image from 'next/image'
import {
  aboutPokedex,
  buttonsInstructions,
  myTeamInstructions,
  pokemonFireRed,
  whoIsFilipe,
} from './profOakSpeeches'

export default function ProfOak() {
  const [currentArrayIndex, setCurrentArrayIndex] = useState(0)
  const arrays = [
    pokemonFireRed,
    buttonsInstructions,
    myTeamInstructions,
    aboutPokedex,
    whoIsFilipe,
  ]

  useEffect(() => {
    setCurrentSpeechIndex(0)
  }, [currentArrayIndex])

  const [currentSpeechIndex, setCurrentSpeechIndex] = useState(0)

  const handleNextSpeech = () => {
    if (currentSpeechIndex < arrays[currentArrayIndex].length - 1) {
      setCurrentSpeechIndex(currentSpeechIndex + 1)
    }
  }

  const handlePrevSpeech = () => {
    if (currentSpeechIndex > 0) {
      setCurrentSpeechIndex(currentSpeechIndex - 1)
    }
  }

  return (
    <section className="mt-6 flex items-center justify-center">
      <div className="absolute">
        <Image
          className="relative left-0 top-0 z-10 translate-y-72"
          src={'/profOakSpeech.png'}
          alt="Prof Oak"
          width={190}
          height={450}
        />
        <div className="absolute z-20 h-24 w-[11.5rem] -translate-y-[9.8rem] translate-x-[0.25rem]">
          <div className="relative z-30 flex w-[11.5rem]">
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
          <h2 className="relative z-10 flex h-24 -translate-y-[6rem] items-center text-center text-sm">
            {arrays[currentArrayIndex][currentSpeechIndex]}
          </h2>
        </div>
        <div
          id="buttons"
          className="relative z-50 flex max-w-[12rem] translate-y-[7.5rem] flex-col gap-3 text-center text-xs font-bold md:translate-x-[10rem]"
        >
          <button
            className="rounded-lg bg-logo-yellow/80 text-blue-950 hover:bg-amber-500/80 hover:text-3xg-blue"
            onClick={() => setCurrentArrayIndex(0)}
          >
            Pokemon Fire Red Trivia.
          </button>
          <button
            className="rounded-lg bg-logo-yellow/80 text-blue-950 hover:bg-amber-500/80 hover:text-3xg-blue"
            onClick={() => setCurrentArrayIndex(1)}
          >
            Pokedex button actions?
          </button>
          <button
            className="rounded-lg bg-logo-yellow/80 text-blue-950 hover:bg-amber-500/80 hover:text-3xg-blue"
            onClick={() => setCurrentArrayIndex(2)}
          >
            How can I create my team?
          </button>
          <button
            className="rounded-lg bg-logo-yellow/80 text-blue-950 hover:bg-amber-500/80 hover:text-3xg-blue"
            onClick={() => setCurrentArrayIndex(3)}
          >
            Explain what the Pokedex is.
          </button>
          <button
            className="rounded-lg bg-logo-yellow/80 text-blue-950 hover:bg-amber-500/80 hover:text-3xg-blue"
            onClick={() => setCurrentArrayIndex(4)}
          >
            Tell me who is Filipe Bacof.
          </button>
          <a
            className="rounded-lg bg-logo-yellow/80 text-blue-950 hover:bg-amber-500/80 hover:text-3xg-blue"
            href="https://portifolio-filipe-bacof.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Go to the Filipe&apos;s portfolio!
          </a>
        </div>
      </div>
    </section>
  )
}
