import React from 'react'
import '../rootlayout.css'
const Image = ({imageRef,altText}) => {
    return (
        <img src={imageRef} alt={altText} className='logo'></img>
    )
}

export default Image