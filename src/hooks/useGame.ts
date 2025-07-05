import useAppContext from "../context/useAppContext"
import {Actions} from "../context/reducer"
import {type IState} from "../context/state"

import {
  type TGameState, type TPhase,
} from "../data/game"

const useGame = () => {
  const { state, dispatch } = useAppContext()
  const {
    gameState,
    phase,
    count,
  } = state as IState

  const incCount = (n: number) => {
    dispatch({type: Actions.SetCount, payload: count + n})
  }

  const decCount = (n: number) => {
    dispatch({type: Actions.SetCount, payload: count - n})
  }

  const setGameState = (gameState: TGameState) => {
    dispatch({type: Actions.SetGameState, payload: gameState})
  }

  const setPhase = (phase: TPhase) => {
    dispatch({type: Actions.SetPhase, payload: phase})
  }

  return {
    gameState, setGameState,
    phase, setPhase,
    count, incCount, decCount,
  }
}

export default useGame
