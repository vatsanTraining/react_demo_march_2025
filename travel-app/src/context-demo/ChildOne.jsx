import React, { useContext } from 'react'
import { MyContext, ContextWithState } from './MyContext'
import GrandChild from './GrandChild'

const ChildOne = ({}) => {
    const ctx = useContext(MyContext)
    const secondCtx = useContext(ContextWithState)
    return (
        <>
            <div>ChildOne{ctx.color}</div>
            <p>{secondCtx.message}</p>
            <button onClick={()=>{secondCtx.setMessage('Child One')}}>Click</button>
            <GrandChild></GrandChild>
        </>
    )
}

export default ChildOne