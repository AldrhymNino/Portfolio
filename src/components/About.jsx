import React from 'react'
import { motion } from 'framer-motion'

import avatar from '../assets/avatar.png';

export default function About(){

  const addYears = () => {
    const currentYear = new Date().getFullYear()
    return currentYear - 2005;
  }

  return (
    <section id='about' className='py-16'>
      <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{duration:0.6}}>
        <h2 className='text-2xl font-semibold'>Sobre mí</h2>
        <div className='mt-4 md:flex gap-6 items-center'>
          <img src={avatar} alt='avatar' className='w-36 h-36 rounded-full justify-center object-cover md:block' />
          <div className='text-slate-300'>
            <p>Soy Aldrhym Niño, tengo {addYears()} años, desarrollador web autodidacta. Empecé a programar desde los 14 años por pura curiosidad, y desde entonces no he dejado de aprender. Me especializo en HTML, CSS, Javascript y React, tecnologías con las que he construido proyectos propios y resuelto retos reales. También he explorado un poco de Python y PHP, aunque solo a nivel básico. Me considero de aprendizaje rápido, y siempre estoy buscando mejorar, experimentar y encontrar soluciones creativas.</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
