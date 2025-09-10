import {
  Button, Heading, HStack
} from "@chakra-ui/react"
import useGame from "../hooks/useGame"

const SectionSpells = () => {
  const {
    handlePlay,
  } = useGame()

  return (
    <>
      <HStack as="section" gap="4" m={2}>
        <Heading as="h1" color="green.600">
          Spells:
        </Heading>
        {[1,2,3,4,5].map(it => (
          <Button
            key={it}
            colorPalette={"red"}
            onClick={() => handlePlay('D:2')}
          >{it}</Button>
        ))}
      </HStack>
    </>
  )
}

export default SectionSpells
