import { useState } from 'react'
import RootLayout from './layouts/RootLayout'
import DashBoardLayout from './layouts/DashBoardLayout'
import HomeLayout from './layouts/HomeLayout'
import Login from './components/Login'
import NotFound from './components/NotFound'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import PaymentDetails from './components/PaymentDetails'
import Table from './components/Table'
import ProfilePage from './components/ProfilePage'
import StateDemo from './components/StateDemo'
import SalesDetails from './components/SalesDetails'
import StaffDetails from './components/StaffDetails'
import PrivateRoute from './components/PrivateRoute'
import FinanceDetails from './components/FinanceDetails'
function App() {
  const [count, setCount] = useState(0)

  // const myroute = createBrowserRouter(createRoutesFromElements(<Route>
  //   <Route></Route>
  // </Route>))

  const myrouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={ <Login />}></Route>
        <Route path="/home" element={<Login />} />
        <Route path="/about" element={<StateDemo />} />
        <Route path="/finance" element={
          <PrivateRoute><FinanceDetails /></PrivateRoute>} />
        <Route path="/profile/:id/:dept" element={<ProfilePage />} />

        <Route path='/dashboard' element={<DashBoardLayout />}>
          <Route path='sales' element={<SalesDetails />} />
          <Route path='staff' element={<StaffDetails />} />
        </Route>
        <Route path="/about" element={<StateDemo />} />

        <Route path="/payments" element={<PaymentDetails />} />
        <Route path="*" element={<NotFound />}></Route>
      </Route>))

  return (
    <>
      {/* <RootLayout></RootLayout>
      <App>
      <DashBoardLayout></DashBoardLayout>
      <HomeLayout></HomeLayout> */}
      <RouterProvider router={myrouter}></RouterProvider>

    </>
  )
}

export default App
