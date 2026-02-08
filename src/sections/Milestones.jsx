import {motion } from "framer-motion";
import { QuoteDownIcon } from "hugeicons-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";


 const milestones = [
    {
    year: "24th February 2025 - 7th March 2025",
    title: "Training of 30 hours",
    description: "Successfully completed training on Full Stack Web Development from Ardent Computech Pvt Ltd.",
    certificate: "/m1.pdf"
  },
  {
    year: "2025",
    title: "InnoFusion 2.0 Hackathon",
    description: "Participation in the Hackathon organized by University of Engineering and Management, Kolkata",
    certificate: "/m2.pdf"
  },
  {
    year: "12th August 2024 - 23th August 2024",
    title: "Training of 30 hours",
    description: "Successfully completed training on Internet of Things(IOT) from Ardent Computech Pvt Ltd.",
    certificate: "/m3.pdf"
  },
  {
    year: "11th March 2024 - 16th March 2024",
    title: "Training of 30 hours",
    description: "Successfully completed training on Python with Django(Weather Application) from Ardent Computech Pvt Ltd.",
    certificate: "/m4.pdf"
  },
  {
    year: "18th March, 2025",
    title: "Solutions Architecture Job Simulation",
    description: "Cetificate of Completion by Forage",
    certificate: "/m5.pdf"
  },
  {
    year: "23th December, 2022",
    title: "Participation on Seminar",
    description: "Organized ny Logiczap Nextgen on Emerging Technologies And How to Spare your Career in then",
    certificate: "/m6.pdf"
  },

];



export const Milestones = () => {

  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % milestones.length)
  }

  const previous = () => {
    setActiveIdx((prev) => (prev - 1 + milestones.length) % milestones.length)
  }

    return (
      <section id="milestones"  className="min-h-screen w-full flex flex-col items-center justify-center relative bg-[#030215] text-white overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-linear-to-r from-[#16123d] via-[#03c695] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-linear-to-r from-[#3b3761] via-[#0ad9a5] to-[#18ebe4] opacity-20 blur-[120px] animate-pulse delay-500"></div>
        </div>
        
        <motion.h2 className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#00bf8f] via-[#1cd8d2] to-[#302b63] z-10" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          My Achivements
        </motion.h2>

        <p className="text-muted-foreground mt-3 max-w-2xl text-center animate-fade-in animation-delay-200">
          A showcase of the milestones, awards, and recognitions that highlight my growth and dedication throughout my journey.
        </p>

        {/*  Contant */}
        <div className="max-w-4xl mx-auto mt-11">
          <div className="relative">

            {/* Main Content */}
            <motion.div
              className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >

              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <QuoteDownIcon className="w-6 h-6 text-primary-foreground"/> 
              </div>

              <motion.h3
                className="text-lg sm:text-xl font-semibold text-[#1ca0d8]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {milestones[activeIdx].year}
              </motion.h3>


              <blockquote className="font-semibold text-xl md:text-2xl leading-relaxed mb-2 pt-2">
                "{milestones[activeIdx].title}"
              </blockquote>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-300 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {milestones[activeIdx].description}
              </motion.p>


              <motion.a
                href={milestones[activeIdx].certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2  rounded-lg bg-linear-to-r from-[#007fbf] to-[#1cd8d2] text-white font-semibold shadow-lg hover:scale-95 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                See Achivement
              </motion.a>

            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">

              <button onClick={previous} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {milestones.map((_, idx) => (
                <button 
                  onClick={() => setActiveIdx(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIdx 
                      ? "w-8 bg-primary" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`
                  }
                />
                ))}
              </div>

              <button onClick={next} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    )
} 