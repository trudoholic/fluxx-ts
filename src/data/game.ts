export const GameState = {
  Begin: "Begin",
  End: "End",
  Main: "Main",
  Over: "Over",
} as const

export type TGameState = typeof GameState[keyof typeof GameState]

export const Phase = {
  Begin: "Begin",
  Combat: "Combat",
  End: "End",
  Fix: "Fix",
  Main: "Main",
  Target: "Target",
} as const

export type TPhase = typeof Phase[keyof typeof Phase]
