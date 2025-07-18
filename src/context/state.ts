import {
  type TCardZone,
  ALL,
} from "../data/cards"

import {
  type TGameState, GameState,
  type TPhase, Phase,
  type TPlayer,
} from "../data/game"

export interface IState {
  deck: string[]
  deckData: {[key: string]: TCardZone}
  idActive: string
  idTarget: string
  gameState: TGameState
  phase: TPhase
  cntDraw: number
  cntPlay: number
  count: number
  nPlayers: number
  players: TPlayer[]
  ruleDraw: number
  rulePlay: number
  ruleHand: number
  ruleKeep: number
  eldestHand: number
  curHand: number
}

export const defaultState: IState = {
  deck: [],
  deckData: {},
  idActive: "",
  idTarget: "",
  gameState: GameState.Intro,
  phase: Phase.Draw,
  cntDraw: 0,
  cntPlay: 0,
  count: 0,
  nPlayers: 0,
  players: [],
  ruleDraw: 2,
  rulePlay: ALL,
  ruleHand: 1,
  ruleKeep: 1,
  eldestHand: 0,
  curHand: 0,
}
