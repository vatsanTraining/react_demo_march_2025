import React from 'react'
import PaymentDetails from './PaymentDetails'
import axios from 'axios'
import Label from '../ui/Label'
const AddPayment = ({ onChange, onSubmit }) => {


    return (
        <>
            <form action="" onSubmit={onSubmit}>

                <div>
                    <Label text={"Id"}></Label>
                    <input type="text" name="id" id="id" onChange={onChange} />
                </div>
                <div>
                    <Label text={'Customer Name'}></Label>
                    <input type="text" name="customerName" id="custName" onChange={onChange} />
                </div>
                <div>
                    <Label text={'Amount'}></Label>
                    <input type="text" name="amount" id="amount" onChange={onChange} />
                </div>
                <div>
                    <Label text={'Currency'}></Label>
                    <input type="text" name="currency" id="currency" onChange={onChange} />
                </div>
                <div>
                    <input type="submit" value="Add" />
                </div>
            </form>
        </>
    )
}

export default AddPayment