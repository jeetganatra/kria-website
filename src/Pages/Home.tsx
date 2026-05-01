import { Divider } from "@fluentui/react-components";
import { ProjectsCarousel } from "../Components/ProjectsCarousel";
import { ContactUs } from "./ContactUs";
export function Home() {
  return (
    <div>
      <main style={{ padding: "2rem" }}>
        <p style={{ paddingTop: "200px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
          laoreet dolor, sit amet aliquam elit. Vestibulum eget metus nec purus
          sollicitudin vestibulum. Cras et diam eget tellus vehicula congue.
        </p>
      </main>
      <Divider className="flex justify-center flex-col min-h-10" />
      <ProjectsCarousel />
      <Divider className="flex justify-center flex-col min-h-10" />
      <ContactUs />
      <div className="pt-10" />
    </div>
  );
}
