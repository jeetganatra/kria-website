import { Button, CarouselSlider, Image } from "@fluentui/react-components";
import {
  Carousel,
  type CarouselAnnouncerFunction,
  CarouselCard,
  CarouselNav,
  CarouselNavButton,
  CarouselNavContainer,
  CarouselViewport,
  Text,
} from "@fluentui/react-components";
import * as React from "react";
import CarouselImagePujyaPark from "../data/ProjectImages/PujyaPark/CarouselImage.jpeg";
import CarouselImageShilp from "../data/ProjectImages/ShilpSolitaire/CarouselImage.png";
import { useNavigate } from "react-router-dom";

const carouselCards = [
  {
    id: 1,
    name: "Shilp Solitaire",
    img: CarouselImageShilp,
  },
  {
    id: 2,
    name: "Pujya Park Society",
    img: CarouselImagePujyaPark,
  },
];

const BannerCard: React.FC<{
  children: React.ReactNode;
  imageSrc: string;
  index: number;
  id: number;
}> = ({ children, imageSrc, index, id }) => {
  const navigate = useNavigate();

  return (
    <CarouselCard
      autoSize
      className="rounded-xl shadow-md h-[450px] text-left relative !w-[90vw] !max-w-[900px]"
      aria-label={`${index + 1} of ${carouselCards.length}`}
    >
      <Image
        fit="cover"
        src={imageSrc}
        role="presentation"
        className="!rounded-md"
      />

      <div className="!bg-[#E1E5EE] flex flex-row items-center justify-between absolute bottom-6 left-1/2 -translate-x-1/2 rounded-lg shadow-md bg-white px-3 py-1 w-[50%]">
        <div className="text-xl font-semibold whitespace-nowrap">
          {children}
        </div>
        <div>
          <button
            onClick={() => navigate(`/project/${id}`)}
            className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#B0BBD2] font-medium text-[#000000] transition-all duration-300 hover:shadow-md"
          >
            {/* hover:w-32 */}
            {/* <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100"> */}
            {/* Go to project */}
            {/* </div> */}
            <div className="absolute right-3.5">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </CarouselCard>
  );
};

const getAnnouncement: CarouselAnnouncerFunction = (
  index: number,
  totalSlides: number,
) => {
  return `Carousel slide ${index + 1} of ${totalSlides}`;
};

export const ProjectsCarousel = (): React.ReactElement => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr]">
      <div className="min-h-[100px]">
        <Carousel
          circular
          draggable
          announcement={getAnnouncement}
          className="flex-1 pb-6"
        >
          <div className="pl-10 flex justify-between items-center gap-2 mb-6">
            <Text as="h1" className="flex-1 m-0 !text-5xl !font-semibold">
              Projects
            </Text>
          </div>

          <CarouselViewport className="!overflow-hidden px-[5vw]">
            <CarouselSlider className="gap-6 px-6 !items-center">
              {carouselCards.map((cardDetails, index) => (
                <BannerCard
                  key={`image-${index}`}
                  imageSrc={cardDetails.img}
                  index={index}
                  id={cardDetails.id}
                >
                  {cardDetails.name}
                </BannerCard>
              ))}
            </CarouselSlider>
          </CarouselViewport>
          <CarouselNavContainer
            next={{ "aria-label": "go to next" }}
            prev={{ "aria-label": "go to prev" }}
            className="w-fit mx-auto mt-4"
          >
            <CarouselNav>
              {(index) => (
                <CarouselNavButton
                  aria-label={`Carousel Nav Button ${index}`}
                />
              )}
            </CarouselNav>
          </CarouselNavContainer>
        </Carousel>
      </div>
    </div>
  );
};
