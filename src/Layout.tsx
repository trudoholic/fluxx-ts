import { ChakraProvider, defaultSystem, Container } from "@chakra-ui/react"

import Main from "./components/Main"

function Layout() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Container>
        <Main/>
      </Container>
    </ChakraProvider>
  )
}

export default Layout
