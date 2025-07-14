import {Button, Heading, HStack} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"

const PhaseDiscard = () => {
  const {
    cntDraw, ruleDraw, setCntDraw, bDraw,
    handleDraw, endPhaseDiscard,
  } = useGame()

  return (
    <>
      <HStack m={2}>
        {
          bDraw? (
            <Button
              colorPalette={"orange"}
              onClick={() => {
                handleDraw()
                setCntDraw(cntDraw + 1)
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
          {bDraw? `Discard: ${ruleDraw - cntDraw}`: 'End Phase Discard'}
        </Heading>
      </HStack>
    </>
  )
}

export default PhaseDiscard
