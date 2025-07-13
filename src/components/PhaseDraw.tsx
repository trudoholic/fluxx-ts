import {Button, Heading, HStack} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import {Phase} from "../data/game"
import useGame from "../hooks/useGame"

const PhaseDraw = () => {
  const {
    setPhase,
    cntDraw, ruleDraw, setCntDraw, bDraw,
    handleDraw,
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
              onClick={() => setPhase(Phase.Play)}
            ><RiArrowRightSFill /></Button>
          )
        }
        <Heading as="h1">
          {bDraw? `Draw: ${ruleDraw - cntDraw}`: 'Next Phase'}
          {/*{bDraw? `Draw: ${cntDraw} / ${ruleDraw}`: 'Next Phase'}*/}
        </Heading>
      </HStack>
    </>
  )
}

export default PhaseDraw
