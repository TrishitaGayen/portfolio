import { useTransform, motion, useScroll } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const educations = [
  {
    role: "High School(10th)",
    company: "Panchasayar Siksha Niketan(H.S.)",
    duration: "2008-2020",
    description: "86% | WBBSE",
    certificateUrl: "/10th Marksheet.pdf"
  },
  {
    role: "Senior School(12th)",
    company: "Jadavpur Sammilita Balika Vidyalaya",
    duration: "2020-2022",
    description: "71.6% | WBCHSE",
    certificateUrl: "/12th Marksheet.pdf"
  },
  {
    role: "B.Tech(CSE)",
    company: "Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex",
    duration: "2022-2026",
    description: "Overall GPA: 7.5/10",
    certificateUrl: "/btech.png"
  },
];

function EducationItem({edu, idx, start, end, scrollYProgress, layout}) {
  const scale = useTransform(scrollYProgress, [start, end], [0, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  const y = useTransform(scrollYProgress, [start, end], [idx%2===0 ? 30 : -30 , 0])
  const x = useTransform(scrollYProgress, [start, end], [-24, 0])

  if(layout === "desktop") {
    return(
      <div className="relative flex flex-1 justify-center items-center min-w-0">

        <motion.div className="z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]" style={{scale, opacity}}></motion.div>
        <motion.div className={`absolute ${idx%2 === 0 ? "-top-8" : "-bottom-8"} w-[3px] bg-white/40`} style={{height:40, opacity}}></motion.div>
 
        <motion.article className={`absolute ${idx%2 === 0 ? "bottom-12" : "top-12"} bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-7 w-[320px] shadow-lg`} 
          style={{opacity, y, maxWidth:"90vw"}} transition={{duration:0.4, delay:idx*0.15}}>
            <h3 className="text-xl font-semibold">
              {edu.role}
            </h3>
            <p className="text-md text-gray-400 mb-3">
              {edu.company} | {edu.duration}
            </p>
            <p className="text-md text-gray-300 wrap-break-word">
              {edu.description}
            </p>
            {edu.certificateUrl && (
              <a
                href={edu.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg shadow-md transition"
              >
                View Certificate
              </a>
            )}
        </motion.article>        
      </div>
    )
  }

  return (
    <div className="relative flex items-start">
      <motion.div className="absolute -left[14px] top-3 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]" style={{scale, opacity}}></motion.div>

      <motion.article className="bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-5 w-[90vw] max-w-sm ml-6 shadow-lg" 
        style={{opacity, x}}
        transition={{duration:0.4, delay:idx*0.15}}>
          <h3 className="text-lg font-semibold wrap-break-word">
            {edu.role}
          </h3>
          <p className="text-sm text-gray-400 mb-2 wrap-break-word">
            {edu.company} | {edu.duration}
          </p>
          <p className="text-sm text-gray-300 wrap-break-word">
            {edu.description}
          </p>
          {edu.certificateUrl && (
            <a
              href={edu.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-md shadow-md transition"
            >
              View Certificate
            </a>
          )}
      </motion.article>
    </div>
  )
};

export default function Education(){

const sceneRef = useRef(null);
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth < 768);
  checkMobile();
  window.addEventListener("resize", checkMobile);
  return () => window.removeEventListener("resize", checkMobile);
}, []);

const SCENE_HEIGHT_VH = isMobile ? 160*educations.length : 120*educations.length;

const {scrollYProgress} = useScroll({
  target: sceneRef,
  offset: ["start start", "end end"]
});

const thresholds = useMemo(() => educations.map((_, i) => (i+1)/educations.length ), []);

const lineSize = useTransform(scrollYProgress, (v) => `${v*100}%`)

  return (
    <section id="education" className="relative bg-black text-white">
      <div ref={sceneRef} className="relative" style={{height: `${SCENE_HEIGHT_VH}vh`, minHeight: "120vh"}}>
        <div className="sticky top-0 h-screen flex flex-col">
          <h2 className="text-4xl sm:text-5xl font-semibold mt-5 text-center ">
            Education
          </h2>
          <div className="flex flex-1 items-center justify-center px-6 pb-10">
            {!isMobile && (
              <div className="relative w-full max-w-7xl">
                <div className="relative h-1.5 bg-white/15 rounded">
                  <motion.div className="absolute left-0 top-0 h-1.5 bg-white rounded origin-left" style={{width: lineSize}}></motion.div>
                </div>
                <div className="relative flex justify-between mt-0">
                  {educations.map((edu, idx) => (
                    <EducationItem key={idx} edu={edu} idx={idx} start={idx === 0 ? 0 : thresholds[idx-1]} end={thresholds[idx]}
                      scrollYProgress={scrollYProgress} layout="desktop"/>
                  ))}
                </div>
              </div>
            )}

            {isMobile && (
              <div className="relative w-full max-w-md">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-white/15 rounded">
                  <motion.div className="absolute top-0 left-0 w-1.5 bg-white rounded origin-top" style={{height: lineSize}}></motion.div>
                </div>
                <div className="relative flex flex-col gap-10 ml-10 mt-6 pb-28">
                  {educations.map((edu, idx) => (
                    <EducationItem key={idx} edu={edu} idx={idx} start={idx === 0 ? 0 : thresholds[idx-1]} end={thresholds[idx]}
                      scrollYProgress={scrollYProgress} layout="mobile"/>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
