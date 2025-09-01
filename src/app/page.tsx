'use client'

import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import Certificates from '../components/sections/Certificates'
import LetsConnect from '../components/sections/LetsConnect'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <LetsConnect />
      <Contact />
    </div>
  )
}
