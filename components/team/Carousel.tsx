import { useSpringCarousel } from "react-spring-carousel-js";
import CarouselPerson from "./CarouselPerson";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import TeamProps from "@/lib/types/TeamProps";

export default function Carousel(props: TeamProps) {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      items: props.data.map((person) => ({
        id: person.name,
        renderItem: <CarouselPerson person={person} />,
      })),
    });
  return (
    <div className="bg-white bg-opacity-95 relative rounded-3xl mb-10 text-black">
      <button
        className="absolute h-full top-0 bottom-0 left-0 z-[1] flex items-center justify-center w-[5%] p-0 text-black text-center bg-none border-0"
        onClick={slideToPrevItem}
      >
        <ChevronLeftIcon className="w-9 h-9 bg-gray-300 rounded-lg shadow-lg p-1" />
      </button>
      {carouselFragment}
      <button
        className="absolute h-full top-0 bottom-0 right-0 z-[1] flex items-center justify-center w-[5%] p-0 text-black text-center bg-none border-0"
        onClick={slideToNextItem}
      >
        <ChevronRightIcon className="w-9 h-9 bg-gray-300 rounded-lg shadow-lg p-1" />
      </button>
    </div>
  );
}
