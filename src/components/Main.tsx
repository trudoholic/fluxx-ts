import {Button, Heading, HStack, Separator} from "@chakra-ui/react"
import {RiArrowLeftSFill, RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"
import PageIntro from "./PageIntro"
import PageMain from "./PageMain"
import PageOutro from "./PageOutro"

const Main = () => {
  const {
    gameState, testGameState,
    phase, testPhase,
    count, incCount, decCount,
  } = useGame()

  return (
    <>
      <HStack m={2}>
        <Button
          colorPalette={"orange"}
          onClick={() => decCount(1)}
        ><RiArrowLeftSFill /></Button>
        <Button
          colorPalette={"orange"}
          onClick={() => incCount(1)}
        ><RiArrowRightSFill /></Button>
        <Heading as="h1">
          count is {count}
        </Heading>
      </HStack>
      <Separator width="100%" borderColor={'green.800'} />

      <HStack m={2}>
        <Button
          colorPalette={"green"}
          onClick={() => testGameState()}
        ><RiArrowLeftSFill /></Button>
        <Heading as="h1">
          game state: {gameState}
        </Heading>

        <Button
          colorPalette={"green"}
          onClick={() => testPhase()}
        ><RiArrowRightSFill /></Button>
        <Heading as="h1">
          phase: {phase}
        </Heading>
      </HStack>
      <Separator width="100%" borderColor={'green.800'} />
      <PageIntro />
      <PageMain />
      <PageOutro />
    </>
  )
}

export default Main
