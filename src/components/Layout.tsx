import {ChakraProvider, defaultSystem, Container} from "@chakra-ui/react"
import {blueGrey} from "./colors"

import Main from "./Main"

function Layout() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Container
        color={"white"}
        bg={blueGrey[500]}
        p={4}
      >
        <Main/>
      </Container>
    </ChakraProvider>
  )
}

export default Layout
