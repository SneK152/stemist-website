import { useSpringCarousel } from "react-spring-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Image from "next/image";

const images: string[] = [
  "/about/carousel2.png",
  "/about/carousel5.png",
  "/about/carousel1.png",
  "/about/carousel4.png",
  "/about/carousel3.png",
  "/about/carousel6.png",
];

export default function HomeCarousel() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      items: images.map((i) => ({
        id: i,
        renderItem: (
          <Image
            src={i}
            alt="Carousel image"
            layout="fill"
            loading="eager"
            quality={100}
            objectFit="cover"
            objectPosition="top left"
            className="select-none"
            draggable={false}
          />
        ),
      })),
    });
  return (
    <div className="relative overflow-hidden bg-white rounded-xl cursor-grab active:cursor-grabbing h-96">
      <button
        className="absolute h-full top-0 bottom-0 left-0 z-[1] flex items-center justify-center sm:w-[10%] w-[15%] p-0 text-white text-center bg-none border-0"
        onClick={slideToPrevItem}
      >
        <ChevronLeftIcon className="w-9 h-9 p-1 bg-black rounded-xl shadow-md" />
      </button>
      {carouselFragment}
      <button
        className="absolute h-full top-0 bottom-0 right-0 z-[1] flex items-center justify-center sm:w-[10%] w-[15%] p-0 text-white text-center bg-none border-0"
        onClick={slideToNextItem}
      >
        <ChevronRightIcon className="w-9 h-9 p-1 bg-black rounded-xl shadow-md" />
      </button>
    </div>
  );
}
