import {Box, Center, Flex, Heading, Circle, Float} from "@chakra-ui/react"
import {getCardData, suitColor, type TZone} from "../data/cards"
import useGame from "../hooks/useGame"

const ZoneList = (props:{zone: TZone, player?: number}) => {
  const {zone, player} = props

  const {
    deckZone,
    bActive, setActive,
    bEnabled,
  } = useGame()

  const list = deckZone(zone, player ?? 0)

  return (
    <Flex gap="2" pt="2" wrap="wrap" maxH="250px" overflowY="auto">
      {
        list
          .map(id => getCardData(id))
          .map(it => (
            <Box
              key={it.id} p={.5} rounded="md"
              bg={bActive(it.id)? "white": "green.800"}
            >
              <Center
                position="relative"
                w="64px" py={1} rounded="md"
                bg={suitColor(it.suit)}
                // color={bActive(it.id)? "yellow.300": "white"}
                onClick={() => {
                  if (bEnabled(it.id)) setActive(it.id)
                }}
              >
                <Heading>{it.name}</Heading>
                {bEnabled(it.id) ? <Float><Circle size="2" bg="yellow.300"/></Float>: null}
              </Center>
            </Box>
          ))
      }
    </Flex>
  )
}

export default ZoneList
