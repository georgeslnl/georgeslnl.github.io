import React from "react";
import georgesImage from "../assets/georges.jpeg";
import Projects from "../Components/Projects";
import LearnMore from "../Components/LearnMoreButton";
import ExploreProjectsButton from "../Components/ExploreProjectsButton";
import { IoMail } from "react-icons/io5";
import artventure from "../assets/ARTventure.jpeg";

const Home = () => {
  return (
    <div className="">
        
          <h1 className="font-bold text-5xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent w-fit pb-1 md:pb-2 mb-16">
            Georges Linel
          </h1>
          {/* <img
            src={georgesImage}
            alt="Georges Linel"
            className="rounded-full h-40 w-40"
          /> */}

        {/* <p className="mt-8 mb-4 text-text text-base md:text-lg text-justify"> */}
          {/* TO-DO: re-write copy */}
          {/* Hi! I'm Georges, a Computer Science MSc graduate living in London. I
          have a passion for technology and innovation. My expertise spans
          modern web technologies like React and Next.js, as well as Python.
          I've tackled diverse projects, and am always eager to learn more. */}
        {/* </p> */}

        <Projects />

    </div>
  );
};

export default Home;
