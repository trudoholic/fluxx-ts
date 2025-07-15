import {Button, Heading, HStack} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"

const PhaseDraw = () => {
  const {
    cntDraw, nDraw, setCntDraw, bDraw,
    handleDraw, endPhaseDraw,
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
              onClick={() => endPhaseDraw()}
            ><RiArrowRightSFill /></Button>
          )
        }
        <Heading as="h1">
          {bDraw? `Draw: ${nDraw}`: 'End Phase Draw'}
        </Heading>
      </HStack>
    </>
  )
}

export default PhaseDraw
