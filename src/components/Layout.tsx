import {ChakraProvider, defaultSystem, Box} from "@chakra-ui/react"
// import {blueGrey} from "./colors"

import Main from "./Main"

function Layout() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box
        color={"white"}
        bg={"green.900"}
        w="dvw" h="dvh" p={4}
      >
        <Main/>
      </Box>
    </ChakraProvider>
  )
}

export default Layout
