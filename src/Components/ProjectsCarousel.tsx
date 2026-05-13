import { CarouselSlider, Image } from "@fluentui/react-components";
import {
  Carousel,
  type CarouselAnnouncerFunction,
  CarouselCard,
  CarouselNav,
  CarouselNavButton,
  CarouselNavContainer,
  CarouselViewport,
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
      className="rounded-xl shadow-md h-[50vh] sm:h-[65vh] max-h-[600px] text-left relative !w-[85vw]"
      aria-label={`${index + 1} of ${carouselCards.length}`}
    >
      <Image
        fit="cover"
        src={imageSrc}
        role="presentation"
        className="!rounded-md !w-full !h-full"
      />

      <div className="!bg-[#f7f2ed] flex flex-row items-center justify-between absolute bottom-6 left-1/2 -translate-x-1/2 rounded-lg shadow-md bg-white px-3 py-1 w-[40%]">
        <div className="text-sm sm:text-base md:text-xl font-semibold whitespace-nowrap">
          {children}
        </div>
        <div>
          <button
            onClick={() => navigate(`/project/${id}`)}
            className="group relative inline-flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center overflow-hidden rounded-full bg-[#ebddd1] font-medium text-[#000000] transition-all duration-300 hover:shadow-md"
          >
            <div className="items-center justify-center">
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
  const loopedCards = [
    carouselCards[carouselCards.length - 1], // clone of last
    ...carouselCards,
    carouselCards[0], // clone of first
  ];

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
            <h1 className="flex-1 m-0 !text-5xl !font-galileo">Projects</h1>
          </div>

          <CarouselViewport className="!overflow-hidden">
            <CarouselSlider className="gap-6 px-[7.5vw] !items-center">
              {loopedCards.map((cardDetails, index) => (
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
