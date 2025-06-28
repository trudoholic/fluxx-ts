import ContextProvider from "./context"

import Layout from "./Layout"

function App() {
  return (
    <>
      <ContextProvider>
        <Layout/>
      </ContextProvider>
    </>
  )
}

export default App
