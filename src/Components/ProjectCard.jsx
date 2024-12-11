import React from 'react';

const ProjectCard = ({ image, altText, title, date, description }) => {
  return (
    <div className="flex flex-col gap-3 rounded-lg w-full text-text">
      <img src={image} alt={altText} className="border"/>
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-base font-bold">{title}</h2>
        <h3 className="text-gray-400 text-base">{date}</h3>
      </div>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default ProjectCard;
