import React, { useRef } from 'react';
import './projects.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    name: "Flutter Mobile App",
    image: "/fixitnow.png",
    description: "FixItNow is an innovative mobile app designed to streamline the process of finding, booking and managing manual labor workers. This project was developed with a focus on providing a seamless experience for users seeking assistance with tasks such as home repairs, landscaping, and moving. FixItNow connects users with reliable professionals in their area, allowing them to browse profiles, read reviews, compare prices, and book services through a user-friendly platform.",
    link: 'https://github.com/kavina-a/FixItNow.git',
  },
  {
    id: 2,
    name: "Inventory Management System",
    image: "/inventory.png",
    description: "A comprehensive Stock Management System using C# and the MySQL to address specific requirements in stock management. This project involved to develop two main functionalities: adding new stock items and updating stock quantities.",
    link: 'https://github.com/kavina-a/Stock-Management-System.git',
  },
  {
    id: 3,
    name: "Ceylon Turtle ORG",
    image: "/ceylonTurtleOrg.png",
    description: "During my first year at APIIT, I developed a web platform called Ceylon Turtle Org as part of an assignment. This project focuses on promoting Sri Lanka's turtle sanctuaries in Hikkaduwa, Kosgoda, and Bentota. The initial website was created using HTML and CSS, and in the second semester, I enhanced the functionality by adding a ticket booking feature using JavaScript.",
    link: 'https://github.com/kavina-a/Ceylon_TurtleORG.git',
  },
];

const Single = ({ project }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={project.image} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.link}><button>Github <FaGithub /></button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Portfolio</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {projects.map(project => (
        <Single project={project} key={project.id} />
      ))}
    </div>
  );
};

export default Projects;
