// src/Pages/About.js
import React from "react";
import InfoCard from "../Components/InfoCard";
import DownloadCVButton from "../Components/DownloadCVButton";
import { IoPersonCircleSharp, IoSchool, IoBriefcase } from "react-icons/io5";
import { AiFillTool } from "react-icons/ai";

const About = () => {
  const cardData = [
    {
      title: "Background",
      icon: IoPersonCircleSharp,
      content: "I grew up in Paris and have been living in London for the past 5 years. I pursued an interdisciplinary degree for my Bachelor's, which gave me my first introduction to programming through Java and Python. I quickly realised that I was passionate and had aptitudes, and continued to deepen my knowledge with online courses alongside my usual classes. In 2023, I decided to dedicate myself fully to the discipline, and began my Computer Science MSc at UCL.",
      className: "lg:col-span-4 lg:col-start-1 lg:row-start-2 animate-fadeIn lg:animate-slow lg:animate-fadeInLeft"
    },
    {
      title: "Education",
      icon: IoSchool,
      content: <>UCL's <a className="text-text-700 font-semibold hover:underline" href="https://www.ucl.ac.uk/prospective-students/graduate/taught-degrees/computer-science-msc">Computer Science MSc</a> is an intensive one year conversion program. This degree equipped me with foundational knowledge of algorithms, data structures, computer architecture, and databases. Additionally, I had the opportunity to partake in hands-on projects, such as my final year dissertation project – an industry exchange project with Microsoft.</>,
      className: "lg:col-span-4 lg:col-start-3 lg:row-start-3 animate-fadeIn lg:animate-slow lg:animate-fadeInRight"
    },
    {
      title: "Career",
      icon: IoBriefcase,
      content: "Following my Bachelor's degree, I worked for 1 year in a healthcare communications agency as Senior Digital Campaigns Executive. The company was a small agency, and I promptly adapted to the fast-paced environment and learned how to balance delivering high-quality projects with meeting tight, ever-changing deadlines. As part of my role, I held weekly meetings with clients from Europe and Asia, which helped me improve my presentation skills and cultivate true professionalism.",
      className: "lg:col-span-4 lg:col-start-1 lg:row-start-4 animate-fadeIn lg:animate-slow lg:animate-fadeInLeft"
    },
    {
      title: "Skills",
      icon: AiFillTool,
      content: "I am most familiar in Python and Javascript/Typescript. I enjoy both frontend and backend development, and have used React with various tools for projects. Python is one of the first programming languages I've learned, and have expanded on this skill by using libraries such as TensorFlow and Pandas for ML & Data Science projects.",
      className: "lg:col-span-4 lg:col-start-3 lg:row-start-5 animate-fadeIn lg:animate-slow lg:animate-fadeInRight"
    }
  ];

  return (    
    <div className="w-screen px-8 flex flex-col">
      <h1 className="font-extrabold text-5xl md:text-8xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent w-fit pb-1 md:pb-2 mt-2 mb-10">
        About Me
      </h1>
      <div className="w-full lg:w-11/12 m-auto grid grid-cols-1 lg:grid-cols-6 gap-10">
        <DownloadCVButton fileName="Georges_Linel_CV.pdf" />
        {cardData.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default About;