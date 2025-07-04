import {GameState} from "../data/game"
import useGame from "../hooks/useGame"

import PageIntro from "./PageIntro"
import PageMain from "./PageMain"
import PageOutro from "./PageOutro"

const Main = () => {
  const {
    gameState,
  } = useGame()

  return (
    <>
      {
        GameState.Intro === gameState? (
          <PageIntro />
        ): GameState.Main === gameState? (
          <PageMain />
        ): GameState.Outro === gameState? (
          <PageOutro />
        ): null
      }
    </>
  )
}

export default Main
