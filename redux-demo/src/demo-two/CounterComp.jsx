import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, addCity } from './CounterSlice'
export const CounterComp = () => {

    const foundValue = useSelector(state => state.numberCounter.value)
    const foundCity = useSelector(state => state.numberCounter.city)

    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch(increment())
        dispatch(addCity('Pune'))
    }
    return (
        <div>
            Found Value From Store:{foundValue}in{foundCity[0]}
            <button onClick={handleChange}>Increment</button>
        </div>

    )
}
