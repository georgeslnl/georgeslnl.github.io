import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Header from "./Components/Header";
import ProjectDetails from './Pages/ProjectDetails';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const projects = [
    {
      id: "ui-copilot",
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
      id: "ucl-ta-recruitment",
      title: "UCL Teacher Assistant Recruitment Platform",
      shortDescription: "Next.js web app for UCL's Computer Science department",
      date: "April 2024",
      abstract: `The current recruitment process for TAs is done through a manual process of emailing and filling out forms. \n\nThe aim of this project is to create a centralized platform for lecturers to post TA vacancies, for students to browse and apply for vacancies, and for HR to manage the recruitment process.`,
      videoUrl: "https://youtube.com/embed/eMahumpS-Gk",
      skills: ["Next.js", "PostgreSQL", "Prixla", "Material UI"],
    },
    {
      id: "pilates",
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
      id: "bid-buy-build",
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
      id: "humanitarian-management-system",
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


  return (
    <div className='min-h-screen'>
      <Router>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/projects/:id" element={<ProjectDetails projects={projects} />} />
        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
