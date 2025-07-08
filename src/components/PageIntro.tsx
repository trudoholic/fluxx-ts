import {Button, Heading, HStack} from "@chakra-ui/react"
import useGame from "../hooks/useGame"

const PageIntro = () => {
  const {
    gameBegin,
  } = useGame()

  return (
    <>
      <HStack m={2}>
        <Heading as="h1">
          Begin game:
        </Heading>
        <Button
          colorPalette={"green"}
          onClick={() => gameBegin(2)}
        >2</Button>
        <Button
          colorPalette={"green"}
          onClick={() => gameBegin(3)}
        >3</Button>
        <Button
          colorPalette={"green"}
          onClick={() => gameBegin(4)}
        >4</Button>
      </HStack>
    </>
  )
}

export default PageIntro
