import {Button, Heading, HStack} from "@chakra-ui/react"
import useGame from "../hooks/useGame"

const Main = () => {
  const {
    count,
    incCount,
    decCount,
  } = useGame()

  return (
    <>
      <HStack>
        <Button
          colorPalette={"orange"}
          onClick={() => decCount(1)}
        >
          &ndash;
        </Button>
        <Button
          colorPalette={"orange"}
          onClick={() => incCount(1)}
        >
          +
        </Button>
        <Heading as="h1">
          count is {count}
        </Heading>
      </HStack>
    </>
  )
}

export default Main
