import React from 'react'

import { notFoundIcon } from '../../images'

const NotFound = () => {
  return(
    <div className='bg-gray-300 w-screen h-screen flex flex-col justify-center items-center'>
      <img className='w-32 fill-current' src={ notFoundIcon } alt='isotipo not found' />
      <h1 className='font-semibold text-6xl text-primary-800 text-center' >404</h1>
      <h2 className='font-light uppercase text-2xl text-primary-900' >Página no encontrada</h2>
    </div>
  )
}

export default NotFound
