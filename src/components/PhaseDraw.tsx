import {Button, Heading, HStack, Separator, StackSeparator} from "@chakra-ui/react"
import {RiArrowLeftSFill, RiArrowRightSFill} from "react-icons/ri"
import {Phase} from "../data/game"
import useGame from "../hooks/useGame"

const PhaseDraw = () => {
  const {
    phase, setPhase,
    cntDraw, ruleDraw, setCntDraw, bDraw,
  } = useGame()

  return (
    <>
      <HStack m={2} separator={<StackSeparator />}>
        <Button
          colorPalette={"green"}
          onClick={() => setPhase(Phase.Play)}
        ><RiArrowRightSFill /></Button>
        <Heading as="h1">
          PhaseDraw: {phase}
        </Heading>
      </HStack>
      {/*---*/}
      <Separator width="100%" borderColor={'green.800'} />
      {/*---*/}
      <HStack m={2}>
        <Button
          colorPalette={"orange"}
          onClick={() => setCntDraw(cntDraw - 1)}
        ><RiArrowLeftSFill /></Button>
        <Button
          colorPalette={"orange"}
          onClick={() => setCntDraw(cntDraw + 1)}
        ><RiArrowRightSFill /></Button>
        <Heading as="h1">
          Draw: {cntDraw} : {ruleDraw} : {bDraw? '': '*'}
        </Heading>
      </HStack>
    </>
  )
}

export default PhaseDraw
