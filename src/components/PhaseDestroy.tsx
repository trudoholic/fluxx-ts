import {Button, Heading, HStack} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"

const PhaseDestroy = () => {
  const {
    idActive, nDestroy, bDestroy,
    handleDrop, endPhaseDestroy,
  } = useGame()

  return (
    <>
      <HStack m={2}>
        {
          bDestroy? (
            <Button
              colorPalette={"orange"}
              onClick={() => {
                handleDrop(idActive)
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
          {bDestroy? `Destroy: ${nDestroy}`: 'End Phase Destroy'}
        </Heading>
      </HStack>
    </>
  )
}

export default PhaseDestroy
