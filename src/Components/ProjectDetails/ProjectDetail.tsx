import {
  Link,
  useParams,
} from "react-router-dom";
import { projectsData } from "../../data/projects";
import {
  useState,
  useEffect,
  useCallback,
} from "react";
import { Reveal } from "../Reveal";

export interface ProjectImage {
  id: number;
  src: string;
  alt: string;
  span?: 1 | 2;
  aspectRatio?: string;
}

interface ProjectDetailProps {
  location: string;
  client?: string;
  overview: string;
  images: ProjectImage[];
}

function ImageCarousel({
  images,
  startIndex,
  onClose,
}: {
  images: ProjectImage[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] =
    useState(startIndex);
  const [animating, setAnimating] =
    useState(false);
  const [direction, setDirection] = useState<
    "left" | "right" | null
  >(null);

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
        setDirection(null);
      }, 250);
    },
    [animating],
  );

  const prev = useCallback(() => {
    goTo(
      (current - 1 + images.length) %
        images.length,
      "right",
    );
  }, [current, images.length, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % images.length, "left");
  }, [current, images.length, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () =>
      window.removeEventListener(
        "keydown",
        handleKey,
      );
  }, [onClose, prev, next]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const slideClass = animating
    ? direction === "left"
      ? "carousel-slide-out-left"
      : "carousel-slide-out-right"
    : "carousel-slide-in";

  return (
    <>
      <style>{`
        @keyframes slideInFromRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutToLeft {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-40px); }
        }
        @keyframes slideOutToRight {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(40px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .carousel-slide-in {
          animation: slideInFromRight 0.25s ease forwards;
        }
        .carousel-slide-out-left {
          animation: slideOutToLeft 0.25s ease forwards;
        }
        .carousel-slide-out-right {
          animation: slideOutToRight 0.25s ease forwards;
        }
        .carousel-overlay {
          animation: fadeIn 0.2s ease forwards;
        }
        .carousel-btn {
          transition: background 0.15s ease, transform 0.15s ease;
        }
        .carousel-btn:hover {
          background: rgba(243,238,229,0.18) !important;
          transform: scale(1.08);
        }
        .carousel-thumb {
          transition: opacity 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
          cursor: pointer;
        }
        .carousel-thumb:hover {
          opacity: 1 !important;
          transform: scale(1.06);
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="carousel-overlay"
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(22, 18, 13, 0.95)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        {/* Top bar */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            width: "100%",
            maxWidth: "960px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 16px",
          }}
        >
          <span
            style={{
              color: "rgba(243,238,229,0.55)",
              fontSize: "12px",
              letterSpacing: "0.22em",
            }}
          >
            {String(current + 1).padStart(2, "0")}{" "}
            / {String(images.length).padStart(2, "0")}
          </span>
          <button
            className="carousel-btn"
            onClick={onClose}
            style={{
              background:
                "rgba(243,238,229,0.08)",
              border: "none",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f3eee5",
            }}
            aria-label="Close"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2 2l12 12M14 2L2 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Main image row */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            width: "100%",
            maxWidth: "960px",
            padding: "0 16px",
          }}
        >
          {/* Prev button */}
          <button
            className="carousel-btn"
            onClick={prev}
            style={{
              flexShrink: 0,
              background:
                "rgba(243,238,229,0.08)",
              border: "none",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f3eee5",
            }}
            aria-label="Previous image"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M11 4L6 9l5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Image */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "300px",
              maxHeight: "65vh",
              overflow: "hidden",
            }}
          >
            <img
              key={current}
              src={images[current].src}
              alt={images[current].alt}
              className={slideClass}
              style={{
                maxWidth: "100%",
                maxHeight: "65vh",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>

          {/* Next button */}
          <button
            className="carousel-btn"
            onClick={next}
            style={{
              flexShrink: 0,
              background:
                "rgba(243,238,229,0.08)",
              border: "none",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f3eee5",
            }}
            aria-label="Next image"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M7 4l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              gap: "8px",
              overflowX: "auto",
              maxWidth: "960px",
              width: "100%",
              padding: "4px 16px 8px",
              scrollbarWidth: "none",
            }}
          >
            {images.map((img, i) => (
              <button
                key={img.id}
                className="carousel-thumb"
                onClick={() =>
                  goTo(
                    i,
                    i > current
                      ? "left"
                      : "right",
                  )
                }
                style={{
                  flexShrink: 0,
                  width: "60px",
                  height: "44px",
                  overflow: "hidden",
                  border:
                    i === current
                      ? "2px solid #f3eee5"
                      : "2px solid transparent",
                  padding: 0,
                  cursor: "pointer",
                  opacity:
                    i === current ? 1 : 0.45,
                }}
                aria-label={`Go to image ${i + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export function ProjectDetail({
  location,
  client,
  overview,
  images,
}: ProjectDetailProps) {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(
    (p) => p.id === Number(id),
  );
  const projectIndex = projectsData.findIndex(
    (p) => p.id === Number(id),
  );
  const [lightboxIndex, setLightboxIndex] =
    useState<number | null>(null);

  if (!project) {
    return (
      <main className="px-6 py-24 text-left md:px-12">
        <h1 className="text-4xl">
          Project not found
        </h1>
        <Link
          to="/projects"
          className="link-underline mt-6 inline-block text-[11px] uppercase tracking-[0.22em] text-muted"
        >
          ← Back to all projects
        </Link>
      </main>
    );
  }

  return (
    <main className="text-left">
      {/* Title block */}
      <section className="px-6 pt-12 pb-10 md:px-12 md:pt-16 md:pb-14">
        <Link
          to="/projects"
          className="rise link-underline inline-block text-[11px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-ink"
          style={{ animationDelay: "60ms" }}
        >
          ← All projects
        </Link>

        <div
          className="rise mt-8 flex items-baseline gap-5"
          style={{ animationDelay: "160ms" }}
        >
          <span className="font-display text-xl text-clay md:text-2xl">
            {String(projectIndex + 1).padStart(
              2,
              "0",
            )}
          </span>
          <h1 className="text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[1] tracking-[-0.02em]">
            {project.title}
          </h1>
        </div>

        {/* Meta */}
        <div
          className="rise mt-10 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3"
          style={{ animationDelay: "280ms" }}
        >
          <div className="border-t border-line pt-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
              Location
            </p>
            <p className="mt-1 font-display text-lg md:text-xl">
              {location}
            </p>
          </div>
          {client && (
            <div className="border-t border-line pt-3">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
                Client
              </p>
              <p className="mt-1 font-display text-lg md:text-xl">
                {client}
              </p>
            </div>
          )}
          <div className="border-t border-line pt-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
              Gallery
            </p>
            <p className="mt-1 font-display text-lg md:text-xl">
              {String(images.length).padStart(
                2,
                "0",
              )}{" "}
              images
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-line px-6 py-12 md:px-12 md:py-16">
        <Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:gap-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted">
              Overview
            </p>
            <p className="max-w-[68ch] text-base leading-[1.8] text-ink/80 md:text-lg">
              {overview}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="border-t border-line px-6 py-12 md:px-12 md:py-16">
        <Reveal>
          <div className="mb-8 flex items-baseline justify-between">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted">
              Gallery
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
              Click any image to expand
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {images.map((img, index) => (
            <Reveal
              key={img.id}
              className={
                img.span === 2
                  ? "col-span-2"
                  : ""
              }
              delay={(index % 2) * 80}
            >
              <button
                onClick={() =>
                  setLightboxIndex(index)
                }
                className={`group relative block w-full overflow-hidden bg-cream ${
                  img.aspectRatio ??
                  "aspect-[4/3]"
                }`}
                aria-label={`Expand image: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/20" />
                <span
                  aria-hidden
                  className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  ↗
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lightbox carousel */}
      {lightboxIndex !== null && (
        <ImageCarousel
          images={images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </main>
  );
}
