// src/Pages/About.js
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import georges from "../assets/georges.png";
import cv from "../assets/Georges_Linel_CV.pdf";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";



const About = () => {
  return (
    <div className="flex flex-col">
      <motion.div className="flex flex-col justify-between items-start mb-16 gap-2"
        variants={{
          hidden: { opacity: 0, },
          visible: { opacity: 1},
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <Link to="/" className="text-primary font-medium hover:scale-110 transition-transform">
          back
        </Link>
        <h1 className="font-bold text-3xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent w-fit pb-1 md:pb-2">
          About Me
        </h1>
      </motion.div>
      <motion.div
        className="flex flex-col gap-6 text-text text-sm md:text-base"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <img src={georges} alt="Georges Linel" className="w-2/4 md:w-1/3" />
        <p className="font-medium">
          Hi! I'm Georges, a Computer Science MSc graduate living in London.
        </p>
        <p>
          I grew up in Paris and have been living in London for the past 5
          years. I pursued an interdisciplinary Bachelor's degree, which
          introduced me to Java and Python. I quickly realised that I was
          passionate and had aptitudes, and deepened my knowledge with online
          courses. In 2023, I decided to dedicate myself and began my Computer
          Science MSc at UCL.
        </p>
        <p>
          I've worked as a Senior Digital Campaigns Executive in a healthcare
          communications agency. I adapted to the fast-paced environment and
          learned how to balance delivering high-quality projects with meeting
          ever-changing deadlines. I built relationships with clients from
          Europe and Asia, advancing my problem-solving skills and
          professionalism.
        </p>
        <p>
          I am most proficient with Python and Javascript/Typescript. I enjoy
          both frontend and backend development, and have used React alongside
          various tools for projects.
        </p>
        <a
          className="font-bold w-fit text-primary hover:scale-110 transition-transform"
          href={cv}
          download="Georges_Linel_CV.pdf"
        >
          Download my CV
        </a>
        <div className="flex items-center gap-4 text-primary text-xl md:text-3xl">
          <a 
            href="https://www.linkedin.com/in/georgeslinel/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform cursor-pointer"
          ><FaLinkedin />
          </a>
          <a
            href="https://github.com/georgeslnl"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform cursor-pointer"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
