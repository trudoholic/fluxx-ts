import {Button, Heading, HStack} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"

const PageOutro = () => {
  const {
    gameEnd,
  } = useGame()

  return (
    <>
      <HStack m={2}>
        <Button
          colorPalette={"green"}
          onClick={() => gameEnd()}
        ><RiArrowRightSFill /></Button>
        <Heading as="h1">
          End game
        </Heading>
      </HStack>
    </>
  )
}

export default PageOutro
