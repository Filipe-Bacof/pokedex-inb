export interface TypePokemon {
  slot: number
  type: {
    name: string
    url: string
  }
}

export interface Abilities {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

export interface StatItem {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export interface Moves {
  move: {
    name: string
    url: string
  }
}
