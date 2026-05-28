import {
  ProjectDetail,
  type ProjectImage,
} from "./ProjectDetail";
import GrndFloorPlan from "../../data/ProjectImages/BhavitaPark/Ground Floor Plan.jpg";
import FirstFloorPlan from "../../data/ProjectImages/BhavitaPark/First Floor Plan.jpg";
import SecondFloorPlan from "../../data/ProjectImages/BhavitaPark/Second Floor.jpg";
import MainImage from "../../data/ProjectImages/BhavitaPark/Main Image.png";
import Scene3 from "../../data/ProjectImages/BhavitaPark/Scene 3.png";

const images: ProjectImage[] = [
  {
    id: 1,
    src: GrndFloorPlan,
    alt: "Ground Floor Plan",
    span: 1,
    aspectRatio: "aspect-[5/6]",
  },
  {
    id: 2,
    src: FirstFloorPlan,
    alt: "First Floor Plan",
    span: 1,
    aspectRatio: "aspect-[5/6]",
  },
  {
    id: 3,
    src: SecondFloorPlan,
    alt: "Second Floor Plan",
    span: 1,
    aspectRatio: "aspect-[5/6]",
  },
  {
    id: 4,
    src: MainImage,
    alt: "Main Image",
    span: 1,
  },
  { id: 5, src: Scene3, alt: "Scene 3", span: 1 },
];

const overview =
  "This plot of land is tucked between neighbouring homes where the clients wanted to demolish and reconstruct their existing structure. " +
  "They wanted to create a living cum working space, the planning is done such that the staircase is within the confines of the home but can" +
  "be used to access the terrace office without disturbing any household activities while maintaing privacy. " +
  "Margins are provided on all three sides to ensure that there is ample amount of natural light in all the inner spaces" +
  "along with good cross ventilation. All the spaces are designed with large openings, openings on the south and west end are recessed to block the harsh Vadodara sun.";

export function BhavitaPark() {
  return (
    <ProjectDetail
      location="Vadodara"
      client="Harsh Patel"
      overview={overview}
      images={images}
    />
  );
}
