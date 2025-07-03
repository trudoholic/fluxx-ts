import {
  type TGameState, GameState,
  type TPhase, Phase,
} from "../data/game"

export interface IState {
  gameState: TGameState
  phase: TPhase
  count: number
}

export const defaultState: IState = {
  gameState: GameState.Over,
  phase: Phase.Main,
  count: 0,
}
