import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projectsData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start mb-16 gap-2">
        <Link to="/" className="text-primary font-medium">
          back
        </Link>
        <h1 className="font-bold text-3xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent w-fit pb-1 md:pb-2 ">
          {project.title}
        </h1>
      </div>
      <div
        className="container flex flex-col items-center gap-4 text-text text-sm md:text-base font-medium"
      >
        {project.videoUrl ? (
          <motion.div className="w-full aspect-w-16 aspect-h-9"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}>
            <iframe
              src={project.videoUrl}
              className="w-full h-full border"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              quality="high"
              title={`${project.title}`}
            ></iframe>
          </motion.div>
        ) : (
          <motion.img
            src={project.image}
            alt={project.title}
            className="shadow-lg border"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          />
        )}
        <motion.div className="md:w-3/4 p-2"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        >
        
          {project.deployedLink ? (
            <p className="font-bold text-primary hover:underline w-fit mb-4">
              <a
                href={project.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Try it!
              </a>
            </p>
          ) : null}
          {project.abstract.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-text-950 mt-4">
              {paragraph}
            </p>
          ))}
          {project.github && (
            <p className="font-bold text-primary hover:underline w-fit mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </p>
          )}
          {project.skills && (
            <p className="mt-5 font-normal">
              Skills: {project.skills.join(", ")}
            </p>
          )}
        </motion.div>
        {project.videoUrl && (
          <motion.img
            src={project.image}
            alt={project.title}
            className="shadow-lg border"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
