import { useState } from 'react'
import RootLayout from './layouts/RootLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RootLayout></RootLayout>
    </>
  )
}

export default App
