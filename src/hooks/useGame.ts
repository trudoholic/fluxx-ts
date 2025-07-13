import useAppContext from "../context/useAppContext"
import {Actions} from "../context/reducer"
import {type IState} from "../context/state"

import {
  type TZone, Zone,
} from "../data/cards"

import {
  GameState, type TPhase, Phase, getPlayers, dieRoll,
} from "../data/game"

const useGame = () => {
  const { state, dispatch } = useAppContext()
  const {
    deck, deckData,
    gameState,
    phase,
    cntDraw, ruleDraw,
    cntPlay, rulePlay,
    count,
    nPlayers, players, eldestHand, curHand,
    idActive,
  } = state as IState

  const curId = ((eldestHand + curHand) % nPlayers) + 1
  const curPlayer = players.find(p => curId === p.id)

  // ACTIONS

  const gameBegin = (n: number) => {
    dispatch({type: Actions.ResetDeck})
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

  const setActive = (id: string) => {
    dispatch({type: Actions.SetActive, payload: bActive(id)? "": id})
  }
  const handleDraw = () => {
    const id: string = deck[0]
    dispatch({type: Actions.SetZone, payload: {id, player: curId, zone: Zone.Hand}})
    dispatch({type: Actions.UpdateDeck, payload: id})
  }

  const handlePlay = (id: string) => {
    // dispatch({type: Actions.SetZone, payload: {id, player: 0, zone: Zone.Drop}})
    dispatch({type: Actions.SetZone, payload: {id, player: curId, zone: Zone.Keep}})
    dispatch({type: Actions.UpdateDeck, payload: id})
  }

  // FUNCTIONS

  const deckZone = (zone: TZone, player?: number) => deck.filter(id => inZone(id, zone, player ?? 0))

  // PREDICATES

  const bDraw = cntDraw < ruleDraw
  const bPlay = (cntPlay < rulePlay) && (deckZone(Zone.Hand, curId).length > 0)
  const bHand = (id:number) => curId === id
  const gameOver = players.some(p => p.score > 30)
  const bActive = (id:string) => idActive && idActive === id

  const bEnabled = (id:string) => {
    const data = deckData[id]
    return data.zone === Zone.Hand && data.player === curId
  }

  function inZone(id: string, zone: TZone, player: number = 0) {
    const data = deckData[id]
    return data.zone === zone && data.player === player
  }

  return {
    deck, deckData,
    gameState, gameOver,
    phase, setPhase,
    cntDraw, ruleDraw, setCntDraw, bDraw,
    cntPlay, rulePlay, setCntPlay, bPlay,
    count, incCount, decCount,
    gameBegin, gameEnd, gameOutro,
    players, bHand,
    eldestHand, curHand,
    nextHand,
    bActive, idActive, setActive,
    inZone, handleDraw, handlePlay,
    bEnabled,
  }
}

export default useGame
