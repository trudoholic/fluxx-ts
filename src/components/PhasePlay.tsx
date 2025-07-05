import {Button, Heading, HStack, Separator, StackSeparator} from "@chakra-ui/react"
import {RiArrowLeftSFill, RiArrowRightSFill} from "react-icons/ri"
import {Phase} from "../data/game"
import useGame from "../hooks/useGame"

const PhasePlay = () => {
  const {
    phase, setPhase,
    count, incCount, decCount,
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
    </>
  )
}

export default PhasePlay
