import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import tap from '../assets/tap.mp3';

const ProjectCard = ({ id, images, altText, title, date, description, newProject }) => {
    const [play] = useSound(tap);
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
            transition={{ delay: 0.1, duration: 0.5 }}

        >
            <Link to={`/projects/${id}`} onClick={play} className="border hover:shadow-lg transition-all hover:scale-95 duration-300" >
                <img src={images?.[0]} alt={altText} />
            </Link>
            <div className="flex justify-between">
                <div className="flex justify-start items-center gap-2 group">
                    {newProject ? (
                        <span className="bg-accent rounded-full px-2 lg:px-3 text-xs text-primary border border-primary font-bold group-hover:scale-105 transition-transform duration-200">
                            New !
                        </span>
                    ) : null}
                    <h2 className="text-sm lg:text-base font-bold">{title}</h2>
                </div>
                <h3 className="text-gray-400 text-sm  lg:text-base">{date}</h3>
            </div>
            <p className="text-sm  lg:text-base">{description}</p>
        </motion.div>
    );
};

export default ProjectCard;
