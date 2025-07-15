import {Button, Heading, HStack} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"

const PhasePlay = () => {
  const {
    cntPlay, nPlay, setCntPlay, bPlay,
    gameOver, idActive,
    handlePlay, endPhasePlay,
  } = useGame()

  return (
    <>
      <HStack m={2}>
        {
          bPlay? (
            <Button
              colorPalette={"orange"}
              disabled={gameOver || !idActive}
              onClick={() => {
                // console.log('#', idActive)
                handlePlay(idActive)
                setCntPlay(cntPlay + 1)
              }}
            ><RiArrowRightSFill /></Button>
          ): (
            <Button
              colorPalette={"green"}
              disabled={gameOver}
              onClick={() => endPhasePlay()}
            ><RiArrowRightSFill /></Button>
          )
        }
        <Heading as="h1">
          {bPlay? `Play: ${nPlay}`: 'End Phase Play'}
        </Heading>
      </HStack>
    </>
  )
}

export default PhasePlay
