import React from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './sections/Experience'
import CustomCursor from './components/CustomCursor'
import IntroAnimation from './components/IntroAnimation'
import Education from './sections/Education'
import { Milestones } from './sections/Milestones'

export default function App() {

const [introDone, setIntroDone] = React.useState(false);

  return (
  <>
    {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
    {introDone && (
    <div className='relative gradient text-white'>
      <CustomCursor />
  
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Milestones />
      <Contact />
      <Footer />
    </div>
    )}
  </>  
  )
}


