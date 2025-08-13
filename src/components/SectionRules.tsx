import {
  Box, Center, Heading, HStack,
} from "@chakra-ui/react"
import {ALL, NO} from "../data/cards"
import {Phase} from "../data/game"
import useGame from "../hooks/useGame"

const SectionRules = () => {
  const {
    ruleDraw, rulePlay, ruleHand, ruleKeep,
    phase,
  } = useGame()

  return (
    <>
      <HStack as="section" gap="5" m={2}>
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
    </>
  )
}

export default SectionRules
