export const GameState = {
  Intro: "Intro",
  Main: "Main",
  Outro: "Outro",
  Begin: "Begin",
  End: "End",
  Over: "Over",
} as const

export type TGameState = typeof GameState[keyof typeof GameState]

export const Phase = {
  Draw: "Draw",
  Play: "Play",
  Discard: "Discard",
  Destroy: "Destroy",
} as const

export type TPhase = typeof Phase[keyof typeof Phase]

export const range = (n: number) => Array.from(Array(n).keys())
export const dieRoll = (n: number) => Math.floor(Math.random() * n) + 1

export type TPlayer = {
  id: number
  name: string
  pass: boolean
  score: number
}

const playerNames = ["Anna", "Beth", "Ciri", "Dana"]

const oPlayer: TPlayer = {
  id: 0,
  name: "",
  pass: false,
  score: 0,
}

export const getPlayers = (n: number) => range(n).map(i => ({
  ...oPlayer, id: i + 1, name: playerNames[i]
}))
