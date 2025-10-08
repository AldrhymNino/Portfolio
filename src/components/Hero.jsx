import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiDownload } from 'react-icons/fi'
import CV from '/Aldrhym_CV.pdf'

export default function Hero(){
  return (
    <section id='home' className='pt-24 pb-16'>
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
        <h1 className='text-4xl md:text-6xl font-bold'>Hola, soy Aldrhym.<span className='text-brand'> Front‑End</span></h1>
        <p className='mt-4 text-slate-300 max-w-xl'>Desarrollador front-end especializado en React. Construyo interfaces limpias, accesibles y con buena experiencia de usuario.</p>
        <div className='mt-6 flex gap-4'>
          <Link to='projects' smooth className='cursor-pointer inline-block px-5 py-2 border rounded-lg'>Ver proyectos</Link>
          <a href={CV} download className='flex items-center gap-2 border px-3 py-1 rounded-md'>
            <FiDownload /> CV
          </a>
        </div>
      </motion.div>
    </section>
  )
}
