import useAppContext from "../context/useAppContext"
import {Actions} from "../context/reducer"
import {type IState} from "../context/state"

import {
  type TGameState, GameState,
  Phase,
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

  const testGameState = () => {
    dispatch({type: Actions.SetGameState, payload: GameState.Begin})
  }

  const testPhase = () => {
    dispatch({type: Actions.SetPhase, payload: Phase.Combat})
  }

  return {
    gameState, testGameState, setGameState,
    phase, testPhase,
    count, incCount, decCount,
  }
}

export default useGame
