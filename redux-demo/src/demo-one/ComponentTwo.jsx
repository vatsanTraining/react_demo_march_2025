import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ComponentTwo = () => {

    const bgcolor = useSelector(state => state.color.bgcolor)
    const fontsize = useSelector(state => state.font.size)

    const dispatch = useDispatch()

    const inputRef = useRef(null)

    const handleChange = () => {

        let prefsize = inputRef.current.value
        console.log(prefsize)
        dispatch({ type: 'CHANGE_FONT_SIZE', payload: { size: prefsize } })
    }
    return (
        <div style={{ backgroundColor: bgcolor, fontSize: fontsize }}>

            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde nulla dignissimos fuga rem, cupiditate quisquam tenetur magni dicta enim modi accusamus ab suscipit eius quia aliquid voluptatum delectus officiis necessitatibus?
            <label>Change Font</label>
            <input type="text" name="prefsize" id="" ref={inputRef} />
            <button type="button" onClick={handleChange}>Change Font</button>
        </div>
    )
}

export default ComponentTwo