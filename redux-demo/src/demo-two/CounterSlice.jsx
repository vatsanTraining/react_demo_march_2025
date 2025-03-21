import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//     empId:'',skills:[],salary:0
// }


const CounterSlice = createSlice({
    name: 'counter',
    initialState: { value: 2, city: ['Chennai'] },
    reducers: {
        increment(state) {
            state.value = state.value + 1
        },
        addCity(state, city) {
            [...state.city, city]
        }
    }
})

export const { increment, addCity } = CounterSlice.actions
export default CounterSlice