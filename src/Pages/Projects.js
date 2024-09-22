import React, { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";

const projects = [
    {
        title: "UI Copilot",
        date: "September 2024",
        shortDescription: "AI-powered UI editor for Visual Studio Code, in partnership with Microsoft",
        abstract:
        "Modern Windows frameworks such as WinUI3 lack the visual designer of older tools such as Visual Basic. Additionally, recent advancements in generative AI have opened new possibilities for streamlining the UI creation process. \n\nThe principle goal of this project is to create a visual designer for WinUI3 that can output designs into code and leverages generative AI to improve the creation process.\n\nThe resulting solution is UI Copilot, a Visual Studio Code extension that offers an AI-powered drag-and-drop GUI editor. This solution aims to lower the entry barrier for beginners and streamline the process for experienced developers, offering a three-step approach to UI creation: Generate, Customize, and Export.",
        videoUrl: "https://youtube.com/embed/U9KsjIpdhbg",
        github: "https://github.com/lukejlatham/vscode-rapid-gui"
    },
    {
        title: "UCL Teacher Assistant Recruitment Platform",
        shortDescription: "Next.js web app for UCL's Computer Science department",
        date: "April 2024",
        abstract: `The current recruitment process for TAs is done through a manual process of emailing and filling out forms. \n\nThe aim of this project is to create a centralized platform for lecturers to post TA vacancies, for students to browse and apply for vacancies, and for HR to manage the recruitment process.`,
        videoUrl: "https://youtube.com/embed/eMahumpS-Gk",
    },
    {
        title: "\\Pilates",
        shortDescription: "Pilates studio booking system",
        date: "March 2024",
        abstract: "This project is a software engineering project about designing a booking system for a Pilates studio. \n\n The purpose of this project was to gain experience with the software development lifecycle, with a focus on requirements gathering, UML modelling, class analysis, and design.",
        videoUrl: "https://youtube.com/embed/lscMQksouRE"
    },
    {
        title: "Bid, Buy, Build",
        shortDescription: "Auction-based website",
        date: "December 2023",
        abstract: "This project focused on developing a website that allows users to auction off items and bid on them. \n\nThe aim of this project was to understand backend development with a focus on relational databases and SQL. \n\nThe project was developed using PHP and MySQL.",
        videoUrl: "https://youtube.com/embed/sFZ4d_Q9QGk"
    },
    {
        title: "Humanitarian Management System",
        shortDescription: "A CLI application for managing humanitarian aid during a crisis",
        date: "December 2023",
        abstract: "This project is a command-line interface application built with Python and the Pandas libraries. \n\n Volunteers manage refugee camps during a crisis, enabling them to allocate resources and manage refugees. Admins can also use the application to manage volunteers.",
        videoUrl: "https://mediacentral.ucl.ac.uk/player?autostart=n&videoId=20A4JfAI&captions=y&chapterId=0&playerJs=n"
    }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, projects.length - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="w-full px-4 md:px-6 flex flex-col">
      <h1 className="font-extrabold text-5xl md:text-8xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent w-fit pb-1 md:pb-2 mt-10 mb-8">
        Projects
      </h1>
      <div className="flex justify-center items-start">
          {currentIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary-500 to-secondary-500 hover:bg-gradient-to-r hover:from-secondary-500 hover:to-primary-500 text-white rounded-full p-2 transition duration-300"
              aria-label="Previous project"
            >
              <IoArrowBackSharp size={24} />
            </button>
          )}
          <div className="w-3/4 sm:w-full max-w-lg sm:max-w-2xl mx-auto">
            <ProjectCard project={projects[currentIndex]} />
          </div>
          {currentIndex < projects.length - 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary-500 to-secondary-500 hover:bg-gradient-to-r hover:from-secondary-500 hover:to-primary-500 text-white rounded-full p-2 transition duration-300"
              aria-label="Next project"
            >
              <IoArrowForwardSharp size={24} />
            </button>
          )}
        </div>
      </div>
  );
};

export default Projects;