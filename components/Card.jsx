"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from './utils/motionTransitions';
import { MdDownload } from "react-icons/md";
import { Button } from '@nextui-org/react';


const Card = () => {
  return (
    <motion.div variants={fadeIn("left", 0.5)} initial="hidden" animate="show" exit="hiddenn"  className='flex flex-col px-20 sm:px-5'>
        <div className='mb-5'> 
            <h2 className='text-2xl font-bold'>Hola soy Camila Espinoza Jaques</h2>
        </div>
        <div>
            <p className='text-lg'> Desarrolladora Full Stack, una persona proactiva, autónoma, me considero curiosa en el aprendizaje y soy muy sociable</p>
        </div>
        <div className='mt-4'>
            <Button color= "secondary" className='py-6 px-5'
            radius="lg"
            endContent={<MdDownload />}> Curriculum</Button>
        </div>
    </motion.div>
    );
};

export default Card