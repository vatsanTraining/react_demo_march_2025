import React from 'react'
import ProfilePage from '../components/ProfilePage'
import { Outlet, useNavigate } from 'react-router-dom'
const DashBoardLayout = () => {

  const navigate = useNavigate()
  return (
    <aside>
      {/* <aside><ProfilePage></ProfilePage></aside> */}
      <button onClick={() => navigate('sales')}>Sales</button>
      <button onClick={() => navigate('staff')}>Staff</button>

      <button onClick={() => navigate('/profile/101/hr')}>First</button>
      <button onClick={() => navigate('/profile/102/sales')}>Second</button>


      <Outlet></Outlet>
    </aside>
  )
}

export default DashBoardLayout