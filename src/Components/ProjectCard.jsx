import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ image, altText, title, date, description }) => {
    return (
        <div className="flex flex-col gap-3 rounded-lg w-full text-text">
            <Link to="/">
                <img src={image} alt={altText} className="border border-gray-300 hover:shadow-lg transition-all duration-300" />
            </Link>
            <div className="flex justify-between items-center gap-4">
                <h2 className="text-base font-bold">{title}</h2>
                <h3 className="text-gray-400 text-base">{date}</h3>
            </div>
            <p className="text-base">{description}</p>
        </div>
    );
};

export default ProjectCard;
