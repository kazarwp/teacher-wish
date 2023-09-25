import { MantineProvider } from "@mantine/core"
import { Cell } from "./Cell"
import { TextArea } from "./TextArea"
import { Header } from "./Header"

import '@mantine/core/styles.css'

function App() {

  return (
    <MantineProvider>
      <Header/>
      <Cell/>
      <TextArea />
    </MantineProvider>
  )
}

export default App
