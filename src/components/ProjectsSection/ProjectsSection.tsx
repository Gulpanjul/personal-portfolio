import React from "react";
import projectsData from "./ProjectsData.constants";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2 className="font-bold text-8xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.github}
            previewUrl={project.preview}
            tags={project.tag}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
