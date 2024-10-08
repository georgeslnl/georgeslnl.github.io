import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    return (
        <Link to={`/projects/${project.id}`} className="block">
            <div className="flex flex-col gap-4 rounded-lg p-6 w-full bg-secondary-50 hover:bg-secondary-100 shadow-xl hover:shadow-2xl border transition-all duration-300 animate-fadeInUpBig">
                <h2 className="text-lg md:text-2xl text-text-950 font-bold mb-2">{project.title}</h2>
                <p className="text-sm md:text-xl text-text-900">{project.shortDescription}</p>
                {project.skills && (
                    <p className="text-xs md:text-lg text-text-800">
                        Skills: {project.skills.join(", ")}
                    </p>
                )}
            </div>
        </Link>
    );
};

export default ProjectCard;