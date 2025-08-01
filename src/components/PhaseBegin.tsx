import {Button, Heading, HStack} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"

const PhaseBegin = () => {
  const {
    handleBegin,
    curPlayer,
  } = useGame()

  return (
    <>
      <HStack m={2}>
        <Button
          colorPalette={"pink"}
          onClick={() => handleBegin()}
        ><RiArrowRightSFill /></Button>
        <Heading as="h1">
          {'Begin Hand: ' + curPlayer.name}
        </Heading>
      </HStack>
    </>
  )
}

export default PhaseBegin
