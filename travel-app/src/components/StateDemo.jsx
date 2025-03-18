import React, { useState } from 'react'

const StateDemo = () => {

    const [count, setCount] = useState(1)
    const [list, setList] = useState([])

    const handleClick = () => {
        setCount((prev) => prev + 1)
    }

    const handleBlur = (event) => {

        console.log(event.target.value)
        console.log(event.target.name)
        console.log('event fired')
        setList((prev) => [...prev, event.target.value])
    }
    return (
        <div>
            <p>{count}</p>
            <p>
                {list.forEach((value, idx) => { console.log(value) })}
            </p>
            <button onClick={handleClick}>Increment</button>
            <input type='text' name='city' onBlur={handleBlur}></input>


        </div>
    )
}

export default StateDemo