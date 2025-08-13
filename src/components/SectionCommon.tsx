import {
  Heading, GridItem, SimpleGrid,
} from "@chakra-ui/react"
import {Zone} from "../data/cards"
import ZoneList from "./ZoneList"

const SectionCommon = () => {

  return (
    <>
      <SimpleGrid as="section" columns={5} gap={2} mb={2}>
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
    </>
  )
}

export default SectionCommon
