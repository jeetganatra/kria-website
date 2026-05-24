import { ProjectDetail, type ProjectImage } from "./ProjectDetail";
import MainImage from "../../data/ProjectImages/HouseOfNarratives/Carousel.jpg";
import Living1 from "../../data/ProjectImages/HouseOfNarratives/Living 02.jpg";
import Living2 from "../../data/ProjectImages/HouseOfNarratives/Living 03.jpg";
import Living3 from "../../data/ProjectImages/HouseOfNarratives/Living 04.jpg";
import Living4 from "../../data/ProjectImages/HouseOfNarratives/Living 05.jpg";
import Living5 from "../../data/ProjectImages/HouseOfNarratives/Living 06.jpg";
import Pooja1 from "../../data/ProjectImages/HouseOfNarratives/Pooja 07.jpg";
import Kitchen1 from "../../data/ProjectImages/HouseOfNarratives/08.jpg";
import Kitchen2 from "../../data/ProjectImages/HouseOfNarratives/09.jpg";
import Kitchen3 from "../../data/ProjectImages/HouseOfNarratives/10.jpg";

const images: ProjectImage[] = [
  { id: 1, src: MainImage, alt: "Main image", span: 2 },
  { id: 2, src: Living3, alt: "Living 3", span: 1 },
  { id: 3, src: Living2, alt: "Living 2", span: 1 },
  { id: 4, src: Living1, alt: "Living 1", span: 2 },
  { id: 5, src: Living4, alt: "Living 4", span: 1 },
  { id: 6, src: Living5, alt: "Living 5", span: 1 },
  { id: 7, src: Pooja1, alt: "Pooja 1", span: 1 },
  { id: 8, src: Kitchen1, alt: "Kitchen 1", span: 1 },
  { id: 9, src: Kitchen2, alt: "Kitchen 2", span: 1 },
  { id: 10, src: Kitchen3, alt: "Kitchen 3", span: 1 },
];

const overview =
  "The clients wanted to create a home rooted in mythology drawing inspirations from the" +
  "epic of Ramayana. The house is designed with traditional elements like flower motifs that" +
  "are repeated to tie all the spaces together. Incerpts from the epic are interpreted on the" +
  "walls along with furniture that is designed to blend in a traditional setting.";

export function HouseOfNarratives() {
  return (
    <ProjectDetail
      location="Vadodara"
      client="Vikas and Monika Upadhyay"
      overview={overview}
      images={images}
    />
  );
}
