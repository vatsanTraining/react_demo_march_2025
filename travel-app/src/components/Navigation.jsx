import React from 'react'
import Link from '../ui/Link'

const Navigation = ({ linkList }) => {
    const createLink = (value, idx) => {
        return <Link key ={idx} linkRef={value.linkRef} linkText={value.linkText}></Link>
    }
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