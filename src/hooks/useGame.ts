import useAppContext from "../context/useAppContext"
import {Actions} from "../context/reducer"
import {type IState} from "../context/state"

import {
  type TGameState, type TPhase,
} from "../data/game"

const useGame = () => {
  const { state, dispatch } = useAppContext()
  const {
    gameState, phase,
    cntDraw, ruleDraw,
    cntPlay, rulePlay,
    count,
  } = state as IState

  // ACTIONS

  const incCount = (n: number) => {
    dispatch({type: Actions.SetCount, payload: count + n})
  }

  const decCount = (n: number) => {
    dispatch({type: Actions.SetCount, payload: count - n})
  }

  const setCntDraw = (n: number) => {
    dispatch({type: Actions.SetCntDraw, payload: n})
  }

  const setCntPlay = (n: number) => {
    dispatch({type: Actions.SetCntPlay, payload: n})
  }

  const setGameState = (gameState: TGameState) => {
    dispatch({type: Actions.SetGameState, payload: gameState})
  }

  const setPhase = (phase: TPhase) => {
    dispatch({type: Actions.SetPhase, payload: phase})
  }

  // PREDICATES

  const bDraw = cntDraw < ruleDraw
  const bPlay = cntPlay < rulePlay

  return {
    gameState, setGameState,
    phase, setPhase,
    cntDraw, ruleDraw, setCntDraw, bDraw,
    cntPlay, rulePlay, setCntPlay, bPlay,
    count, incCount, decCount,
  }
}

export default useGame
