import React from 'react'
import { Link } from 'react-scroll'

export default function Navbar(){
  return (
    <header className='sticky top-0 z-30 bg-transparent backdrop-blur-md py-4'>
      <div className='max-w-4xl mx-auto flex items-center justify-between px-6'>
        <div className='text-xl font-semibold'>Aldrhym Niño</div>
        <nav className='hidden md:flex gap-6 items-center'>
          <Link to='home' smooth className='cursor-pointer'>Inicio</Link>
          <Link to='about' smooth className='cursor-pointer'>Sobre mí</Link>
          <Link to='skills' smooth className='cursor-pointer'>Skills</Link>
          <Link to='soft-skills' smooth className='cursor-pointer'>SoftSkills</Link>
          <Link to='projects' smooth className='cursor-pointer'>Proyectos</Link>
          <Link to='contact' smooth className='cursor-pointer'>Contacto</Link>
        </nav>
      </div>
    </header>
  )
}
