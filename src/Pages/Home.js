import React from "react";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  // TO-DO: Add page transitions
  return (
    <div>
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
        <Link to="/about-me" className="text-primary font-medium hover:scale-110 transition-transform">about me</Link>
          <h1 className="font-bold text-3xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent w-fit pb-1 md:pb-2">
            Georges
          </h1>
          </motion.div>
        <Projects />

    </div>
  );
};

export default Home;
