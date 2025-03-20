import React, { useContext, useState } from 'react'

import { MyContext } from './MyContext'
import { ContextWithState } from './MyContext'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'
const MyProvider = () => {
    const [message, setMessage] = useState('Welcome')
    return (
        <div>
            <MyContext.Provider value={{ color: "green" }}>
                <ContextWithState.Provider value={{ message, setMessage }}>

                    <ChildOne></ChildOne>
                    <ChildTwo></ChildTwo>

                </ContextWithState.Provider>


            </MyContext.Provider>

        </div>
    )
}

export default MyProvider