import React from "react";
import georgesImage from "../assets/georges.jpeg";
import Image from "../assets/IMG_5878.jpeg"
import LearnMore from "../Components/LearnMoreButton";
import ExploreProjectsButton from "../Components/ExploreProjectsButton";
import MainLayout from "../Layout/MainLayout";

// import ProjectsGrid from "../Components/ProjectsGrid";

// const projects = [
//   {
//     id: 1,
//     title: "Project 1",
//     description: "This is the first project",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 2,
//     title: "Project 2",
//     description: "This is the second project",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 3,
//     title: "Project 3",
//     description: "This is the third project",
//     image: "https://via.placeholder.com/150",
//   },
// ];

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
        <p className="mt-8 mb-10 text-base md:text-lg text-text-950 text-justify">
        Hi! I'm Georges, a Computer Science MSc living in London. I have a passion for technology and innovation. 
        My expertise spans Python, SQL, and modern web technologies like React and Next.js. 
        I've tackled diverse projects, and am always eager to learn more.
        Explore my portfolio to see how I bridge the gap between code and creative solutions.
        </p>
        <div className="flex flex-row justify-around lg:flex lg:flex-col lg:gap-2">
        <LearnMore />
        <ExploreProjectsButton />
        </div>
        {/* <div className="flex flex-col items-center mt-16">
      <ProjectsGrid projects={projects} />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
