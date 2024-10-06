import React, { useState, useEffect } from "react";
import ProjectCard from "../Components/ProjectCard";
import ProjectCardSimplified from "../Components/ProjectCardSimplified";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";

const projects = [
  {
    title: "UI Copilot",
    date: "September 2024",
    shortDescription:
      "AI-powered UI editor for Visual Studio Code, in partnership with Microsoft",
    abstract:
      "Modern Windows frameworks such as WinUI3 lack the visual designer of older tools such as Visual Basic. Additionally, recent advancements in generative AI have opened new possibilities for streamlining the UI creation process. \n\nThe principle goal of this project is to create a visual designer for WinUI3 that can output designs into code and leverages generative AI to improve the creation process.\n\nThe resulting solution is UI Copilot, a Visual Studio Code extension that offers an AI-powered drag-and-drop GUI editor. This solution aims to lower the entry barrier for beginners and streamline the process for experienced developers, offering a three-step approach to UI creation: Generate, Customize, and Export.",
    videoUrl: "https://youtube.com/embed/U9KsjIpdhbg",
    github: "https://github.com/lukejlatham/vscode-rapid-gui",
    skills: ["TypeScript", "React", "VS Code API", "OpenAI API"],
  },
  {
    title: "UCL Teacher Assistant Recruitment Platform",
    shortDescription: "Next.js web app for UCL's Computer Science department",
    date: "April 2024",
    abstract: `The current recruitment process for TAs is done through a manual process of emailing and filling out forms. \n\nThe aim of this project is to create a centralized platform for lecturers to post TA vacancies, for students to browse and apply for vacancies, and for HR to manage the recruitment process.`,
    videoUrl: "https://youtube.com/embed/eMahumpS-Gk",
    skills: ["Next.js", "PostgreSQL", "Prixla", "Material UI"],
  },
  {
    title: "\\Pilates",
    shortDescription:
      "Using the SDLC and UML notation to design a booking system for a Pilates studio",
    date: "March 2024",
    abstract:
      "This project is a software engineering project about designing a booking system for a Pilates studio. \n\n The purpose of this project was to gain experience with the software development lifecycle, with a focus on requirements gathering, UML modelling, class analysis, and design.",
    videoUrl: "https://youtube.com/embed/lscMQksouRE",
    skills: [
      "UML",
      "Software Development Lifecycle",
      "Figma",
      "Class Analysis",
    ],
  },
  {
    title: "Bid, Buy, Build",
    shortDescription:
      "Auction-based website for buying and selling furniture and household items",
    date: "December 2023",
    abstract:
      "This project focused on developing a website that allows users to auction off items and bid on them. \n\nThe aim of this project was to understand backend development with a focus on relational databases and SQL. \n\nThe project was developed using PHP and MySQL.",
    videoUrl: "https://youtube.com/embed/sFZ4d_Q9QGk",
    skills: ["PHP", "MySQL"],
  },
  {
    title: "Humanitarian Management System",
    shortDescription:
      "A CLI application for managing humanitarian aid during a crisis",
    date: "December 2023",
    abstract:
      "This project is a command-line interface application built with Python and the Pandas libraries. \n\n Volunteers manage refugee camps during a crisis, enabling them to allocate resources and manage refugees. Admins can also use the application to manage volunteers.",
    videoUrl:
      "https://mediacentral.ucl.ac.uk/player?autostart=n&videoId=20A4JfAI&captions=y&chapterId=0&playerJs=n",
    skills: ["Python", "Pandas"],
  },
];

const Projects = () => {
  return (
    <div className="w-screen px-8 flex flex-col">
      <h1 className="font-extrabold text-5xl xl:text-8xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent w-fit pb-1 xl:pb-2 my-2">
        Projects
      </h1>
    <div className="container m-auto p-4 w-11/12">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="hover:scale-110 cursor-pointer transition-all duration-300"
          >
            <ProjectCardSimplified project={project} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, projects.length - 1));
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   // useEffect with listener for keyboard events
//     useEffect(() => {
//         const handleKeyPress = (e) => {
//         if (e.key === "ArrowRight") {
//             handleNext();
//         } else if (e.key === "ArrowLeft") {
//             handlePrevious();
//         }
//         };

//         window.addEventListener("keydown", handleKeyPress);

//         return () => {
//         window.removeEventListener("keydown", handleKeyPress);
//         };
//     }, []);

//   return (
//     <div className="w-full px-4 xl:px-6 flex flex-col">
//       <h1 className="font-extrabold text-5xl xl:text-8xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent w-fit pb-1 xl:pb-2 mt-10 mb-6">
//         Projects
//       </h1>
//       <div className="flex justify-center items-start">
//           {currentIndex > 0 && (
//             <button
//               onClick={handlePrevious}
//               className="text-base xl:text-2xl absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary-500 to-secondary-500  text-white rounded-full p-2"
//               aria-label="Previous project"
//             >
//               <IoArrowBackSharp/>
//             </button>
//           )}
//           <div className="w-3/4 mb-8 xl:w-full max-w-lg xl:max-w-3xl mx-auto">
//             <ProjectCard project={projects[currentIndex]} />
//           </div>
//           {currentIndex < projects.length - 1 && (
//             <button
//               onClick={handleNext}
//               className="text-base xl:text-2xl absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full p-2"
//               aria-label="Next project"
//             >
//               <IoArrowForwardSharp className="" />
//             </button>
//           )}
//         </div>
//       </div>
//   );
// };

export default Projects;
