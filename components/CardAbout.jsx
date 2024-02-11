import React from 'react'

export default function CardAbout() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-2xl mb-5 font-bold'>Acerca de mí</h1>
        </div>
        <div>
            <p className='text-xl px-5 sm:px-20'>Descripción</p>
        </div>
    </div>
  )
}
