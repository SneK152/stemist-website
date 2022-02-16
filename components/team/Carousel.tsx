import { useSpringCarousel } from "react-spring-carousel-js";
import data from "@/lib/spotlight.json";
import Person from "@/lib/types/Person";
import CarouselPerson from "./CarouselPerson";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

export default function Carousel() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      items: data.map((person: Person) => ({
        id: person.name,
        renderItem: <CarouselPerson person={person} />,
      })),
    });
  return (
    <div className="bg-white relative text-black">
      <button
        className="absolute h-full top-0 bottom-0 left-0 z-[1] flex items-center justify-center w-[5%] p-0 text-black text-center bg-none border-0"
        onClick={slideToPrevItem}
      >
        <ChevronLeftIcon className="w-9 h-9 bg-gray-200 rounded-lg shadow-lg p-1" />
      </button>
      {carouselFragment}
      <button
        className="absolute h-full top-0 bottom-0 right-0 z-[1] flex items-center justify-center w-[5%] p-0 text-black text-center bg-none border-0"
        onClick={slideToNextItem}
      >
        <ChevronRightIcon className="w-9 h-9 bg-gray-200 rounded-lg shadow-lg p-1" />
      </button>
    </div>
  );
}

`
position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    padding: 0;
    color: #fff;
    text-align: center;
    background: none;
    border: 0;
    opacity: .5;
    transition: opacity .15s ease;`;
