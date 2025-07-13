import {
  Box, Center, Button, Heading, HStack, Separator,
  GridItem, SimpleGrid, //Code,
} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import {Zone} from "../data/cards"
import {Phase} from "../data/game"
import useGame from "../hooks/useGame"
import PhaseDraw from "./PhaseDraw"
import PhasePlay from "./PhasePlay"
import ZoneList from "./ZoneList"

const PageMain = () => {
  const {
    // deck,
    gameOutro, nextHand,
    phase,
    players, bHand,
    gameOver,
  } = useGame()

  return (
    <>
      {/*---*/}
      <SimpleGrid columns={5} gap={2} mb={2}>
        <GridItem colSpan={2} bg="green.800" p={2}>
          <Heading as="h1" mb={2} color="green.600">
            Draw Pile
          </Heading>
          <ZoneList zone={Zone.Draw}/>
        </GridItem>
        <GridItem colSpan={1} bg="green.800" p={2}>
          <Heading as="h1" mb={2} color="green.600">
            Stack
          </Heading>
        </GridItem>
        <GridItem colSpan={2} bg="green.800" p={2}>
          <Heading as="h1" mb={2} color="green.600">
            Drop Pile
          </Heading>
          <ZoneList zone={Zone.Drop}/>
        </GridItem>
      </SimpleGrid>
      {/*---*/}
      <SimpleGrid columns={players.length} gap={2} mb={2}>
        {
          players.map(p => (
            <GridItem key={p.id} colSpan={1} bg="green.800" p={2}>
              <Heading as="h1" mb={2} color="green.600">
                {p.name} Hand
              </Heading>
              <ZoneList zone={Zone.Hand} player={p.id}/>
            </GridItem>
          ))
        }
      </SimpleGrid>
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
      {/*---*/}
      <Separator width="100%" borderColor={'green.800'} />
      {/*<Code px={2}>{deck.join('|')}</Code>*/}
      {/*---*/}
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
      {/*---*/}
    </>
  )
}

export default PageMain
