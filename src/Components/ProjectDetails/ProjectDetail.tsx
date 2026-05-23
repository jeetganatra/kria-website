import { useParams } from "react-router-dom";
import { projectsData } from "../../data/projects";

export interface ProjectImage {
  id: number;
  src: string;
  alt: string;
  span?: 1 | 2;
  aspectRatio?: string;
}

interface ProjectDetailProps {
  location: string;
  client: string;
  overview: string;
  images: ProjectImage[];
}

export function ProjectDetail({
  location,
  client,
  overview,
  images,
}: ProjectDetailProps) {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>{project.title}</h1>
      <h2>{location}</h2>
      <h2 className="pt-5">Client: {client}</h2>

      {/* Overview */}
      <div className="py-12 px-6">
        <p className="text-sm text-gray-500 leading-relaxed text-justify">
          {overview}
        </p>
      </div>

      {/* Gallery */}
      <div className="py-8">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-xl font-medium text-gray-900">Results</h2>
          <span className="text-sm text-gray-400">{images.length} images</span>
        </div>

        <div className="grid grid-cols-2 gap-2 px-4 sm:px-10 md:px-20 lg:px-40">
          {images.map((img) => (
            <div
              key={img.id}
              className={`${img.aspectRatio ?? "aspect-[4/3]"} overflow-hidden rounded-lg group cursor-pointer ${
                img.span === 2 ? "col-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
