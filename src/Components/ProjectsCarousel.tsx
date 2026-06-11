import * as React from "react";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../data/projects";
import { Reveal } from "./Reveal";

const trackEvent = (
  eventName: string,
  params: Record<string, unknown>,
) => {
  if (typeof gtag !== "undefined") {
    gtag("event", eventName, params);
  }
};

function FilmstripCard({
  id,
  title,
  imageSrc,
  index,
}: {
  id: number;
  title: string;
  imageSrc: string;
  index: number;
}) {
  const navigate = useNavigate();

  React.useEffect(() => {
    trackEvent("project_impression", {
      project_id: id,
      project_title: title,
      source: "carousel",
      carousel_position: index,
    });
  }, [id, title, index]);

  const handleOpen = () => {
    trackEvent("project_opened", {
      project_id: id,
      project_title: title,
      source: "carousel",
      carousel_position: index,
    });
    navigate(`/project/${id}`);
  };

  return (
    <button
      onClick={handleOpen}
      className="group w-[80vw] shrink-0 snap-start text-left sm:w-[58vw] lg:w-[42vw]"
      aria-label={`Open project: ${title}`}
    >
      <div className="overflow-hidden bg-cream">
        <img
          src={imageSrc}
          alt={title}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between border-t border-line pt-3">
        <div className="flex items-baseline gap-4">
          <span className="text-[11px] tracking-[0.22em] text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-xl tracking-tight md:text-2xl">
            {title}
          </span>
        </div>
        <span
          aria-hidden
          className="text-clay transition-transform duration-300 group-hover:translate-x-1.5"
        >
          →
        </span>
      </div>
    </button>
  );
}

export const ProjectsCarousel =
  (): React.ReactElement => {
    const scrollerRef =
      React.useRef<HTMLDivElement>(null);

    const scrollByCard = (dir: 1 | -1) => {
      const el = scrollerRef.current;
      if (!el) return;
      el.scrollBy({
        left: dir * el.clientWidth * 0.6,
        behavior: "smooth",
      });
    };

    return (
      <section>
        <Reveal>
          <div className="flex items-end justify-between px-6 pb-8 md:px-12">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted">
                Selected Works
              </p>
              <h2 className="mt-2 text-4xl tracking-tight md:text-6xl">
                Projects{" "}
                <sup className="text-base text-clay md:text-xl">
                  (
                  {String(
                    projectsData.length,
                  ).padStart(2, "0")}
                  )
                </sup>
              </h2>
            </div>
            <div className="hidden gap-3 sm:flex">
              <button
                onClick={() => scrollByCard(-1)}
                aria-label="Scroll to previous projects"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
              >
                ←
              </button>
              <button
                onClick={() => scrollByCard(1)}
                aria-label="Scroll to next projects"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            ref={scrollerRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-6 px-6 pb-2 md:scroll-px-12 md:px-12"
          >
            {projectsData.map(
              (project, index) => (
                <FilmstripCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  imageSrc={project.image}
                  index={index}
                />
              ),
            )}
          </div>
        </Reveal>
      </section>
    );
  };
