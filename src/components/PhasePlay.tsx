import {Button, Heading, HStack, Separator, StackSeparator} from "@chakra-ui/react"
import {RiArrowLeftSFill, RiArrowRightSFill} from "react-icons/ri"
import {Phase} from "../data/game"
import useGame from "../hooks/useGame"

const PhasePlay = () => {
  const {
    phase, setPhase,
    cntPlay, rulePlay, setCntPlay, bPlay,
  } = useGame()

  return (
    <>
      <HStack m={2} separator={<StackSeparator />}>
        <Button
          colorPalette={"green"}
          onClick={() => setPhase(Phase.Draw)}
        ><RiArrowRightSFill /></Button>
        <Heading as="h1">
          PhasePlay: {phase}
        </Heading>
      </HStack>
      {/*---*/}
      <Separator width="100%" borderColor={'green.800'} />
      {/*---*/}
      <HStack m={2}>
        <Button
          colorPalette={"orange"}
          onClick={() => setCntPlay(cntPlay - 1)}
        ><RiArrowLeftSFill /></Button>
        <Button
          colorPalette={"orange"}
          onClick={() => setCntPlay(cntPlay + 1)}
        ><RiArrowRightSFill /></Button>
        <Heading as="h1">
          Play: {cntPlay} : {rulePlay} : {bPlay? '': '*'}
        </Heading>
      </HStack>
    </>
  )
}

export default PhasePlay
