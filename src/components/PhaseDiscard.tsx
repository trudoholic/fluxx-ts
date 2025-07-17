import {Button, Heading, HStack} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"

const PhaseDiscard = () => {
  const {
    idActive, nDiscard, bDiscard,
    handleDrop, endPhaseDiscard,
  } = useGame()

  return (
    <>
      <HStack m={2}>
        {
          bDiscard? (
            <Button
              colorPalette={"orange"}
              onClick={() => {
                handleDrop(idActive)
              }}
            ><RiArrowRightSFill /></Button>
          ): (
            <Button
              colorPalette={"green"}
              onClick={() => endPhaseDiscard()}
            ><RiArrowRightSFill /></Button>
          )
        }
        <Heading as="h1">
          {bDiscard? `Discard: ${nDiscard}`: 'End Phase Discard'}
        </Heading>
      </HStack>
    </>
  )
}

export default PhaseDiscard
