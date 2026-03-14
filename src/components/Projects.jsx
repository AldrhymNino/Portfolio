import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id:1,
    title:'StackPro - Task manager',
    desc:'Es una app de productividad: gestionar proyectos, objetivos. De forma dínamica.',
    tech:'React, localStorage',
    repo:'https://github.com/AldrhymNino/StackPro',
    image: './src/assets/stackpro.png',
    demo:'https://stack-pro.vercel.app/'
  },{
    id:2,
    title:'Tablero Producion',
    desc:'Panel de control de producción con visualización del progreso por etapas, filtros dinámicos y una interfaz moderna diseñada para monitoreo de proyectos industriales.',
    tech:'React',
    repo:'https://github.com/AldrhymNino/panel',
    image: './src/assets/tablero.png',
    demo:'https://aldrhymnino.github.io/panel/'
  },
  {
    id:3,
    title:'Form - Practice',
    desc:'Sistema de formularios escalable construido con React y TypeScript, usando hooks personalizados, componentes reutilizables y validación en tiempo real con una UI moderna.',
    tech:'React',
    repo: 'https://github.com/AldrhymNino/Form',
    image: './src/assets/form.png',
    demo:'#'
  }
]

export default function Projects({ zoom }) {
  return (
    <section id='projects' className='py-16'>
      <h2 className='text-2xl font-semibold'>Proyectos</h2>
      <div className='mt-6 grid md:grid-cols-2 gap-6'>
        {projects.map(p => <ProjectCard key={p.id} project={p} zoom={zoom} />)}
      </div>
    </section>
  )
}
