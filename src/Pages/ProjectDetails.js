import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectCard from '../Components/ProjectCard';

const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="w-screen px-8 flex flex-col">
      <h1 className="font-extrabold text-5xl xl:text-8xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent w-fit pb-1 xl:pb-2 my-2">
        {project.title}
      </h1>
      <div className="container m-auto p-4 w-11/12">
        <ProjectCard project={project} />
      </div>
    </div>
  );
};

export default ProjectDetail;