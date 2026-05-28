import {
  ProjectDetail,
  type ProjectImage,
} from "./ProjectDetail";
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

const images: ProjectImage[] = [
  { id: 1, src: Hall1, alt: "Hall 1", span: 2 },
  { id: 2, src: Hall2, alt: "Hall 2", span: 1 },
  { id: 3, src: Hall3, alt: "Hall 3", span: 1 },
  { id: 4, src: Hall4, alt: "Hall 4", span: 1 },
  { id: 5, src: Hall5, alt: "Hall 5", span: 1 },
  { id: 6, src: Hall6, alt: "Hall 6", span: 1 },
  { id: 7, src: Hall7, alt: "Hall 7", span: 1 },
  {
    id: 8,
    src: DiningTable,
    alt: "Dining Table",
    span: 2,
  },
  {
    id: 9,
    src: Bedroom1,
    alt: "Bedroom 1",
    span: 2,
  },
  {
    id: 10,
    src: Bedroom2,
    alt: "Bedroom 2",
    span: 1,
  },
  {
    id: 11,
    src: Bedroom3,
    alt: "Bedroom 3",
    span: 1,
  },
  {
    id: 12,
    src: Bedroom4,
    alt: "Bedroom 4",
    span: 1,
  },
];

const overview =
  "This residence has been renovated by the client to stabilize their old " +
  "structure and to meet their current functional requirements. The brief " +
  "for the interior design here was to give a modern chic look to a " +
  "renovated structure where the columns and load bearing walls had been " +
  "kept intact. A sensitive design approach was followed to accommodate and " +
  "conceal all the structural elements without compromising on any space. " +
  "Foldable dining table, sofa-cum-bed, foldable TV console were some " +
  "design interventions done to make the space flexible as per use. The " +
  "colour combinations were kept neutral with a pop of colour to give the " +
  "space a timeless grace.";

export function PujyaPark() {
  return (
    <ProjectDetail
      location="Vadodara"
      client="Het Upadhyay"
      overview={overview}
      images={images}
    />
  );
}
