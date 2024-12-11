import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projectsData';

const Projects = () => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          altText={project.altText}
          title={project.title}
          date={project.date}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default Projects;