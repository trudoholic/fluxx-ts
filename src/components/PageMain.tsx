import {Button, Heading, HStack} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"
import {GameState} from "../data/game"

const PageMain = () => {
  const {
    gameState, setGameState,
  } = useGame()

  return (
    <>
      <HStack m={2}>
        <Button
          colorPalette={"green"}
          onClick={() => setGameState(GameState.Outro)}
        ><RiArrowRightSFill /></Button>
        <Heading as="h1">
          Page Main: {gameState}
        </Heading>
      </HStack>
    </>
  )
}

export default PageMain
