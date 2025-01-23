
import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import projectsData from '../data/projectsData';



const Projects = () => {

  

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          id={project.id}
          images={project.images}
          altText={project.altText}
          title={project.title}
          date={project.date}
          description={project.description}
          newProject={project.newProject}
        />
      ))}
    </div>
  );
};

export default Projects;