import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects }) {
    return (
        <div className="w-80 h-72 snap-x snap-mandatory overflow-x-scroll flex gap-5 ">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                />
            ))}
        </div>
    );
}