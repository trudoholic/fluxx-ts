import {
  Button, Heading, HStack
} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"

const SectionOver = () => {
  const {
    gameOutro,
    gameOver,
  } = useGame()

  return (
    <>
      {
        gameOver? (
          <HStack m={2}>
            <Heading as="h1">
              Game Over
            </Heading>
            <Button
              colorPalette={"green"}
              onClick={() => gameOutro()}
            ><RiArrowRightSFill /></Button>
          </HStack>
        ): null
      }
    </>
  )
}

export default SectionOver
