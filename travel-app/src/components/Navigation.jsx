import React from 'react'
import Link from '../ui/Link'
import { NavLink } from 'react-router-dom'

const Navigation = ({ linkList }) => {
    const createLink = (value, idx) => {
        return <NavLink key={idx} to={value.linkRef}>{value.linkText}</NavLink>   }
    return (
        <div>
            {
                //  linkList.map((value,idx)=>{
                //     <Link linkRef={value.linkRef} linkText={value.linkText}></Link>
                //  })

                linkList.map(createLink)
            }
        </div>
    )
}

export default Navigation