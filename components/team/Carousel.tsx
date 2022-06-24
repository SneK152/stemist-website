import CarouselPerson from "./CarouselPerson";
import TeamProps from "@/lib/types/TeamProps";

export default function Carousel(props: TeamProps) {
  return (
    <div className="relative overflow-hidden text-black">
      {props.data.map((person) => (
        <CarouselPerson person={person} key={person.name} />
      ))}
      {/* <button
        className="absolute h-full top-0 bottom-0 left-0 z-[1] flex items-center justify-center sm:w-[5%] w-[10%] p-0 text-black text-center bg-none border-0"
        onClick={slideToPrevItem}
      >
        <ChevronLeftIcon className="w-9 h-9 bg-gray-500 bg-opacity-25 rounded-lg shadow-lg p-1" />
      </button>
      {carouselFragment}
      <button
        className="absolute h-full top-0 bottom-0 right-0 z-[1] flex items-center justify-center sm:w-[5%] w-[10%] p-0 text-black text-center bg-none border-0"
        onClick={slideToNextItem}
      >
        <ChevronRightIcon className="w-9 h-9 bg-gray-500 bg-opacity-25 rounded-lg shadow-lg p-1" />
      </button> */}
    </div>
  );
}
