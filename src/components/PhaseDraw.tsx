import {Button, Heading, HStack} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"

const PhaseDraw = () => {
  const {
    cntDraw, nDraw, setCntDraw, bDraw,
    handleDraw, endPhaseDraw,
    drawLength, dropLength,
    reshuffle,
  } = useGame()

  return (
    <>
      <HStack m={2}>
        {
          bDraw && (drawLength || dropLength)? (
            //----------------------------------
            !drawLength && dropLength? (
              <Button
                colorPalette={"red"}
                onClick={() => {
                  reshuffle()
                }}
              ><RiArrowRightSFill /></Button>
            ): (
              <Button
                colorPalette={"orange"}
                onClick={() => {
                  handleDraw()
                  setCntDraw(cntDraw + 1)
                }}
              ><RiArrowRightSFill /></Button>
            )
            //----------------------------------
          ): (
            <Button
              colorPalette={"green"}
              onClick={() => endPhaseDraw()}
            ><RiArrowRightSFill /></Button>
          )
        }
        <Heading as="h1">
          {
            bDraw && (drawLength || dropLength)? (
              !drawLength && dropLength? 'Reshuffle': `Draw: ${nDraw}`
            ): 'End Phase Draw'
          }
        </Heading>
      </HStack>
    </>
  )
}

export default PhaseDraw
