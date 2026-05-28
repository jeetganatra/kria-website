import {
  ProjectDetail,
  type ProjectImage,
} from "./ProjectDetail";
import MainImage from "../../data/ProjectImages/CourtyardHouse/Carousel.jpg";
import FloorPlan from "../../data/ProjectImages/CourtyardHouse/Floor Plan.jpg";
import Sketches from "../../data/ProjectImages/CourtyardHouse/Sketches.jpg";

const images: ProjectImage[] = [
  {
    id: 1,
    src: MainImage,
    alt: "Main image",
    span: 2,
  },
  {
    id: 2,
    src: FloorPlan,
    alt: "Floor plan",
    span: 2,
  },
  {
    id: 3,
    src: Sketches,
    alt: "Sketches",
    span: 2,
    aspectRatio: "aspect-[1.64/1]",
  },
];

const overview =
  "This Farmhouse is envisioned as a getaway home for a couple who believes in spending their time in nature. " +
  "The intervention is kept minimal so as to have maximum space for the greens to grow. The design philosophy is to merge the outdoor with the indoor, " +
  "the semi-public spaces are designed to open up into small informal courtyards which are part of the larger landscape. " +
  "The central court becomes an anchor for the entire house and can be used as a family gathering space. " +
  "The design draws inspiration from the traditional houses of Kerela and tries to render them in a modern setting by using different hierarchies of courtyards.";

export function TheCourtyardHouse() {
  return (
    <ProjectDetail
      location="Mhow"
      overview={overview}
      images={images}
    />
  );
}
