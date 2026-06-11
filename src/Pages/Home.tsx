import { ProjectsCarousel } from "../Components/ProjectsCarousel";
import { ContactUs } from "./ContactUs";
import section from "./../data/HomeSection.jpeg";

export function Home() {
  return (
    <main className="text-left">
      {/* Hero */}
      <section className="px-6 pt-14 pb-10 md:px-12 md:pt-20 md:pb-14">
        <div
          className="rise flex items-center gap-4"
          style={{ animationDelay: "80ms" }}
        >
          <span className="h-px w-10 bg-clay" />
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted md:text-xs">
            Architecture &amp; Interior Design —
            Ahmedabad, India
          </p>
        </div>

        <h1
          className="rise mt-6 max-w-[16ch] text-[clamp(2.9rem,8.5vw,7rem)] leading-[0.98] tracking-[-0.02em]"
          style={{ animationDelay: "200ms" }}
        >
          Quiet spaces,{" "}
          <em className="text-clay">
            carefully told.
          </em>
        </h1>

        <p
          className="rise mt-8 max-w-[52ch] text-base leading-relaxed text-muted md:text-lg"
          style={{ animationDelay: "340ms" }}
        >
          A design practice shaping homes and
          interiors that hold their people’s
          stories — measured, warm, and built to
          age gracefully.
        </p>
      </section>

      {/* Hero panorama */}
      <figure
        className="rise m-0"
        style={{ animationDelay: "460ms" }}
      >
        <div className="overflow-hidden">
          <img
            src={section}
            alt="Ahmedabad heritage pol documentation drawing"
            className="block h-auto w-full"
          />
        </div>
        <figcaption className="flex items-baseline justify-between px-6 pt-3 md:px-12">
          <span className="text-[11px] uppercase tracking-[0.22em] text-muted">
            fig. 01
          </span>
          <span className="text-[11px] uppercase tracking-[0.22em] text-muted">
            Ahmedabad Heritage Pol Documentation
          </span>
        </figcaption>
      </figure>

      <div className="mt-16 md:mt-24" />

      <ProjectsCarousel />

      <div className="mt-16 md:mt-24" />

      <ContactUs />
    </main>
  );
}
