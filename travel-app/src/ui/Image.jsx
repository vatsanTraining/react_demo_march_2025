import React from 'react'
const Image = ({imageRef,altText}) => {
    return (
        <img src={imageRef} alt={altText}></img>
    )
}

export default Image