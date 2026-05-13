import { Divider } from "@fluentui/react-components";
import { ProjectsCarousel } from "../Components/ProjectsCarousel";
import { ContactUs } from "./ContactUs";
import section from "./../data/HomeSection.jpeg";

export function Home() {
  return (
    <div>
      <main>
        <div className="w-full h-[50vh] pt-10">
          <img
            src={section}
            alt={"home section"}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xs text-right">
          Ahmedabad Heritage Pol Documentation
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
