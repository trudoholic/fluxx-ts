import {
  Button, Heading, HStack
} from "@chakra-ui/react"
import useGame from "../hooks/useGame"

const SectionSpells = () => {
  const {
    spells, tapSpell,
  } = useGame()

  return (
    <>
      <HStack as="section" gap="4" m={2}>
        <Heading as="h1" color="green.600">
          Spells:
        </Heading>
        {spells.map(spell => (
          <Button
            key={spell.id}
            colorPalette="red"
            // colorPalette={spell.tapped? "gray": "red"}
            variant={spell.tapped? "surface": "solid"}
            onClick={() => {
              console.log('Click:')
              console.log(spell)
              tapSpell(spell.id)
            }}
          >{spell.name}</Button>
        ))}
      </HStack>
    </>
  )
}

export default SectionSpells
