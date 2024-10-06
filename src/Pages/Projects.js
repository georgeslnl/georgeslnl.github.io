import React from "react";
import ProjectCard from "../Components/ProjectCard";



const Projects = ({ projects }) => {
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
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;
