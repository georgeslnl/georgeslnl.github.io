import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projectsData';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col">
      {/* TO-DO: add back button */}
      <h1 className="font-bold text-5xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent w-fit pb-1 md:pb-2 mb-16">
        {project.title}
      </h1>
      <div className="container flex flex-col items-center gap-4 text-text text-base font-medium">
        {project.videoUrl ? (
          <div className="w-full aspect-w-16 md:aspect-h-9">
            <iframe 
              src={project.videoUrl}
              className="w-full h-full border" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              quality="high"
              title={`${project.title}`}
            ></iframe>
          </div>
        ) : (
          <img 
            src={project.image} 
            alt={project.title} 
            className= "shadow-lg border"
          />
      )}
        <div className= "w-3/4 p-2">
          {/* <p className=" italic">{project.date}</p> */}
          <p className="">{project.shortDescription}</p>
          {/* TO-DO: add icon */}
          {project.deployedLink ? (
            <p className="font-semibold underline mb-4">
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Try it!</a>
            </p>
          ) : null}
          {project.abstract.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-text-950 mt-4">{paragraph}</p>
          ))}
          {project.github && (
            <p className="font-bold mt-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </p>
          )}
          {project.skills && (
            <p className="mt-5">
              <strong>Skills:</strong> {project.skills.join(", ")}
            </p>
          )}
        </div>
        {project.videoUrl && (<img 
            src={project.image} 
            alt={project.title} 
            className= "shadow-lg border"
          />)}
      </div>
    </div>
  );
};

export default ProjectDetails;