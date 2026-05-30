import {
  ProjectDetail,
  type ProjectImage,
} from "./ProjectDetail";
import MainImage from "../../data/ProjectImages/SiddhamCoolers/Carousel.png";
import Office_1 from "../../data/ProjectImages/SiddhamCoolers/02.png";
import Office_2 from "../../data/ProjectImages/SiddhamCoolers/03.png";
import Office_3 from "../../data/ProjectImages/SiddhamCoolers/04.png";
import Office_4 from "../../data/ProjectImages/SiddhamCoolers/05.png";

const images: ProjectImage[] = [
  {
    id: 1,
    src: MainImage,
    alt: "Main image",
    span: 2,
  },
  {
    id: 2,
    src: Office_1,
    alt: "Office 1",
    span: 1,
  },
  {
    id: 3,
    src: Office_2,
    alt: "Office 2",
    span: 1,
  },
  {
    id: 4,
    src: Office_3,
    alt: "Office 3",
    span: 1,
  },
  {
    id: 5,
    src: Office_4,
    alt: "Office 4",
    span: 1,
  },
];

const overview =
  "The office space is designed in an industrial plant in a small space. " +
  "The office interiors are designed to give a stylish ambience. " +
  "A quaint waiting area is planned in front of the office for visitors.";

export function SiddhamCoolers() {
  return (
    <ProjectDetail
      client="Lakshya Jain"
      location="Udaipur"
      overview={overview}
      images={images}
    />
  );
}
