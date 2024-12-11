// src/Pages/About.js
import React from "react";
import { Link } from "react-router-dom";
import georges from "../assets/georges2.jpg";

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start mb-16 gap-2">
        <Link to="/" className="text-primary font-medium">
          back
        </Link>
        <h1 className="font-bold text-3xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent w-fit pb-1 md:pb-2">
          About Me
        </h1>
      </div>
      <div className="flex flex-col gap-6 text-text text-sm md:text-base">
        <img
          src={georges}
          alt="Georges Linel"
          className="w-2/4 md:w-1/3"
        />
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
          I am most proficient with Python and Javascript/Typescript. I enjoy both
          frontend and backend development, and have used React alongside various
          tools for projects.
        </p>
      </div>
    </div>
  );
};

export default About;
