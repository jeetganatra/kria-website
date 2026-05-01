import { useParams } from "react-router-dom";
import { projectsData } from "../../data/projects";
import Hall1 from "../../data/ProjectImages/PujyaPark/Hall_1.jpeg";
import Hall2 from "../../data/ProjectImages/PujyaPark/Hall_2.jpeg";
import Hall3 from "../../data/ProjectImages/PujyaPark/Hall_3.jpeg";
import Hall4 from "../../data/ProjectImages/PujyaPark/Hall_4.jpeg";
import Hall5 from "../../data/ProjectImages/PujyaPark/Hall_5.jpeg";
import Hall6 from "../../data/ProjectImages/PujyaPark/Hall_6.jpeg";
import Hall7 from "../../data/ProjectImages/PujyaPark/Hall_7.jpeg";
import DiningTable from "../../data/ProjectImages/PujyaPark/DiningTable.jpeg";
import Bedroom1 from "../../data/ProjectImages/PujyaPark/Bedroom_1.jpeg";
import Bedroom2 from "../../data/ProjectImages/PujyaPark/Bedroom_2.jpeg";
import Bedroom3 from "../../data/ProjectImages/PujyaPark/Bedroom_3.jpeg";
import Bedroom4 from "../../data/ProjectImages/PujyaPark/Bedroom_4.jpeg";

export function PujyaPark() {
  const { id } = useParams<{ id: string }>();

  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>{project.title}</h1>
      <h2>Vadodara</h2>
      <h2 className="pt-5">Client: Het Upadhyay</h2>
      {/* <img alt={project.title} style={{ width: "100%", maxWidth: "800px" }} /> */}
      <ProjectOverview />
      {/* <ConceptDesignPictures /> */}
      <ResultsGallery />
    </div>
  );
}

function ProjectOverview() {
  return (
    <div className="py-12 px-6">
      <p className="text-sm text-gray-500 leading-relaxed">
        This residence has been renovated by the client to stabilize their old
        structure and to meet their current functional requirements. The brief
        for the interior design here was to give a modern chic look to a
        renovated structure where the columns and load bearing walls had been
        kept intact. A sensitive design approach was followed to accommodate and
        conceal all the structural elements without compromising on any space.
        Foldable dining table, sofa-cum-bed, foldable TV console were some
        design interventions done to make the space flexible as per use. The
        colour combinations were kept neutral with a pop of colour to give the
        space a timeless grace.
      </p>
    </div>
  );
}

function ConceptDesignPictures() {
  const sketches = [
    {
      id: 1,
      title: "Ground floor plan",
      subtitle: "Floor plan · 1:100",
      src: "/images/ground-floor.png",
    },
    {
      id: 2,
      title: "First floor plan",
      subtitle: "Floor plan · 1:100",
      src: "/images/first-floor.png",
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-xl font-medium text-gray-900 mb-8">
        Concept Design Pictures
      </h2>

      {/* Sketch grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {sketches.map((sketch) => (
          <div
            key={sketch.id}
            className="border border-gray-100 rounded-xl p-6 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="bg-gray-50 rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center">
              <img
                src={sketch.src}
                alt={sketch.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-900">
                {sketch.title}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{sketch.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultsGallery() {
  const images = [
    {
      id: 1,
      src: Hall1,
      alt: "Interior 1",
      span: 2,
    },
    {
      id: 2,
      src: Hall2,
      alt: "Interior 2",
      span: 1,
    },
    {
      id: 3,
      src: Hall3,
      alt: "Interior 3",
      span: 1,
    },
    {
      id: 4,
      src: Hall4,
      alt: "Interior 4",
      span: 1,
    },
    {
      id: 5,
      src: Hall5,
      alt: "Interior 5",
      span: 1,
    },
    {
      id: 6,
      src: Hall6,
      alt: "Interior 6",
      span: 1,
    },
    {
      id: 7,
      src: Hall7,
      alt: "Interior 7",
      span: 1,
    },
    {
      id: 8,
      src: DiningTable,
      alt: "Interior 8",
      span: 2,
    },
    {
      id: 9,
      src: Bedroom1,
      alt: "Interior 8",
      span: 2,
    },
    {
      id: 10,
      src: Bedroom2,
      alt: "Interior 8",
      span: 1,
    },
    {
      id: 11,
      src: Bedroom3,
      alt: "Interior 8",
      span: 1,
    },
    {
      id: 12,
      src: Bedroom4,
      alt: "Interior 8",
      span: 1,
    },
  ];

  return (
    <div className="py-8">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-xl font-medium text-gray-900">Results</h2>
        <span className="text-sm text-gray-400">{images.length} images</span>
      </div>

      <div className="grid grid-cols-2  gap-2">
        {images.map((img) => (
          <div
            key={img.id}
            className={`overflow-hidden rounded-lg group cursor-pointer ${img.span === 2 ? "col-span-2" : ""}`}
            // className="aspect-[3/4] overflow-hidden rounded-lg group cursor-pointer"
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
  );
}
