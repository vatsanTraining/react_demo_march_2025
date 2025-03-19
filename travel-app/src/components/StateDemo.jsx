import React, { useState, useEffect } from 'react'

const StateDemo = () => {

    const [count, setCount] = useState(1)
    const [list, setList] = useState([])


    // useEffect(()=>{
    //     //side defect action takes places here

    //     return () =>{}    // optional clean up function
    // },[]) //[] depedency array

    // first version when its  CALLED JUST ONCE

    // useEffect(()=>{
    //     console.log('effect called')
    // },[])


    // Second version when its  CALLED whenever the value in 
    // depedency array change

    // useEffect(() => {
    //     console.log('effect called for', count)
    // }, [count])

    // Third version when its  CALLED whenever the value in 
    // depedency array change and its cleaned up and updated state is rendered

    useEffect(() => {
        console.log('effect called for', count)
        console.log('effect called', list)
        return () => { console.log('clean up called') }
    }, [count])

    useEffect(() => {
        console.log('effect called', list)
        return () => { console.log('clean up called for list') }
    }, [list])


    const handleClick = () => {
        setCount((prev) => prev + 1)
        // setCount((prev) => prev + 1)

        // updates are not done immediately
        // setCount(count + 1)
        // setCount(count + 1)

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
            <div>
                {list.map((item, idx) => <p key={idx}>{item}</p>)}
            </div>
            <button onClick={handleClick}>Increment</button>
            <input type='text' name='city' onBlur={handleBlur}></input>


        </div>
    )
}

export default StateDemo