import React from 'react'
import Image from '../ui/Image'
import TopHeading from '../ui/TopHeading'
import logo from '../assets/images/logo.png'
import avatar from '../assets/images/avatar.jpeg'
const Header = ({ user }) => {
    return (
        <>
            <div style={{ marginLeft: '0px' }}>
                            <Image imageRef={logo} altText={'Logo'}></Image>
            </div>
            <div>
                            <TopHeading title={'Jay Travels'} user={user}></TopHeading>
            </div>

            {/* <div>            <Image imageRef={avatar} altText={'Avatar'}></Image>
            </div> */}
            
        </>
    )
}

export default Header