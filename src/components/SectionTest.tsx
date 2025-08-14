import {
  Button, Heading, HStack
} from "@chakra-ui/react"
import useGame from "../hooks/useGame"

const SectionTest = () => {
  const {
    handlePlay, handleDropRules,
  } = useGame()

  return (
    <>
      <HStack as="section" m={2}>
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
          Misc
        </Heading>
        <Button
          colorPalette={"red"}
          onClick={() => handlePlay('RND')}
        >RND</Button>
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
    </>
  )
}

export default SectionTest
