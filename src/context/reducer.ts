import {
  type TCardZone, resetDeck,
} from "../data/cards"

import {
  type TGameState,
  type TPhase,
  type TPlayer,
} from "../data/game"
import {type IState} from "./state"

export const Actions = {
  ResetDeck: 'ResetDeck',
  UpdateDeck: 'UpdateDeck',
  SetActive: 'SetActive',
  SetGameState: 'SetGameState',
  SetPhase: 'SetPhase',
  SetCntDraw: 'SetCntDraw',
  SetCntPlay: 'SetCntPlay',
  SetCount: 'SetCount',
  SetCurHand: 'SetCurHand',
  SetPlayer: 'SetPlayer',
  SetPlayers: 'SetPlayers',
  SetZone: 'SetZone',
} as const

export type TAction =
  | { type: 'ResetDeck' }
  | { type: 'UpdateDeck', payload: string }
  | { type: 'SetActive', payload: string }
  | { type: 'SetGameState', payload: TGameState }
  | { type: 'SetPhase', payload: TPhase }
  | { type: 'SetCntDraw', payload: number }
  | { type: 'SetCntPlay', payload: number }
  | { type: 'SetCount', payload: number }
  | { type: 'SetCurHand', payload: number }
  | { type: 'SetPlayer', payload: Partial<TPlayer> }
  | { type: 'SetPlayers', payload: TPlayer[] }
  | { type: 'SetZone', payload: TCardZone }

export const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {

    case Actions.ResetDeck: {
      const o = resetDeck()
      return { ...state,
        deck: o.deck,
        deckData: o.deckData,
      }
    }
    case Actions.UpdateDeck: {
      const ap = action.payload
      return { ...state, deck: [...state.deck.filter(it => it !== ap), ap] }
    }
    case Actions.SetActive: {
      return { ...state, idActive: action.payload }
    }
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
    case Actions.SetCurHand: {
      return { ...state, curHand: action.payload }
    }
    case Actions.SetPlayer: {
      const ap = action.payload
      return { ...state,
        players: [...state.players.map(p => ( p.id === ap.id? {...p, ...ap}: p ))]
      }
    }
    case Actions.SetPlayers: {
      const n = action.payload.length, rnd = Math.floor(Math.random() * n)
      return { ...state,
        curHand: 0, eldestHand: rnd, nPlayers: n, players: action.payload
      }
    }
    case Actions.SetZone: {
      const ap = action.payload
      return { ...state, deckData: {...state.deckData, [ap.id]: ap} }
    }
    default: {
      return state
    }

  }
}
