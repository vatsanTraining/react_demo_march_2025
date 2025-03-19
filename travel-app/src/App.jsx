import { useState } from 'react'
import RootLayout from './layouts/RootLayout'
import DashBoardLayout from './layouts/DashBoardLayout'
import HomeLayout from './layouts/HomeLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RootLayout></RootLayout>
      <DashBoardLayout></DashBoardLayout>
      <HomeLayout></HomeLayout>
    </>
  )
}

export default App
