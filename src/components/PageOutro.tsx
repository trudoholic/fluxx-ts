import {Button, Heading, HStack} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"

const PageOutro = () => {
  const {
    gameState, testGameState,
  } = useGame()

  return (
    <>
      <HStack m={2}>
        <Button
          colorPalette={"green"}
          onClick={() => testGameState()}
        ><RiArrowRightSFill /></Button>
        <Heading as="h1">
          Page Outro: {gameState}
        </Heading>
      </HStack>
    </>
  )
}

export default PageOutro
