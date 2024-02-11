import React from 'react'
import { MdDownload } from "react-icons/md";
import { Button } from '@nextui-org/react';


const Card = () => {
  return (
    <div className='flex flex-col px-20 sm:px-5'>
        <div className='mb-5'> 
            <h2 className='text-4x1 font-bold'>Hola soy Camila Espinoza Jaques</h2>
        </div>
        <div>
            <p className='text-lg'> Descripción</p>
        </div>
        <div className='mt-4'>
            <Button color= "secondary" className='py-6 px-5'
            radius="lg"
            endContent={<MdDownload />}> Curriculum</Button>
        </div>
    </div>
    );
};

export default Card