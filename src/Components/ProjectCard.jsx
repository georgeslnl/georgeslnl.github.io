import React from 'react';

export default function ProjectCard({ title, description, image }) {
    return (
        <div className="w-64 h-64 snap-center flex flex-shrink-0 flex-col items-center justify-between bg-secondary-100 shadow-lg rounded-lg overflow-hidden hover:bg-secondary-200 hover:shadow-md cursor-pointer transition-all p-4">
                <h1 className="text-xl font-semibold">{title}</h1>
                <p className="text-justify">{description}</p>
                <img src={image} alt={title} className="w-3/4 h-32 object-cover object-center" />
        </div>
    );
}
