import React from 'react'
import TableHead from '../ui/TableHead'
import TableBody from '../ui/TableBody'
import { useData } from '../customhooks/useData'
const ProfilePage = () => {

    const { data } = useData('http://localhost:3000/profiles/?id=301')
    return (

        <div>
            {/* <div>{profileData.tagName}</div>  */}
            <p>{data[0].tagName}</p>
        </div>
    )
}

export default ProfilePage