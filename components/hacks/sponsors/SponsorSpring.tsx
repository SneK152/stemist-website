import { useSpring, animated } from "react-spring";
import { useState } from "react";

export default function SpringSponsor({
  image,
  className,
  name,
}: {
  image: any;
  className: string;
  name: string;
}) {
  let [isHovered, setHovered] = useState<boolean>(false);
  let containerSpring = useSpring({
    scale: isHovered ? 1.2 : 1,
  });

  let descriptionSpring = useSpring({
    opacity: isHovered ? 1 : 0,
  });

  return (
    <animated.div
      style={containerSpring}
      className="p-3 hover:shadow-xl hover:rounded-md "
    >
      <img
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        {...className}
        className="rounded-2xl"
        src={image}
        alt={name}
      />
      <animated.p
        style={descriptionSpring}
        className="text-2xl pt-2 font-semibold text-center capitalize"
      >
        {name}
      </animated.p>
    </animated.div>
  );
}
