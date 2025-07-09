import {Button, Heading, HStack} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
// import {Phase} from "../data/game"
import useGame from "../hooks/useGame"

const PhasePlay = () => {
  const {
    // setPhase,
    nextHand,
    cntPlay, rulePlay, setCntPlay, bPlay,
  } = useGame()

  return (
    <>
      <HStack m={2}>
        {
          bPlay? (
            <Button
              colorPalette={"orange"}
              onClick={() => setCntPlay(cntPlay + 1)}
            ><RiArrowRightSFill /></Button>
          ): (
            <Button
              colorPalette={"green"}
              // onClick={() => setPhase(Phase.Draw)}
              onClick={() => nextHand()}
            ><RiArrowRightSFill /></Button>
          )
        }
        <Heading as="h1">
          {bPlay? `Play: ${cntPlay} / ${rulePlay}`: 'Next Player'}
        </Heading>
      </HStack>
    </>
  )
}

export default PhasePlay
