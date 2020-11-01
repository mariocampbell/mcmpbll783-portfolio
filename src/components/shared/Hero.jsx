import React from 'react'
import LogoMC from '../atoms/LogoMC.jsx'

import AvatarMC from '../../assets/images/avatar-mcmpbll.png'

const Hero = () => {
    return(
        <header className='bg-primary-900'>
            <div className="container mx-auto h-screen md:h-auto flex justify-center items-center -mt-12 md:mt-0 md:pt-32 md:pb-16 md:justify-between ">
                <LogoMC />
                <div className='hidden md:block rounded-full w-32 overflow-hidden border-2 border-white'>
                    <img className='w-full' src={ AvatarMC } alt="Mario Campbell Avatar"/>
                </div>
            </div>
            <p className='text-gray-600 text-center pb-2 -mt-16 md:hidden animate-bounce'><i className="fal fa-angle-down fa-3x"></i></p>
        </header>
    )
}

export default Hero