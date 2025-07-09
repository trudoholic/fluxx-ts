import {Box, Center, Button, Heading, HStack, Separator} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import {Phase} from "../data/game"
import useGame from "../hooks/useGame"
import PhaseDraw from "./PhaseDraw"
import PhasePlay from "./PhasePlay"

const PageMain = () => {
  const {
    gameOutro, nextHand,
    phase,
    players, bHand,
    gameOver,
  } = useGame()

  return (
    <>
      <HStack m={2}>
        <Button
          colorPalette={"green"}
          onClick={() => gameOutro()}
        ><RiArrowRightSFill /></Button>

        <Heading as="h1">
          {`Game Over: ${gameOver}`}
        </Heading>
      </HStack>
      {/*---*/}
      <Separator width="100%" borderColor={'green.800'} />
      {/*---*/}
      <HStack m={2}>
        {
          players.map(p => (
            <Center
              key={p.id} w="100px" h="40px" color="white" rounded="md"
              bg={bHand(p.id)? "green.500": "green.700"}
            >
              <Box as="span" fontWeight="bold" fontSize="lg">
                {`${p.name}: ${p.score}`}
              </Box>
            </Center>
          ))
        }

        <Button
          colorPalette={"orange"}
          disabled
          onClick={() => nextHand()}
        ><RiArrowRightSFill /></Button>
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
