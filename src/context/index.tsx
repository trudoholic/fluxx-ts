import * as React from "react"
import {useReducer} from "react"
import {reducer} from "./reducer"
import {defaultState} from "./state"
import {AppContext} from "./useAppContext"

const ContextProvider = ({children}:{children?: React.ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  return <AppContext.Provider value={{state, dispatch}} children={children} />
}

export default ContextProvider
