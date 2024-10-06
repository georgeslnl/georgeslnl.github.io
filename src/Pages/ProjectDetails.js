import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = ({ projects }) => {
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
      <div className="container m-auto p-2 md:p-4 w-11/12 flex flex-col items-center gap-4 ">
        {project.videoUrl && (
          <div className="w-full md:w-3/4 aspect-w-16 aspect-h-9 md:aspect-h-6">
            <iframe 
              src={project.videoUrl}
              className="w-full h-full border rounded-lg" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              title={`${project.title}`}
            ></iframe>
          </div>
        )}
        <div className="bg-secondary-50 rounded-lg p-6 shadow-xl border">
          <p className="text-text-700 italic">{project.date}</p>
          <p className="text-text-700 mb-4">{project.shortDescription}</p>
          {project.abstract.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-text-950 mb-4">{paragraph}</p>
          ))}
          {project.github && (
            <p className="text-secondary-400 underline mb-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </p>
          )}
          {project.skills && (
            <p className="text-text-800">
              <strong>Skills:</strong> {project.skills.join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;