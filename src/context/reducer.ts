import { type IState } from "./state"

export const Actions = {
  Null: 'Null',
  SetCount: 'SetCount',
} as const

export type TAction =
  | { type: 'SetCount', payload: number }

export const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {

    case 'SetCount': {
      return { ...state, count: action.payload }
    }
    default: {
      return state
    }

  }
}
