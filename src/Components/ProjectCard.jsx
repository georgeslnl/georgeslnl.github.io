// ProjectCard Component
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, image, altText, title, date, description }) => {
  return (
    <div className="flex flex-col gap-1 rounded-lg w-full text-text">
      <Link to={`/projects/${id}`}>
        <img src={image} alt={altText} className="border cursor-pointer hover:shadow-lg transition-all" />
      </Link>
      <div className="flex justify-between">
        <h2 className="text-base md:text-lg text-text-950 font-bold">{title}</h2>
        <h3 className="text-gray-400 text-base">{date}</h3>
      </div>
      <p className="text-xs md:text-base text-text-900">{description}</p>
    </div>
  );
};

export default ProjectCard;
