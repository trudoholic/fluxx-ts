import './App.css'
import ContextProvider from "./context"

import Layout from "./components/Layout"

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
