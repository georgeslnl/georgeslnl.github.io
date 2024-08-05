import React from "react";
import BackgroundCard from "../Components/BackgroundCard";
import EducationCard from "../Components/EducationCard";
import CareerCard from "../Components/CareerCard";
import SkillsCard from "../Components/SkillsCard";
import DownloadCVButton from "../Components/DownloadCVButton";

const About = () => {
  return (
    <div className="w-screen px-6 flex flex-col items-center">
      <div className="grid grid-flow-row gap-10 grid-cols-1 lg:grid-cols-4 lg:grid-rows-4 lg:gap-2 p-10">
        <BackgroundCard />
        <EducationCard />
        <CareerCard />
        <SkillsCard />
      </div>
      <div className="flex justify-center mb-8">
        <DownloadCVButton fileName="Georges_Linel_CV.pdf" />
      </div>
    </div>
  );
};

export default About;
