import { useNavigate } from "react-router-dom";

export function ProjectCard({
  id,
  title,
  imageUrl,
  index,
  featured = false,
}: {
  id: number;
  title: string;
  imageUrl: string;
  index: number;
  featured?: boolean;
}) {
  const navigate = useNavigate();

  const handleOpen = () => {
    if (typeof gtag !== "undefined") {
      gtag("event", "project_opened", {
        project_id: id,
        project_title: title,
        source: "grid",
      });
    }
    navigate(`/project/${id}`);
  };

  return (
    <button
      onClick={handleOpen}
      className={`group block w-full text-left ${
        featured ? "sm:col-span-2" : ""
      }`}
      aria-label={`Open project: ${title}`}
    >
      <div className="overflow-hidden bg-cream">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
            featured
              ? "aspect-[16/8]"
              : "aspect-[4/3]"
          }`}
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
          className="text-clay opacity-0 transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100"
        >
          →
        </span>
      </div>
    </button>
  );
}
