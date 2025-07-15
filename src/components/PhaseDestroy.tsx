import {Button, Heading, HStack} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"

const PhaseDestroy = () => {
  const {
    cntDraw, nDestroy, setCntDraw, bDraw,
    handleDraw, endPhaseDestroy,
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
              onClick={() => endPhaseDestroy()}
            ><RiArrowRightSFill /></Button>
          )
        }
        <Heading as="h1">
          {bDraw? `Destroy: ${nDestroy}`: 'End Phase Destroy'}
        </Heading>
      </HStack>
    </>
  )
}

export default PhaseDestroy
