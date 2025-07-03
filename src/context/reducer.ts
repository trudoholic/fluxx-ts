import {
  type TGameState,
  type TPhase,
} from "../data/game"
import {type IState} from "./state"

export const Actions = {
  SetGameState: 'SetGameState',
  SetPhase: 'SetPhase',
  SetCount: 'SetCount',
} as const

export type TAction =
  | { type: 'SetGameState', payload: TGameState }
  | { type: 'SetPhase', payload: TPhase }
  | { type: 'SetCount', payload: number }

export const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {

    case Actions.SetGameState: {
      return { ...state, gameState: action.payload }
    }
    case Actions.SetPhase: {
      return { ...state, phase: action.payload }
    }
    case Actions.SetCount: {
      return { ...state, count: action.payload }
    }
    default: {
      return state
    }

  }
}
