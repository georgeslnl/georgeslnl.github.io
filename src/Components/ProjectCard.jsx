import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, image, altText, title, date, description }) => {
    return (
        <motion.div
            className="flex flex-col gap-1 rounded-lg w-full text-text"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5}}
        >
            <Link to={`/projects/${id}`}>
                <img src={image} alt={altText} className="border cursor-pointer hover:shadow-lg transition-all" />
            </Link>
            <div className="flex justify-between">
                <h2 className="text-sm  lg:text-base font-bold">{title}</h2>
                <h3 className="text-gray-400 text-sm  lg:text-base">{date}</h3>
            </div>
            <p className="text-sm  lg:text-base">{description}</p>
        </motion.div>
    );
};

export default ProjectCard;
