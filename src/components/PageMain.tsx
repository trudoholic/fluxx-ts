import {
  Box, Center, Button, Heading, HStack, Separator,
  GridItem, SimpleGrid, //Code,
} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import {Zone, ALL, NO} from "../data/cards"
import {Phase} from "../data/game"
import useGame from "../hooks/useGame"
import PhaseBegin from "./PhaseBegin"
import PhaseDraw from "./PhaseDraw"
import PhasePlay from "./PhasePlay"
import PhaseDiscard from "./PhaseDiscard"
import PhaseDestroy from "./PhaseDestroy"
import PhaseEnd from "./PhaseEnd"
import ZoneList from "./ZoneList"

const PageMain = () => {
  const {
    ruleDraw, rulePlay, ruleHand, ruleKeep,
    gameOutro, nextHand,
    phase,
    players, bHand,
    gameOver,
    handlePlay, handleDropRules,
  } = useGame()

  return (
    <>
      {/*---*/}
      <HStack gap="5" m={2}>
        <Heading as="h1" color="green.600">
          Rules:
        </Heading>

        <Center
          w="100px" h="40px" color="white" rounded="md"
          bg={Phase.Draw === phase? "green.500": "green.700"}
        >
          <Box as="span" fontWeight="bold" fontSize="lg">
            {`Draw: ${ruleDraw}`}
          </Box>
        </Center>

        <Center
          w="100px" h="40px" color="white" rounded="md"
          bg={Phase.Play === phase? "green.500": "green.700"}
        >
          <Box as="span" fontWeight="bold" fontSize="lg">
            {`Play: ${ALL === rulePlay? "ALL": rulePlay}`}
          </Box>
        </Center>

        <Center
          w="150px" h="40px" color="white" rounded="md"
          bg={Phase.Discard === phase? "green.500": "green.700"}
        >
          <Box as="span" fontWeight="bold" fontSize="lg">
            {`Hand Lim: ${NO === ruleHand? "—": ruleHand}`}
          </Box>
        </Center>

        <Center
          w="150px" h="40px" color="white" rounded="md"
          bg={Phase.Destroy === phase? "green.500": "green.700"}
        >
          <Box as="span" fontWeight="bold" fontSize="lg">
            {`Keep Lim: ${NO === ruleKeep? "—": ruleKeep}`}
          </Box>
        </Center>

      </HStack>
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
            Rules
          </Heading>
          <ZoneList zone={Zone.Rule}/>
        </GridItem>
        <GridItem colSpan={2} bg="green.800" p={2}>
          <Heading as="h1" mb={2} color="green.600">
            Drop Pile
          </Heading>
          <ZoneList zone={Zone.Drop}/>
        </GridItem>
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
        Phase.Begin === phase? (
          <PhaseBegin />
        ): Phase.Draw === phase? (
          <PhaseDraw />
        ): Phase.Play === phase? (
          <PhasePlay />
        ): Phase.Discard === phase? (
          <PhaseDiscard />
        ): Phase.Destroy === phase? (
          <PhaseDestroy />
        ): Phase.End === phase? (
          <PhaseEnd />
        ): null
      }
      {/*---*/}
      <Separator width="100%" borderColor={'green.800'} />
      <HStack m={2}>
        {/*--*/}
        <Heading as="h1">
          Set Draw:
        </Heading>
        <Button
          colorPalette={"red"}
          onClick={() => handlePlay('D:2')}
        >2</Button>
        <Button
          colorPalette={"red"}
          onClick={() => handlePlay('D:3')}
        >3</Button>
        <Button
          colorPalette={"red"}
          onClick={() => handlePlay('D:4')}
        >4</Button>
        {/*--*/}
        <Heading as="h1">
          Set Play:
        </Heading>
        <Button
          colorPalette={"red"}
          onClick={() => handlePlay('P:2')}
        >2</Button>
        <Button
          colorPalette={"red"}
          onClick={() => handlePlay('P:3')}
        >3</Button>
        <Button
          colorPalette={"red"}
          onClick={() => handlePlay('P:4')}
        >4</Button>
        {/*--*/}
        <Heading as="h1">
          Drop Rules
        </Heading>
        <Button
          colorPalette={"red"}
          onClick={() => handleDropRules()}
        >X</Button>
        {/*--*/}
      </HStack>
      {/*---*/}
      <Separator width="100%" borderColor={'green.800'} />
      {/*<Code px={2}>{deck.join('|')}</Code>*/}
      {/*---*/}
      <SimpleGrid columns={players.length} gap={2} my={2}>
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
        {
          players.map(p => (
            <GridItem key={p.id} colSpan={1} bg="green.800" p={2}>
              <Heading as="h1" mb={2} color="green.600">
                {p.name} Keep
              </Heading>
              <ZoneList zone={Zone.Keep} player={p.id}/>
            </GridItem>
          ))
        }
      </SimpleGrid>
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
