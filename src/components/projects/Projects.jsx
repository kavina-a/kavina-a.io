import React, { useRef } from 'react';
import './projects.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    name: "Earthify",
    image: "/earthy-cover.png",
    description: "Earthify is your gateway to a greener lifestyle. Discover eco-friendly products, earn Eco Points, and unlock discounts while contributing to a sustainable future. Built with innovation and purpose, Earthify doesn’t just sell products—it empowers change. ",
    link: 'https://github.com/kavina-a/FixItNow.git',
  },
  {
    id: 2,
    name: "Petfinity",
    image: "/Petfinity.png",
    description: "Petfinity is not just another pet app—it’s your ultimate companion for everything pet-related. Built with cutting-edge technology, this all-in-one platform connects pet owners, trainers, and boarders like never before. From seamless appointment bookings to real-time notifications, lost-and-found services, and detailed pet profiles, Petfinity makes caring for your furry friends effortless and stress-free. The future of pet parenting starts here.",
    link: 'https://github.com/kavina-a/FixItNow.git',
  },
  {
    id: 3,
    name: "Flutter Mobile App",
    image: "/fixitnow.png",
    description: "Need help with home repairs, landscaping, or moving? Meet FixItNow – your go-to app for finding and booking trusted manual labor professionals in just a few taps. With FixItNow, you can browse profiles, read reviews, and book reliable services quickly, all from a user-friendly platform designed to simplify your life.",
    link: 'https://github.com/kavina-a/FixItNow.git',
  },
  {
    id: 4,
    name: "Inventory Management System",
    image: "/inventory.png",
    description: "A comprehensive Stock Management System using C# and the MySQL to address specific requirements in stock management. This project involved to develop two main functionalities: adding new stock items and updating stock quantities.",
    link: 'https://github.com/kavina-a/Stock-Management-System.git',
  },
  {
    id: 5,
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
