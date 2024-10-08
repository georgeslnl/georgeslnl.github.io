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
        <DownloadCVButton fileName="Georges_Linel_CV.pdf" />
      <div className="w-full lg:w-11/12 m-auto grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-4">
        <BackgroundCard />
        <EducationCard />
        <SkillsCard />
        <CareerCard />
      </div>
    </div>
  );
};

export default About;
