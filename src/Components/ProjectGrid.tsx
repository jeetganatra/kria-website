import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../data/projects";

export const ProjectGrid = () => {
  return (
    <>
      <div className="pt-10"></div>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-10 pb-10">
        {projectsData.map((project) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            title={project.title}
            imageUrl={project.image}
          />
        ))}
      </section>
    </>
  );
};
