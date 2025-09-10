import {
  Button, Heading, HStack
} from "@chakra-ui/react"
import {type TSpell, spells} from "../data/spells"
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
        {spells.map((spell: TSpell) => (
          <Button
            key={spell.id}
            colorPalette={"red"}
            onClick={() => handlePlay('D:2')}
          >{spell.name}</Button>
        ))}
      </HStack>
    </>
  )
}

export default SectionSpells
