import React from "react";
import BackgroundCard from "../Components/BackgroundCard";
import EducationCard from "../Components/EducationCard";
import CareerCard from "../Components/CareerCard";
import SkillsCard from "../Components/SkillsCard";
import DownloadCVButton from "../Components/DownloadCVButton";

const About = () => {
  return (    
    <div className="w-screen px-8 flex flex-col">
      <h1 className="font-extrabold text-5xl md:text-8xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent w-fit pb-1 md:pb-2 my-2">
        About Me
      </h1>
      <div className="grid grid-flow-row gap-10 grid-cols-1 lg:grid-cols-4 lg:grid-rows-4 lg:gap-2 p-2">
        <BackgroundCard />
        <EducationCard />
        <CareerCard />
        <SkillsCard />
      </div>
      <div className="flex flex-col items-center mb-8">
        <DownloadCVButton fileName="Georges_Linel_CV.pdf" />
      </div>
    </div>
  );
};

export default About;
