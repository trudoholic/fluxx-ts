import {Box, Button, Center, Heading, HStack, Separator} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"

const PageOutro = () => {
  const {
    gameEnd,
    players,
  } = useGame()

  const scores = players.map(p => p.score)
  const maxIdx = scores.indexOf(Math.max(...scores))
  const minIdx = scores.indexOf(Math.min(...scores))

  return (
    <>
      <HStack m={2}>
        {
          players.map((p, idx) => (
            <Center
              key={p.id} w="100px" h="40px" color="white" rounded="md"
              bg={maxIdx === idx? "red.500": minIdx === idx? "blue.500": "green.700"}
            >
              <Box as="span" fontWeight="bold" fontSize="lg">
                {`${p.name}: ${p.score}`}
              </Box>
            </Center>
          ))
        }
      </HStack>
      {/*---*/}
      <Separator width="100%" borderColor={'green.800'} />
      {/*---*/}
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
