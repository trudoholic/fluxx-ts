import {type IState} from "./state"
import {Actions} from "./actions"

export type TAction =
  | { type: Actions.SetCount, payload: number }

export const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {

    case Actions.SetCount: {
      return { ...state, count: action.payload }
    }
    default: {
      return state
    }

  }
}
