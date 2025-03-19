import React from 'react'

const TopHeading = ({ title, user }) => {
    return (
        <>
            <h1>{title}</h1>
            {/* <p>Logged in User:{user.role} {user.userName}</p> */}
            <button onClick={()=> {sessionStorage.removeItem('currentUser')}}>Logout</button>
        </>
    )
}

export default TopHeading