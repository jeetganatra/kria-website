import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../data/projects";
import { Reveal } from "./Reveal";

export const ProjectGrid = () => {
  return (
    <main className="text-left">
      <section className="px-6 pt-14 pb-10 md:px-12 md:pt-20 md:pb-14">
        <div
          className="rise flex items-center gap-4"
          style={{ animationDelay: "80ms" }}
        >
          <span className="h-px w-10 bg-clay" />
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted md:text-xs">
            Index of Works —{" "}
            {String(
              projectsData.length,
            ).padStart(2, "0")}{" "}
            Projects
          </p>
        </div>
        <h1
          className="rise mt-6 text-[clamp(2.9rem,8.5vw,7rem)] leading-[0.98] tracking-[-0.02em]"
          style={{ animationDelay: "200ms" }}
        >
          Projects
        </h1>
      </section>

      <section className="grid grid-cols-1 gap-x-8 gap-y-14 px-6 pb-20 sm:grid-cols-2 md:px-12">
        {projectsData.map((project, index) => (
          <Reveal
            key={project.id}
            className={
              index === 0 ? "sm:col-span-2" : ""
            }
            delay={(index % 2) * 100}
          >
            <ProjectCard
              id={project.id}
              title={project.title}
              imageUrl={project.image}
              index={index}
              featured={index === 0}
            />
          </Reveal>
        ))}
      </section>
    </main>
  );
};
