import React from 'react'
import TableHead from '../ui/TableHead'
import TableBody from '../ui/TableBody'
import { useData } from '../customhooks/useData'
import Image from '../ui/Image'
import { useParams } from 'react-router-dom'
const ProfilePage = () => {

    const { data } = useData('http://localhost:3000/profiles/?id=301')
    const { Name, avatar, tagName } = { data }

    const profile = useParams()

    // const imageItem = `/images/ravi.png`

    return (
        <div>

            {/* <Image imageRef={imageItem} alt={'avatar'}></Image> */}
            <p>Name {profile.id}</p>
            <p>Department {profile.dept}</p>

            <p>tagName</p>
        </div >
    )
}

export default ProfilePage