import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TableHead from '../ui/TableHead'
import TableBody from '../ui/TableBody'
const PaymentDetails = () => {

    const [paymentList, setPaymentList] = useState([])


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async function () {

        let response = await axios.get("http://localhost:3000/payments")

        setPaymentList((prev) => response.data)

    }

    return (
        <table>
            <TableHead columns={['id', 'customerName', 'amount', 'currency']} ></TableHead>
            <TableBody data={paymentList}></TableBody>

        </table>
    )
}

export default PaymentDetails