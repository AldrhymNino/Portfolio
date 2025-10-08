import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id:1,
    title:'StackPro - Task manager',
    desc:'Es una app de productividad: gestionar proyectos, objetivos. De forma dínamica.',
    tech:'React, localStorage',
    repo:'https://github.com/AldrhymNino/StackPro',
    demo:'#'
  },{
    id:2,
    title:'NoteTask',
    desc:'App TO-DO, donde puedes crear tareas que a su vez tiene subtareas, con filtros por tipo de tareas y temas para la app.',
    tech:'React, LocalStorage',
    repo:'https://github.com/AldrhymNino/noteTask',
    demo:'#'
  }
]

export default function Projects(){
  return (
    <section id='projects' className='py-16'>
      <h2 className='text-2xl font-semibold'>Proyectos</h2>
      <div className='mt-6 grid md:grid-cols-2 gap-6'>
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
