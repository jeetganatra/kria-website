import { Divider } from "@fluentui/react-components";
import { ProjectsCarousel } from "../Components/ProjectsCarousel";
import { ContactUs } from "./ContactUs";
import section from "./../data/optimized/HomeSection.webp";

export function Home() {
  return (
    <div>
      <main>
        <div className="w-full pt-10">
          <img
            src={section}
            alt={"home section"}
            width="7400"
            height="1859"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-auto block"
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
