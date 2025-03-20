import React from 'react'
import { MyContext, ContextWithState } from './MyContext'
import { useContext } from 'react'
const ChildTwo = () => {
    const ctx = useContext(MyContext)
    const secondCtx = useContext(ContextWithState)


    return (
        <div>ChildTwo{ctx.color}
            <p>{secondCtx.message}</p>
            <button onClick={() => { secondCtx.setMessage('Child Two') }}>AnotherClick</button>

        </div>
    )
}

export default ChildTwo