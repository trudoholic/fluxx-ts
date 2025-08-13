import {
  Heading, GridItem, SimpleGrid,
} from "@chakra-ui/react"
import {Zone} from "../data/cards"
import useGame from "../hooks/useGame"
import ZoneList from "./ZoneList"

const SectionPlayers = () => {
  const {
    players,
  } = useGame()

  return (
    <>
      <SimpleGrid as="section" columns={players.length} gap={2} my={2}>
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
    </>
  )
}

export default SectionPlayers
