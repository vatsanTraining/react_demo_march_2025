import React from 'react'
import PaymentDetails from './PaymentDetails'
import axios from 'axios'
const AddPayment = ({onChange,onSubmit}) => {


    return (
        <>
            <form action="" onSubmit={onSubmit}>

                <label>Id</label>
                <input type="text" name="id" id="id" onChange={onChange} />

                <label>Customer Name</label>
                <input type="text" name="customerName" id="custName" onChange={onChange} />

                <label>Amount</label>
                <input type="text" name="amount" id="amount" onChange={onChange} />

                <label>Currency</label>
                <input type="text" name="currency" id="currency" onChange={onChange} />


                <input type="submit" value="Add" />

            </form>
        </>
    )
}

export default AddPayment