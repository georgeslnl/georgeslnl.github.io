import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useSound from 'use-sound';
import tap from '../assets/tap.mp3';

const PageHeader = ({ title, backLink = "/" }) => {
  const [play] = useSound(tap);
  return (
    <motion.div 
      className="flex flex-col justify-between items-start mb-16 gap-2"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.5 }}
      
    >
      <Link 
        to={backLink} 
        className="text-primary font-medium hover:scale-110 transition-transform"
        onClick={play}
      >
        {backLink === "/about-me" ? "about me" : "back"}
      </Link>
      <h1 className="font-bold text-3xl  lg:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent w-fit pb-1  lg:pb-2">
        {title}
      </h1>
    </motion.div>
  );
};

export default PageHeader;