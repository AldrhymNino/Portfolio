import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import SoftSkills from './components/SoftSkills'

export default function App(){
  return (
    <div className='min-h-screen bg-[#0f1724] text-slate-100 antialiased'>
      <Navbar />
      <main className='max-w-4xl mx-auto px-6'>
        <Hero />
        <About />
        <Skills />
        <SoftSkills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
