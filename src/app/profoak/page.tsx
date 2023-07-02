'use client'

import { useEffect, useState } from 'react'
import { IconPlayerTrackNext, IconPlayerTrackPrev } from '@/icons/IconsPrevNext'
import Image from 'next/image'

export default function ProfOak() {
  const pokemonFireRed = [
    'Hello, there! Glad to meet you! Welcome to the world of Pokémon!',
    'My name is Oak. I study Pokémon as a profession.',
    'People affectionately refer to me as the Pokémon Professor.',
    'This world is inhabited far and wide by creatures called Pokémon.',
    'For some people, Pokémon are pets. Others use them for battling.',
    'Your very own Pokémon legend is about to unfold.',
    "A world of dreams and adventures with Pokémon awaits! Let's go!",
  ]

  const buttonsInstructions = [
    'We have a total of 3 buttons at the top of the pokedex, which are red, yellow and green:',
    'The red button plays the description of the current pokemon.',
    'The yellow button add this pokemon to your team, click "How can I create my team?" and learn.',
    'The green button causes the current pokemon to be loaded when opening the pokedex.',
    "Any questions just call me, I'm almost always busy with my researches, but I love to help!",
  ]

  const myTeamInstructions = [
    'Are you ready to create your team and share it with your friends?',
    "It's very easy to add a pokemon to your team, I'll teach you the instructions:",
    'Search your pokemon in the pokedex, then click on yellow button at the top.',
    'Pokemon are added in order, the first will always be the leader of your team',
    'If a Pokemon is deleted from the team, the slot will be free for the next addition.',
  ]

  const aboutPokedex = [
    'I know all about the pokedex, this device can identify any pokemon.',
    'The first version of the pokedex was created with JavaScript, CSS and HTML.',
    'However, several updates were necessary, which led to the development of a new one.',
    'The new version of the pokedex was created with NextJS, TypeScript and TailwindCSS',
    'It came with many new features, functionalities and improvements.',
    'I believe it can provide an excellent experience for any novice trainer.',
  ]

  const whoIsFilipe = [
    "I'm happy to answer this question, Filipe was the first pokemon trainer that I met.",
    'I constantly see his efforts to make the pokedex a better tool for trainers.',
    "I've seen him do a lot of amazing things, a lot of wonderful projects",
    'I recognize the effort he puts into learning and evolving, perfectly smart',
    'I can recommend that you view his portfolio, the link is at the bottom of this page',
  ]

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
