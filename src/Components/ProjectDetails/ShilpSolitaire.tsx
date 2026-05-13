import { useParams } from "react-router-dom";
import { projectsData } from "../../data/projects";
import Hall1 from "../../data/ProjectImages/ShilpSolitaire/Hall_01.png";
import DiningTable1 from "../../data/ProjectImages/ShilpSolitaire/Dining_01.png";
import DiningTable2 from "../../data/ProjectImages/ShilpSolitaire/Dining_02.png";
import Kitchen1 from "../../data/ProjectImages/ShilpSolitaire/Kitchen_01.png";
import Kitchen2 from "../../data/ProjectImages/ShilpSolitaire/Kitchen_02.png";
import GuestBedroom1_1 from "../../data/ProjectImages/ShilpSolitaire/Guest Bedroom_01.png";
import GuestBedroom1_2 from "../../data/ProjectImages/ShilpSolitaire/Guest Bedroom_02.png";
import Lobby1 from "../../data/ProjectImages/ShilpSolitaire/Lobby_01.png";
import Lobby2 from "../../data/ProjectImages/ShilpSolitaire/Lobby_02.png";
import ParentsBedroom1 from "../../data/ProjectImages/ShilpSolitaire/Parents Bedroom_01.png";
import ParentsBedroom2 from "../../data/ProjectImages/ShilpSolitaire/Parents Bedroom_02.png";
import GuestBedroom2_1 from "../../data/ProjectImages/ShilpSolitaire/Guest Bedroom2_01.png";
import GuestBedroom2_2 from "../../data/ProjectImages/ShilpSolitaire/Guest Bedroom2_02.png";
import MasterBedroom1 from "../../data/ProjectImages/ShilpSolitaire/Master Bedroom_01.png";
import MasterBedroom2 from "../../data/ProjectImages/ShilpSolitaire/Master Bedroom_02.png";
import HomeTheatre1 from "../../data/ProjectImages/ShilpSolitaire/Hometheater_01.png";
import HomeTheatre2 from "../../data/ProjectImages/ShilpSolitaire/Hometheater_02.png";
import Gazebo from "../../data/ProjectImages/ShilpSolitaire/Gazebo_01.jpg";

export function ShilpSolitaire() {
  const { id } = useParams<{ id: string }>();

  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>{project.title}</h1>
      <h2>Vadodara</h2>
      <h2 className="pt-5">Client: Hemang Chowksy</h2>
      <ProjectOverview />
      <ResultsGallery />
    </div>
  );
}

function ProjectOverview() {
  return (
    <div className="py-12 px-6">
      <p className="text-sm text-gray-500 leading-relaxed">
        The clients wanted to have a modern and subtle design which looks
        elegant. All the spaces were designed to stand out on their own with
        different design features yet they all tied together seamlessly by use
        of complementing colours and textures. Different materials were used to
        achieve the aim of having unique spaces which are complete within their
        own right.
      </p>
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
      src: DiningTable1,
      alt: "Interior 2",
      span: 1,
    },
    {
      id: 3,
      src: DiningTable2,
      alt: "Interior 3",
      span: 1,
    },
    {
      id: 4,
      src: Kitchen1,
      alt: "Interior 4",
      span: 1,
    },
    {
      id: 5,
      src: Kitchen2,
      alt: "Interior 5",
      span: 1,
    },
    {
      id: 6,
      src: GuestBedroom1_1,
      alt: "Interior 6",
      span: 1,
    },
    {
      id: 7,
      src: GuestBedroom1_2,
      alt: "Interior 7",
      span: 1,
    },
    {
      id: 8,
      src: Lobby1,
      alt: "Interior 8",
      span: 2,
    },
    {
      id: 9,
      src: Lobby2,
      alt: "Interior 8",
      span: 1,
    },
    {
      id: 10,
      src: ParentsBedroom1,
      alt: "Interior 8",
      span: 1,
    },
    {
      id: 11,
      src: ParentsBedroom2,
      alt: "Interior 8",
      span: 1,
    },
    {
      id: 12,
      src: GuestBedroom2_1,
      alt: "Interior 8",
      span: 1,
    },
    {
      id: 13,
      src: GuestBedroom2_2,
      alt: "Interior 8",
      span: 1,
    },
    {
      id: 14,
      src: MasterBedroom1,
      alt: "Interior 8",
      span: 1,
    },
    {
      id: 15,
      src: MasterBedroom2,
      alt: "Interior 8",
      span: 1,
    },
    {
      id: 16,
      src: HomeTheatre1,
      alt: "Interior 8",
      span: 1,
    },
    {
      id: 17,
      src: HomeTheatre2,
      alt: "Interior 8",
      span: 1,
    },
    {
      id: 18,
      src: Gazebo,
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

      <div className="grid grid-cols-2 gap-2 px-4 sm:px-10 md:px-20 lg:px-40">
        {images.map((img) => (
          <div
            key={img.id}
            className={`aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer ${img.span === 2 ? "col-span-2" : ""}`}
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
