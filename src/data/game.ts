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
