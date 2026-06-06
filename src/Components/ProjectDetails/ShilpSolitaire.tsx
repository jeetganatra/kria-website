import {
  ProjectDetail,
  type ProjectImage,
} from "./ProjectDetail";
import Hall1 from "../../data/optimized/ProjectImages/ShilpSolitaire/Hall_01.webp";
import DiningTable1 from "../../data/optimized/ProjectImages/ShilpSolitaire/Dining_01.webp";
import DiningTable2 from "../../data/optimized/ProjectImages/ShilpSolitaire/Dining_02.webp";
import Kitchen1 from "../../data/optimized/ProjectImages/ShilpSolitaire/Kitchen_01.webp";
import Kitchen2 from "../../data/optimized/ProjectImages/ShilpSolitaire/Kitchen_02.webp";
import GuestBedroom1_1 from "../../data/optimized/ProjectImages/ShilpSolitaire/Guest Bedroom_01.webp";
import GuestBedroom1_2 from "../../data/optimized/ProjectImages/ShilpSolitaire/Guest Bedroom_02.webp";
import Lobby1 from "../../data/optimized/ProjectImages/ShilpSolitaire/Lobby_01.webp";
import Lobby2 from "../../data/optimized/ProjectImages/ShilpSolitaire/Lobby_02.webp";
import ParentsBedroom1 from "../../data/optimized/ProjectImages/ShilpSolitaire/Parents Bedroom_01.webp";
import ParentsBedroom2 from "../../data/optimized/ProjectImages/ShilpSolitaire/Parents Bedroom_02.webp";
import GuestBedroom2_1 from "../../data/optimized/ProjectImages/ShilpSolitaire/Guest Bedroom2_01.webp";
import GuestBedroom2_2 from "../../data/optimized/ProjectImages/ShilpSolitaire/Guest Bedroom2_02.webp";
import MasterBedroom1 from "../../data/optimized/ProjectImages/ShilpSolitaire/Master Bedroom_01.webp";
import MasterBedroom2 from "../../data/optimized/ProjectImages/ShilpSolitaire/Master Bedroom_02.webp";
import HomeTheatre1 from "../../data/optimized/ProjectImages/ShilpSolitaire/Hometheater_01.webp";
import HomeTheatre2 from "../../data/optimized/ProjectImages/ShilpSolitaire/Hometheater_02.webp";
import Gazebo from "../../data/optimized/ProjectImages/ShilpSolitaire/Gazebo_01.webp";

const images: ProjectImage[] = [
  { id: 1, src: Hall1, alt: "Hall", span: 2 },
  {
    id: 2,
    src: DiningTable1,
    alt: "Dining Table 1",
    span: 1,
  },
  {
    id: 3,
    src: DiningTable2,
    alt: "Dining Table 2",
    span: 1,
  },
  {
    id: 4,
    src: Kitchen1,
    alt: "Kitchen 1",
    span: 1,
  },
  {
    id: 5,
    src: Kitchen2,
    alt: "Kitchen 2",
    span: 1,
  },
  {
    id: 6,
    src: GuestBedroom1_1,
    alt: "Guest Bedroom 1",
    span: 1,
  },
  {
    id: 7,
    src: GuestBedroom1_2,
    alt: "Guest Bedroom 2",
    span: 1,
  },
  { id: 8, src: Lobby1, alt: "Lobby 1", span: 2 },
  { id: 9, src: Lobby2, alt: "Lobby 2", span: 1 },
  {
    id: 10,
    src: ParentsBedroom1,
    alt: "Parents Bedroom 1",
    span: 1,
  },
  {
    id: 11,
    src: ParentsBedroom2,
    alt: "Parents Bedroom 2",
    span: 1,
  },
  {
    id: 12,
    src: GuestBedroom2_1,
    alt: "Guest Bedroom2 1",
    span: 1,
  },
  {
    id: 13,
    src: GuestBedroom2_2,
    alt: "Guest Bedroom2 2",
    span: 1,
  },
  {
    id: 14,
    src: MasterBedroom1,
    alt: "Master Bedroom 1",
    span: 1,
  },
  {
    id: 15,
    src: MasterBedroom2,
    alt: "Master Bedroom 2",
    span: 1,
  },
  {
    id: 16,
    src: HomeTheatre1,
    alt: "Home Theatre 1",
    span: 1,
  },
  {
    id: 17,
    src: HomeTheatre2,
    alt: "Home Theatre 2",
    span: 1,
  },
  { id: 18, src: Gazebo, alt: "Gazebo", span: 1 },
];

const overview =
  "The clients wanted to have a modern and subtle design which looks " +
  "elegant. All the spaces were designed to stand out on their own with " +
  "different design features yet they all tied together seamlessly by use " +
  "of complementing colours and textures. Different materials were used to " +
  "achieve the aim of having unique spaces which are complete within their " +
  "own right.";

export function ShilpSolitaire() {
  return (
    <ProjectDetail
      location="Vadodara"
      client="Hemang Chowksy"
      overview={overview}
      images={images}
    />
  );
}
