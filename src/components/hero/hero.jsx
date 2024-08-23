import './hero.scss';
import { motion } from "framer-motion";


//animation for the text
const textVariants = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition:{ 
            duration: 1,
            staggerChildren: 0.1,
        },
    },

    scrollButton : {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

//animation for the sliding text
const slidingTextVariants = {
    initial:{
        x: 0,
    },
    animate: {
        x: "-220%",
        transition:{ 
            duration: 40,
            repeat: Infinity,
            repeatType: "mirror"
        },
    },
}



const Hero = () => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

      
  return (
    <div className="hero1">
        <div className='wrapper'>
            
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>KAVINA ALAHAPPERUMA</motion.h2>
                <motion.h1 variants={textVariants}>Your Friendly Neighborhood <motion.br></motion.br>DATA NWEEB</motion.h1>
                
                <motion.div className="text">
                    <motion.p>Hey! I'm Kavina, a Second Year Undergad majoring at Software Engineering at APIIT in Sri Lanka.</motion.p>
                  <br></br>  <motion.p> I'm deeply passionate about developing applications that enhance and simplify human life.</motion.p>
                    <motion.p>From coding efficient algorithms to designing user-friendly interfaces, I'm dedicated to mastering the craft of software development.</motion.p>
                </motion.div>

                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants} onClick={() => scrollToSection('Projects')}>See my Latest Projects</motion.button>
                    <motion.button className= "filledButton" variants={textVariants}>Contact Me</motion.button>
                </motion.div>

                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
            
            </div>
            <motion.div className="slidingTextContainer" variants={slidingTextVariants} initial="initial" animate="animate">
                Developer Intern MathTutor AI Enthusiast Engineer 
            </motion.div>

            <motion.div className="image" >
                <img src="/kavina.png" alt="" />
            </motion.div>

            </div>
              );
}

export default Hero;