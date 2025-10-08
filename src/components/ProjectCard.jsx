import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({project}){
  return (
    <motion.article initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className='p-4 border border-slate-800 rounded-lg bg-[#071029]'>
      <h3 className='font-semibold'>{project.title}</h3>
      <p className='mt-2 text-sm text-slate-300'>{project.desc}</p>
      <div className='mt-3 flex items-center justify-between'>
        <span className='text-xs text-slate-400'>{project.tech}</span>
        <div className='flex gap-3'>
          <a href={project.repo} title='Repo'><FiGithub /></a>
          <a href={project.demo} title='Demo'><FiExternalLink /></a>
        </div>
      </div>
    </motion.article>
  )
}
