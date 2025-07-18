import {Button, Heading, HStack} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"

const PhaseEnd = () => {
  const {
    nextHand,
    curPlayer, nextPlayer,
  } = useGame()

  return (
    <>
      <HStack m={2}>
        <Heading as="h1">
          {curPlayer.name}
        </Heading>
        <Button
          colorPalette={"green"}
          onClick={() => nextHand()}
        ><RiArrowRightSFill /></Button>
        <Heading as="h1">
          {nextPlayer.name}
        </Heading>
      </HStack>
    </>
  )
}

export default PhaseEnd
