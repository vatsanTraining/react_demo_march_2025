import React from 'react'

const TopHeading = ({ title, user }) => {
    return (
        <>
            <h1>{title}</h1>
            <p>Logged in User:{user.role} {user.userName}</p>
        </>
    )
}

export default TopHeading