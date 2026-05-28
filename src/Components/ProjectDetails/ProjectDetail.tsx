import { useParams } from "react-router-dom";
import { projectsData } from "../../data/projects";
import {
  useState,
  useEffect,
  useCallback,
} from "react";

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
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-40px); }
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
          background: rgba(255,255,255,0.18) !important;
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
        .carousel-close:hover {
          background: rgba(255,255,255,0.15) !important;
          transform: scale(1.08);
        }
        .carousel-close {
          transition: background 0.15s ease, transform 0.15s ease;
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="carousel-overlay"
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.92)",
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
            maxWidth: "900px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 16px",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "13px",
              letterSpacing: "0.08em",
            }}
          >
            {current + 1} / {images.length}
          </span>
          <button
            className="carousel-close"
            onClick={onClose}
            style={{
              background:
                "rgba(255,255,255,0.08)",
              border: "none",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
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
                stroke="white"
                strokeWidth="2"
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
            maxWidth: "900px",
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
                "rgba(255,255,255,0.08)",
              border: "none",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
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
                stroke="white"
                strokeWidth="2"
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
              borderRadius: "8px",
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
                borderRadius: "6px",
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
                "rgba(255,255,255,0.08)",
              border: "none",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
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
                stroke="white"
                strokeWidth="2"
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
              maxWidth: "900px",
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
                  borderRadius: "4px",
                  overflow: "hidden",
                  border:
                    i === current
                      ? "2px solid white"
                      : "2px solid transparent",
                  padding: 0,
                  cursor: "pointer",
                  opacity:
                    i === current ? 1 : 0.45,
                  boxShadow:
                    i === current
                      ? "0 0 0 1px rgba(255,255,255,0.3)"
                      : "none",
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
  const [lightboxIndex, setLightboxIndex] =
    useState<number | null>(null);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>{project.title}</h1>
      <h2>{location}</h2>
      {client && (
        <h2 className="pt-5">Client: {client}</h2>
      )}

      {/* Overview */}
      <div className="py-12 px-6">
        <p className="text-sm text-gray-500 leading-relaxed text-justify">
          {overview}
        </p>
      </div>

      {/* Gallery */}
      <div className="py-8">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-xl font-medium text-gray-900">
            Results
          </h2>
          <span className="text-sm text-gray-400">
            {images.length} images
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 px-4 sm:px-10 md:px-20 lg:px-40">
          {images.map((img, index) => (
            <div
              key={img.id}
              onClick={() =>
                setLightboxIndex(index)
              }
              className={`${img.aspectRatio ?? "aspect-[4/3]"} overflow-hidden rounded-lg group cursor-pointer ${
                img.span === 2 ? "col-span-2" : ""
              }`}
              style={{ position: "relative" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
              />
              {/* Hover overlay hint */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition:
                    "background 0.2s ease",
                }}
                className="group-hover:!bg-[rgba(0,0,0,0.25)]"
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox carousel */}
      {lightboxIndex !== null && (
        <ImageCarousel
          images={images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
