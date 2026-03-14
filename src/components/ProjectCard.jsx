import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({project, zoom}) {
  
  return (
    <motion.article initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className='p-4 border border-slate-800 rounded-lg bg-[#071029]'>
      <h3 className='font-semibold'>{project.title}</h3>
      <div className='w-full h-40 mt-3 overflow-hidden rounded-md'>
        <img onClick={() => zoom(project.image)} src={project.image} alt={project.title} className='w-full h-full object-cover' />
      </div>
      <p className='mt-2 text-sm text-slate-300'>{project.desc}</p>
      <div className='mt-3 flex items-center justify-between'>
        <span className='text-xs text-slate-400'>{project.tech}</span>
        <div className='flex gap-3'>
          <a target='_blank' href={project.repo} title='Repo'><FiGithub /></a>
          <a target='_blank' href={project.demo} title='Demo'><FiExternalLink /></a>
        </div>
      </div>
    </motion.article>
  )
}
