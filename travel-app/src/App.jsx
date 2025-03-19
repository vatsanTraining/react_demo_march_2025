import { useState } from 'react'
import RootLayout from './layouts/RootLayout'
import DashBoardLayout from './layouts/DashBoardLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RootLayout></RootLayout>
      <DashBoardLayout></DashBoardLayout>
    </>
  )
}

export default App
