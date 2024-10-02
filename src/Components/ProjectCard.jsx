import React from 'react';

const ProjectCard = ({ project }) => {
    const abstractParagraphs = project.abstract.split('\n\n');

    return (
        <div className="rounded-lg p-6 w-full mx-auto bg-secondary-50 shadow-2xl border">
            <h2 className="text-2xl text-text-950 font-bold mb-2">{project.title}</h2>
            <p className="text-text-800">{project.shortDescription}</p>
            <p className="text-text-700 mb-4 italic">{project.date}</p>
            {abstractParagraphs.map((paragraph, index) => (
                <p key={index} className="text-text-950 mb-4 ">{paragraph}</p>
            ))}
            {project?.github && (
                <p className="text-secondary-400 underline mb-4">
                    <a href={project?.github}>Github</a>
                </p>
            )}
            {project.videoUrl && (
                <div className="w-full aspect-w-16 aspect-h-9">
                    <iframe 
                        src={project.videoUrl}
                        className="w-full h-full" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        title={`${project.title}`}
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;