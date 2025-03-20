import React from 'react'
import { useContext } from 'react'
import { MyContext } from './MyContext'
const GrandChild = () => {
    const ctx = useContext(MyContext)

    return (
        <div>GrandChild{ctx.color}</div>
    )
}

export default GrandChild