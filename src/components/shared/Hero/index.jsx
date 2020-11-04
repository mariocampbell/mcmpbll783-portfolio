import React from 'react'

import LogoMarioCampbell from '../LogoMarioCampbell'
import { avatarMarioCampbell } from '../../../images'

const Hero = () => {
    return(
        <header className='bg-primary-900'>
            <div className="container mx-auto h-screen md:h-auto flex justify-center items-center -mt-12 md:mt-0 md:pt-32 md:pb-16 md:justify-between ">
                <LogoMarioCampbell />
                <div className='hidden md:block rounded-full w-32 overflow-hidden border-2 border-white'>
                    <img className='w-full' src={ avatarMarioCampbell } alt="Mario Campbell Avatar"/>
                </div>
            </div>
            <p className='text-gray-600 text-center pb-2 -mt-16 md:hidden animate-bounce'><i className="fal fa-angle-down fa-3x"></i></p>
        </header>
    )
}

export default Hero
