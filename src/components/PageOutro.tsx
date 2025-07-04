import {Button, Heading, HStack} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"
import {GameState} from "../data/game"

const PageOutro = () => {
  const {
    gameState, setGameState,
  } = useGame()

  return (
    <>
      <HStack m={2}>
        <Button
          colorPalette={"green"}
          onClick={() => setGameState(GameState.Intro)}
        ><RiArrowRightSFill /></Button>
        <Heading as="h1">
          Page Outro: {gameState}
        </Heading>
      </HStack>
    </>
  )
}

export default PageOutro
