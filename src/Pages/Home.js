import React from "react";
import Projects from "./Projects";
import { Link } from "react-router-dom";

const Home = () => {
  // TO-DO: Add page transitions
  return (
    <div>
      <div className='flex flex-col justify-between items-start mb-16 gap-2'> 
        <Link to="/about-me" className="text-primary font-medium">about me</Link>
          <h1 className="font-bold text-3xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent w-fit pb-1 md:pb-2">
            Georges
          </h1>
          </div>
        <Projects />

    </div>
  );
};

export default Home;
