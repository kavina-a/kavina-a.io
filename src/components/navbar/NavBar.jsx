import './navbar.scss';
import {motion} from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                
                <motion.span
                //animation 
                initial={{ opacity: 0 , scale: 0.5}}
                animate={{ opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
                >
                    portfolio.
                </motion.span>

                <motion.div className="socialmedia"
                 initial={{ opacity: 0 , scale: 0.5}}
                 animate={{ opacity: 1, scale: 1}}
                 transition={{duration: 0.5}}
                >
                    <a href='https://www.linkedin.com/in/kavina-alahapperuma/'>
                        <FaLinkedin className='icons'/>
                    </a>

                    <a href='https://github.com/kavina-a'>
                        <FaGithub className='icons'/>
                    </a>

                    <a href='https://www.instagram.com/kavinaaa.a/'>
                    <FaInstagram className='icons'/>
                    </a>
                    

                </motion.div>
            </div>
        </div>
    );
}

export default Navbar;
