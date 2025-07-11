import useAppContext from "../context/useAppContext"
import {Actions} from "../context/reducer"
import {type IState} from "../context/state"

import {
  test,
} from "../data/cards"
test()

import {
  GameState, type TPhase, Phase, getPlayers, dieRoll,
} from "../data/game"

const useGame = () => {
  const { state, dispatch } = useAppContext()
  const {
    gameState,
    phase,
    cntDraw, ruleDraw,
    cntPlay, rulePlay,
    count,
    nPlayers, players, eldestHand, curHand,
  } = state as IState

  const curId = ((eldestHand + curHand) % nPlayers) + 1
  const curPlayer = players.find(p => curId === p.id)

  // ACTIONS

  const gameBegin = (n: number) => {
    dispatch({type: Actions.SetPlayers, payload: getPlayers(n)})
    dispatch({type: Actions.SetGameState, payload: GameState.Main})
    handBegin()
  }

  const gameEnd = () => {
    dispatch({type: Actions.SetPlayers, payload: []})
    dispatch({type: Actions.SetGameState, payload: GameState.Intro})
  }

  const handBegin = () => {
    dispatch({type: Actions.SetCntDraw, payload: 0})
    dispatch({type: Actions.SetCntPlay, payload: 0})
    dispatch({type: Actions.SetPhase, payload: Phase.Draw})
  }

  const nextHand = () => {
    let n = curHand + 1
    if (nPlayers === n) {
      console.log('Round')
      n = 0
    }
    dispatch({type: Actions.SetCurHand, payload: n})
    handBegin()
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
    dispatch({type: Actions.SetPlayer, payload: {
      id: curPlayer.id, score: curPlayer.score + dieRoll(6)
    }})
  }

  const setPhase = (phase: TPhase) => {
    dispatch({type: Actions.SetPhase, payload: phase})
  }

  // PREDICATES

  const bDraw = cntDraw < ruleDraw
  const bPlay = cntPlay < rulePlay
  const bHand = (id:number) => curId === id
  const gameOver = players.some(p => p.score > 30)

  return {
    gameState, gameOver,
    phase, setPhase,
    cntDraw, ruleDraw, setCntDraw, bDraw,
    cntPlay, rulePlay, setCntPlay, bPlay,
    count, incCount, decCount,
    gameBegin, gameEnd, gameOutro,
    players, bHand,
    eldestHand, curHand,
    nextHand,
  }
}

export default useGame
