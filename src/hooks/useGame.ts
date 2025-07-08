import useAppContext from "../context/useAppContext"
import {Actions} from "../context/reducer"
import {type IState} from "../context/state"

import {
  GameState, type TPhase, getPlayers,
} from "../data/game"

const useGame = () => {
  const { state, dispatch } = useAppContext()
  const {
    gameState,
    phase,
    cntDraw, ruleDraw,
    cntPlay, rulePlay,
    count,
    players,
  } = state as IState

  // ACTIONS

  const gameBegin = (n: number) => {
    dispatch({type: Actions.SetPlayers, payload: getPlayers(n)})
    dispatch({type: Actions.SetGameState, payload: GameState.Main})
  }

  const gameEnd = () => {
    dispatch({type: Actions.SetPlayers, payload: []})
    dispatch({type: Actions.SetGameState, payload: GameState.Intro})
  }

  const gameOutro = () => {
    dispatch({type: Actions.SetGameState, payload: GameState.Outro})
  }

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

  const setPhase = (phase: TPhase) => {
    dispatch({type: Actions.SetPhase, payload: phase})
  }

  // PREDICATES

  const bDraw = cntDraw < ruleDraw
  const bPlay = cntPlay < rulePlay

  return {
    gameState,
    phase, setPhase,
    cntDraw, ruleDraw, setCntDraw, bDraw,
    cntPlay, rulePlay, setCntPlay, bPlay,
    count, incCount, decCount,
    gameBegin, gameEnd, gameOutro,
    players,
  }
}

export default useGame
