import { useSpringCarousel } from "react-spring-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Image from "next/image";

const images: string[] = ["/about/teamphoto.jpg", "/about/session.png"];

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
        <ChevronLeftIcon className="w-9 h-9 p-1" />
      </button>
      {carouselFragment}
      <button
        className="absolute h-full top-0 bottom-0 right-0 z-[1] flex items-center justify-center sm:w-[10%] w-[15%] p-0 text-white text-center bg-none border-0"
        onClick={slideToNextItem}
      >
        <ChevronRightIcon className="w-9 h-9 p-1" />
      </button>
    </div>
  );
}
