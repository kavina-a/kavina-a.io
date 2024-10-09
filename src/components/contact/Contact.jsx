import React, { useRef } from 'react'
import './contact.scss'
import { animate, motion, useInView } from 'framer-motion'


const variants = {

    initial: {
        y:500,
        opacity:0
    },

    animate: {
        y:0,
        opacity:1,
        transition: {
            duration: 0.5,
            starredChildren: 0.1
        }
    }


}
const Contact = () => {
    
  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants} >

            <motion.h1 variants={variants} >Let's Connect</motion.h1>
            <p>If you have any questions, projects, or opportunities.</p>
            <p>I'd love to hear from you.</p>

            <motion.div variants={variants}  className="item">
                <h2>Gmail</h2>
                <spam>kmanthuka@gmail.com</spam>
            </motion.div>

            <motion.div className="item" variants={variants} >
                <h2>Location</h2>
                <spam>Colombo, Sri Lanka</spam>
            </motion.div>

        </motion.div>


        <div className="formContainer">

            <motion.div className="svgContainer" initial={{opacity:1}} 
            whileInView={{opacity:0}} 
            transition={{duration: 3, delay:1}}>


        <svg viewBox="0 0 64 64" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
               
                <motion.path 
                // strokeWidth={0.2}
                // fill="none"
                // initial={{pathLength: 0}}
                // animate={isInView && {pathLength: 1}}
                // transition={{duration: 3}

                d="M62.9891,2.5618c-0.0765-0.5779-0.6611-0.9805
                -1.2299-0.8401L7.4043,15.2065c-0.3535,0.0879-0.6318,
                0.3608-0.7256,0.7129     s0.0112,0.7275,0.2744,
                0.9795l13.9343,13.3583l-2.7649,17.1495c-0.1079,0.6712,
                0.4969,1.2576,1.1582,1.1445l18.0805-3.1324     l17.1832,
                9.6988c0.1523,0.0859,0.3218,0.1289,0.4917,0.1289c0.1523,
                0,0.3047-0.0347,0.4453-0.1045     c0.2969-0.1475,
                0.5015-0.4331,0.5459-0.7617l6.9639-51.5542C63.0031,
                2.7372,63.0007,2.6487,62.9891,2.5618z M9.647,16.7109     
                L56.8914,4.9902L22.2545,28.7978L9.647,16.7109z M36.9146,
                43.4663l-16.5942,2.875l2.4995-15.5054L58.8633,6.0615L36.9146,
                43.4663     z M54.2427,52.6504l-15.3231-8.6492l21.4231-36.509L54.
                2427,52.6504z"/>

                </svg>

            </motion.div>

            <motion.form initial={{opacity:0}} 
            whileInView={{opacity:1}} 
            transition={{duration: 3, delay:2.5}}>
                <input type='text' required placeholder='Name'></input>
                <input type='email' required placeholder='Email'></input>
                <input type='text' placeholder='Phone Number'></input>
                <textarea rows={8} required placeholder='Message'></textarea>
                <button>Submit</button>
            </motion.form>
        </div>
      
    </motion.div>
  )
}

export default Contact
