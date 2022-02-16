import { useSpringCarousel } from "react-spring-carousel-js";

export default function Carousel() {
  const { carouselFragment } = useSpringCarousel({
    withLoop: true,
    items: [
      {
        id: "item1",
        renderItem: <div>Bye</div>,
      },
      {
        id: "item2",
        renderItem: <div>Hi</div>,
      },
    ],
  });
  return <div className="bg-white">{carouselFragment}</div>;
}
