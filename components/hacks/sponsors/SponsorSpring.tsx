import { animated } from "react-spring";
import { useState } from "react";
import useSponsorSpring from "./useSponsorSping";

export default function SpringSponsor({
  image,
  className,
  name,
  url,
  color,
}: {
  image: any;
  className: string;
  name: string;
  url: string;
  color: string;
}) {
  let [isHovered, setHovered] = useState<boolean>(false);
  let {containerSpring, descriptionSpring} = useSponsorSpring(isHovered, color)

  return (
    <animated.a
      style={containerSpring}
      className="text-black p-3 hover:shadow-xl rounded-md"
      href={url}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <img
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
    </animated.a>
  );
}
