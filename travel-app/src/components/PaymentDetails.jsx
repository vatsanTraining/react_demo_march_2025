import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TableHead from '../ui/TableHead'
import TableBody from '../ui/TableBody'
import AddPayment from './AddPayment'
import { useForm } from '../customhooks/useForm'
const PaymentDetails = () => {

    const [paymentList, setPaymentList] = useState([])

    const initalState = {
        id: 0,
        customerName: "",
        amount: 0,
        currency: ""
    }

    const callBack = function (event) {

        console.log("post method called")

        axios.post("http://localhost:3000/payments", values).then(response => {

            if (response.status = 201) {
                console.log('Data Added')
                setPaymentList((prev) => [...prev, values])
            }
        })
    }
    const { onChange, onSubmit, values } = useForm(callBack, initalState)


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async function () {

        let response = await axios.get("http://localhost:3000/payments")

        setPaymentList((prev) => response.data)

    }

    const deleteData = (id) => {

        console.log('Delete Called', id)

        const url = `http://localhost:3000/payments/${id}`

        console.log(url)
        axios.delete(url).then((response) => {

            console.log(response.status)
            console.log(response.statusText)

            let updatedList = paymentList.filter(item => item.id !== id);

            console.log(updatedList)
            setPaymentList(currVal => updatedList)


        })
    }

    const editData = (id) => {
        console.log('Edit Called', id)
    }
    return (

        <>
            <AddPayment onChange={onChange} onSubmit={onSubmit} values={values}></AddPayment>
            <table>
                <TableHead columns={['id', 'customerName', 'amount', 'currency', 'action', 'action']} ></TableHead>
                <TableBody data={paymentList} handleDelete={deleteData}></TableBody>

            </table>
        </>
    )
}

export default PaymentDetails