import {
  type TGameState, GameState,
  type TPhase, Phase,
} from "../data/game"

export interface IState {
  gameState: TGameState
  phase: TPhase
  cntDraw: number
  cntPlay: number
  count: number
  ruleDraw: number
  rulePlay: number
}

export const defaultState: IState = {
  gameState: GameState.Intro,
  phase: Phase.Draw,
  cntDraw: 0,
  cntPlay: 0,
  count: 0,
  ruleDraw: 3,
  rulePlay: 3,
}
