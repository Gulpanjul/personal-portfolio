import projectsData from "./ProjectsSection.constant";
import ProjectCard from "./ProjectCard";
import Heading from "@/components/ui/Heading";

const ProjectsSection = () => {
  return (
    <>
      <Heading
        as="h2"
        size="large"
        strong
        className="w-full text-center lg:mb-16"
      >
        Ideas Turned Into Real-World Impact
      </Heading>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.github}
            previewUrl={project.preview}
            tags={project.tag}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
