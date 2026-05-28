import {
  ProjectDetail,
  type ProjectImage,
} from "./ProjectDetail";
import MainImage from "../../data/ProjectImages/ShilpSerene/Carousel.png";
import Living1 from "../../data/ProjectImages/ShilpSerene/Living 1.png";
import TvUnitPs from "../../data/ProjectImages/ShilpSerene/TV Unit ps.png";
import Dining1 from "../../data/ProjectImages/ShilpSerene/Dining 1.png";
import LiftLobby2 from "../../data/ProjectImages/ShilpSerene/Lift Lobby 2.png";
import LiftLobbyPs from "../../data/ProjectImages/ShilpSerene/Lift lobby ps.png";
import Kitchen1 from "../../data/ProjectImages/ShilpSerene/Kitchen 1 ps.png";
import Kitchen2 from "../../data/ProjectImages/ShilpSerene/Kitchen 2 ps.png";
import Kitchen3 from "../../data/ProjectImages/ShilpSerene/Kitchen 3 ps.png";
import PujaArea from "../../data/ProjectImages/ShilpSerene/Puja Area.png";
import Room1 from "../../data/ProjectImages/ShilpSerene/Room 1 ps.png";
import Room2 from "../../data/ProjectImages/ShilpSerene/Room 2 ps.png";

const images: ProjectImage[] = [
  {
    id: 1,
    src: MainImage,
    alt: "Main Image",
    span: 2,
  },
  {
    id: 2,
    src: Living1,
    alt: "Living 1",
    span: 1,
  },
  {
    id: 3,
    src: TvUnitPs,
    alt: "TV Unit",
    span: 1,
  },
  {
    id: 4,
    src: Dining1,
    alt: "Dining 1",
    span: 2,
  },
  {
    id: 5,
    src: LiftLobby2,
    alt: "Lift Lobby 2",
    span: 1,
  },
  {
    id: 6,
    src: LiftLobbyPs,
    alt: "Lift Lobby PS",
    span: 1,
  },
  {
    id: 7,
    src: Kitchen1,
    alt: "Kitchen 1",
    span: 1,
  },
  {
    id: 8,
    src: Kitchen2,
    alt: "Kitchen 2",
    span: 1,
  },
  {
    id: 9,
    src: Kitchen3,
    alt: "Kitchen 3",
    span: 1,
  },
  {
    id: 10,
    src: PujaArea,
    alt: "Puja Area",
    span: 1,
  },
  { id: 11, src: Room1, alt: "Room 1", span: 1 },
  { id: 12, src: Room2, alt: "Room 2", span: 1 },
];

const overview =
  "The clients wanted a chic contemporary design, something that is simple and elegant. " +
  "Every furniture piece was designed to be a statement, the colour palette and materials are selected to give a luxurious touch. " +
  "Each space is designed with minimal elements to achieve the design aim along with meeting all the functional requirements.";

export function ShilpSerene() {
  return (
    <ProjectDetail
      location="Vadodara"
      client="Jigarbhai"
      overview={overview}
      images={images}
    />
  );
}
