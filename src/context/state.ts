import {
  type TGameState, GameState,
  type TPhase, Phase,
  type TPlayer,
} from "../data/game"

export interface IState {
  gameState: TGameState
  phase: TPhase
  cntDraw: number
  cntPlay: number
  count: number
  nPlayers: number
  players: TPlayer[]
  ruleDraw: number
  rulePlay: number
  eldestHand: number
  curHand: number
}

export const defaultState: IState = {
  gameState: GameState.Intro,
  phase: Phase.Draw,
  cntDraw: 0,
  cntPlay: 0,
  count: 0,
  nPlayers: 0,
  players: [],
  ruleDraw: 2,
  rulePlay: 3,
  eldestHand: 0,
  curHand: 0,
}
