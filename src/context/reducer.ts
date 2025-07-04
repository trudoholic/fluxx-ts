import {
  type TGameState,
  type TPhase,
} from "../data/game"
import {type IState} from "./state"

export const Actions = {
  SetGameState: 'SetGameState',
  SetPhase: 'SetPhase',
  SetCntDraw: 'SetCntDraw',
  SetCntPlay: 'SetCntPlay',
  SetCount: 'SetCount',
} as const

export type TAction =
  | { type: 'SetGameState', payload: TGameState }
  | { type: 'SetPhase', payload: TPhase }
  | { type: 'SetCntDraw', payload: number }
  | { type: 'SetCntPlay', payload: number }
  | { type: 'SetCount', payload: number }

export const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {

    case Actions.SetGameState: {
      return { ...state, gameState: action.payload }
    }
    case Actions.SetPhase: {
      return { ...state, phase: action.payload }
    }
    case Actions.SetCntDraw: {
      return { ...state, cntDraw: action.payload }
    }
    case Actions.SetCntPlay: {
      return { ...state, cntPlay: action.payload }
    }
    case Actions.SetCount: {
      return { ...state, count: action.payload }
    }
    default: {
      return state
    }

  }
}
