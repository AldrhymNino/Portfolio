import React, { useState } from 'react'

// Componentes
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import SoftSkills from './components/SoftSkills'
import { ZoomImg } from './components/ZoomImg'

export default function App(){

  const [zoomed, setZoomed] = useState({
    src: '',
    zoomed: false
  });
  
  const onCloseZoom = () => setZoomed(false);
  const onZoom = (src) => setZoomed({src, zoomed:true})

  return (
    <div className='min-h-screen bg-[#0f1724] text-slate-100 antialiased'>
      <Navbar />
      <main className='max-w-4xl mx-auto px-6'>
        <Hero />
        <About />
        <Skills />
        <SoftSkills />
        <Projects zoom={onZoom} />
        <Contact />
        {zoomed.zoomed && <ZoomImg src={zoomed.src} onClose={onCloseZoom} />}
      </main>
      <Footer />
    </div>
  )
}
