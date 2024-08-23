import React from 'react';
import { SiMysql } from "react-icons/si"; 
import { CgFigma } from "react-icons/cg"; 
import { SiFlutter } from "react-icons/si"; 
import { FaLaravel } from "react-icons/fa"; 
import { DiSass } from "react-icons/di"; 
import { DiReact } from "react-icons/di"; 
import { SiPhp } from "react-icons/si"; 
import { IoLogoPython } from "react-icons/io"; 
import { DiDart } from "react-icons/di"; 
import { FaJava } from "react-icons/fa"; 
import { SiCsharp } from "react-icons/si"; 
import { IoLogoJavascript } from "react-icons/io"; 
import { DiCss3 } from "react-icons/di"; 
import { AiFillHtml5 } from "react-icons/ai"; 
import './knowledge.scss';
import { motion } from "framer-motion";


const iconVariants = (duration) =>({
  initial : { y: -10},
  animate : {
    y: [10 , -10,],
    transition : {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Knowledge = () => {
  return (
    <div className="list">
        <h1>Languages</h1>
        
        <div className="languagesList">

          <motion.div variants={iconVariants(3)} initial='initial' animate='animate'
          className="item html5">
            <AiFillHtml5 />
            <span>HTML5</span>
          </motion.div>

          <motion.div variants={iconVariants(2)} initial='initial' animate='animate' className="item css3">
            <DiCss3 />
            <span>CSS3</span>
          </motion.div>

          <motion.div variants={iconVariants(2.8)} initial='initial' animate='animate' className="item javascript">
            <IoLogoJavascript />
            <span>JavaScript</span>
          </motion.div>

          <motion.div variants={iconVariants(2.3)} initial='initial' animate='animate' className="item csharp">
            <SiCsharp />
            <span>C#</span>
          </motion.div>

          <motion.div variants={iconVariants(3.2)} initial='initial' animate='animate' className="item java">
            <FaJava />
            <span>Java</span>
          </motion.div>

          <motion.div variants={iconVariants(2.7)} initial='initial' animate='animate' className="item dart">
            <DiDart />
            <span>Dart</span>
          </motion.div>

          <motion.div variants={iconVariants(2.5)} initial='initial' animate='animate' className="item python">
            <IoLogoPython />
            <span>Python</span>
          </motion.div>

          <motion.div variants={iconVariants(2.5)} initial='initial' animate='animate' className="item php">
            <SiPhp />
            <span>PHP</span>
          </motion.div>

        </div>

        <h1>Frameworks & Extras </h1>

        <div className="frameworkList">

          <motion.div variants={iconVariants(3.2)} initial='initial' animate='animate' className="item react">
            <DiReact />
            <span>React</span>
          </motion.div>

          <motion.div variants={iconVariants(2.5)} initial='initial' animate='animate' className="item sass">
            <DiSass />
            <span>Sass</span>
          </motion.div>

          <motion.div variants={iconVariants(2.8)} initial='initial' animate='animate' className="item laravel">
            <FaLaravel />
            <span>Laravel</span>
          </motion.div>

          <motion.div variants={iconVariants(2.7)} initial='initial' animate='animate' className="item flutter">
            <SiFlutter />
            <span>Flutter</span>
          </motion.div>

          <motion.div variants={iconVariants(2.5)} initial='initial' animate='animate' className="item figma">
            <CgFigma />
            <span>Figma</span>
          </motion.div>

          <motion.div variants={iconVariants(3.2)} initial='initial' animate='animate' className="item mysql">
            <SiMysql />
            <span>MySQL</span>
          </motion.div>

        </div>
    </div>
  )
}

export default Knowledge;
