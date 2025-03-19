import React, { useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import TableHead from '../ui/TableHead'
import TableBody from '../ui/TableBody'
import StateDemo from '../components/StateDemo'
import '../rootlayout.css'
import PaymentDetails from '../components/PaymentDetails'


const RootLayout = () => {
  let user = { userName: 'Ramesh', role: 'Admin' }

  let links = [
    { linkRef: '/home', linkText: 'Home' },
    { linkRef: '/about', linkText: 'About' },
    { linkRef: '/products', linkText: 'Product' }
  ]

  let columns = ['Customer Name', 'Location', 'Email']
  let data = [
    { customerName: 'Ramesh', location: 'Chennai', email: 'ram@abc.com' },
    { customerName: 'Rajesh', location: 'Mumbai', email: 'raj@abc.com' },
    { customerName: 'Siva', location: 'Mumbai', email: 'siv@abc.com' },

  ]
  const [custList, setCustList] = useState(data)





  const handleChange = (event) => {
    const srchString = event.target.value
    setCustList(prev => prev.filter((item) => item.customerName.toLowerCase().includes(srchString.toLowerCase())))

  }
  return (
    <div className='container'>
      <header className='top-section'>
        <Header user={user}></Header>
        <Navigation linkList={links}></Navigation>
      </header>
      <main>
        <div>
          <label>Search By CustomerName</label>
          <input type="text" name="srch" onChange={handleChange}></input>

        </div>

        <table>
          <TableHead columns={columns}></TableHead>
          <TableBody data={custList}></TableBody>
        </table>

        <PaymentDetails></PaymentDetails>
      </main>
      <footer>
        <StateDemo></StateDemo>
      </footer>
    </div>
  )
}

export default RootLayout