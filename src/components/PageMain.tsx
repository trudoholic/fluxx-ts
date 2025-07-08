import {Box, Center, Button, Heading, HStack, Separator} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import {Phase} from "../data/game"
import useGame from "../hooks/useGame"
import PhaseDraw from "./PhaseDraw"
import PhasePlay from "./PhasePlay"

const PageMain = () => {
  const {
    gameOutro,
    phase,
    players,
  } = useGame()

  const rnd = Math.floor(Math.random() * players.length)

  return (
    <>
      <HStack m={2}>
        <Button
          colorPalette={"green"}
          onClick={() => gameOutro()}
        ><RiArrowRightSFill /></Button>
        <Heading as="h1">
          Players: {rnd + 1}
        </Heading>
        {
          players.map(p => (
            <Center
              key={p.id} w="80px" h="40px" color="white" rounded="md"
              bg={rnd + 1 === p.id? "green.500": "green.700"}
            >
              <Box as="span" fontWeight="bold" fontSize="lg">
                {p.name}
              </Box>
            </Center>
          ))
        }
      </HStack>
      {/*---*/}
      <Separator width="100%" borderColor={'green.800'} />
      {/*---*/}
      {
        Phase.Draw === phase? (
          <PhaseDraw />
        ): Phase.Play === phase? (
          <PhasePlay />
        ): null
      }
    </>
  )
}

export default PageMain
