import {
  Box, Center, Button, HStack
} from "@chakra-ui/react"
import {RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"

const SectionFlow = () => {
  const {
    nextHand, players, bHand,
  } = useGame()

  return (
    <>
      <HStack as="section" m={2}>
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
    </>
  )
}

export default SectionFlow
