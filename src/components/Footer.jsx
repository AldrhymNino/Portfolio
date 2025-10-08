import React from 'react'

export default function Footer(){
  return (
    <footer className='mt-12 py-6 border-t border-slate-800'>
      <div className='max-w-4xl mx-auto px-6 text-center text-sm text-slate-400'>
        © {new Date().getFullYear()} Aldrin Niño · Front‑End Developer
      </div>
    </footer>
  )
}
