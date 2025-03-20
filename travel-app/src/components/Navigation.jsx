import React, { useContext } from 'react'
import Link from '../ui/Link'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../utils/MyContext'
const Navigation = ({ linkList }) => {

    const ctx = useContext(UserContext)
    const createLink = (value, idx) => {
        return <NavLink key={idx} to={value.linkRef}>{value.linkText}</NavLink>
    }
    return (
        <div>
            {
                //  linkList.map((value,idx)=>{
                //     <Link linkRef={value.linkRef} linkText={value.linkText}></Link>
                //  })

                linkList.map(createLink)
            }
            <p>{ctx.user}</p>
        </div>
    )
}

export default Navigation