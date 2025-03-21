import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
const ComponentOne = () => {

    const bgcolor = useSelector(state => state.color.bgcolor)

    const fntsize = useSelector(state => state.font.size)

    const dispatch = useDispatch()

    const colorRef = useRef(null)

    const handleChange = () => {

        let prefColor = colorRef.current.value

        dispatch({ type: 'CHANGE_BACKGROUND_COLOR', payload: { bgcolor: prefColor } })

    }
    return (
        <div style={{ backgroundColor: bgcolor, fontSize: fntsize }}>

            <label>Pref Background Color</label>

            <input type='text' name="prefColor" ref={colorRef}></input>
            <button onClick={handleChange}>Change </button>

        </div>
    )
}

export default ComponentOne