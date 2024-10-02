import React from "react";
import georgesImage from "../assets/georges.jpeg";
import LearnMore from "../Components/LearnMoreButton";
import ExploreProjectsButton from "../Components/ExploreProjectsButton";
import { IoMail } from "react-icons/io5";



const Home = () => {
  return (
    <div className="w-screen my-24 px-6">
      <div className="max-w-6xl m-auto">
        <div className="md:flex md:flex-row md:justify-between md:items-center flex flex-col-reverse gap-2 justify-center items-center ">
          <h1 className="font-extrabold text-5xl md:text-8xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent w-fit pb-1 md:pb-2">
            Georges Linel
          </h1>
          <img
            src={georgesImage}
            alt="Georges Linel"
            className="rounded-full h-40 w-40"
          />
        </div>
        <p className="mt-8 mb-4 text-base md:text-lg text-text-950 text-justify">
        Hi! I'm Georges, a Computer Science MSc graduate living in London. I have a passion for technology and innovation. 
        My expertise spans modern web technologies like React and Next.js, as well as Python. 
        I've tackled diverse projects, and am always eager to learn more.
        Explore my portfolio to see how I bridge the gap between code and creative solutions.
        </p>
        <div className="flex flex-row gap-2 items-center mb-8 ">
        <IoMail size={20} className="text-text-900"/> 
        <p className="text-base md:text-lg text-text-950 font-semibold">georges.lnl01@gmail.com</p>
        </div>
        <div className="flex flex-row justify-around lg:flex lg:flex-col lg:gap-2">
        <ExploreProjectsButton />
        <LearnMore />
        </div>
      </div>
    </div>
  );
};

export default Home;
