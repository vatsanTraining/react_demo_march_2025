import React from 'react'
import Image from '../ui/Image'
import TopHeading from '../ui/TopHeading'
import logo from '../assets/images/logo.png'
import avatar from '../assets/images/avatar.jpeg'
const Header = ({user}) => {
    return (
        <div>
            <Image imageRef={logo} altText={'Logo'}></Image>
            <Image imageRef={avatar} altText={'Avatar'}></Image>
            <TopHeading title={'Jay Travels'}  user={user}></TopHeading>
        </div>
    )
}

export default Header