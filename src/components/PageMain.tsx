import {Button, Heading, HStack, Separator, StackSeparator} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import {Phase} from "../data/game"
import useGame from "../hooks/useGame"
import PhaseDraw from "./PhaseDraw"
import PhasePlay from "./PhasePlay"

const PageMain = () => {
  const {
    gameOutro,
    phase,
    players,
  } = useGame()

  return (
    <>
      <HStack m={2} separator={<StackSeparator />}>
        <Button
          colorPalette={"green"}
          onClick={() => gameOutro()}
        ><RiArrowRightSFill /></Button>
        <Heading as="h1">
          Players: {players.join(':')}
        </Heading>
      </HStack>
      {/*---*/}
      <Separator width="100%" borderColor={'green.800'} />
      {/*---*/}
      {
        Phase.Draw === phase? (
          <PhaseDraw />
        ): Phase.Play === phase? (
          <PhasePlay />
        ): null
      }
    </>
  )
}

export default PageMain
