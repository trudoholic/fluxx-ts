import {createContext, type Dispatch, useContext} from "react"
import {type TAction} from "./reducer"
import {type IState, defaultState} from "./state"

export const AppContext = createContext<{
  state: IState
  dispatch: Dispatch<TAction>
}>({state: defaultState, dispatch: () => null})

const useAppContext = () => useContext(AppContext)

export default useAppContext
