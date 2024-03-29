"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './utils/motionTransitions';

export default function CardAbout() {
  return (
    <motion.div variants={fadeIn("up", 0.5)} initial="hidden" animate="show" exit="hiddenn" className='h-screen flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-2xl mb-5 font-bold'>Acerca de mí</h1>
        </div>
        <div>
            <p className='text-xl px-5 sm:px-20'>Me destaco por contar con habildades laborales para trabajar en equipo y generar un buen ambiente laboral, cuento con habilidades comunicativas y puedo hablar fácilmente frente a una masa de personas.
            Respecto a mis conocimientos manejo tecnologías como MongoDB, Express, React, Node, JavaScript, NextJS, TailwindCSS</p>
        </div>
    </motion.div>
  )
}
