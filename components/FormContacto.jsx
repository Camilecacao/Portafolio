import { Button, Input, Textarea } from '@nextui-org/react'
import React from 'react'

const FormContacto =() => {
  return (
    <form className='flex flex-col justify-center items-center w-full gap-5 sm:sm:w-3/4'>
        <h1 className='text-2xl'>¿Te gustó mi perfil? ¡Contáctame!</h1>
        <Input type="text" label="Nombre" className='w-1/2 xl:w-1/3'/>
        <Input type="email" label="Email" className='w-1/2 xl:w-1/3'/>
        <Textarea label="Mensaje" className='w-1/2 xl:w-1/3'
    />
        <Button className='text-white mt-5 py-6 px-8 text-bas' color="secondary">Contactar</Button>
    </form>
  )
}


export default FormContacto