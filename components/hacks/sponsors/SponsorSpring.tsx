/* eslint-disable @next/next/no-img-element */
import { animated } from "react-spring";
import { useState } from "react";
import useSponsorSpring from "./useSponsorSpring";

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
  const [isHovered, setHovered] = useState<boolean>(false);
  const { containerSpring } = useSponsorSpring(isHovered, color);

  return (
    <animated.a
      style={containerSpring}
      className={`text-black p-3 hover:shadow-xl transition-shadow duration-300 rounded-md relative ${
        isHovered ? "z-40" : "z-30"
      }`}
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <img
        alt={name}
        src={`/sponsors/${name.toLowerCase()}_logo.png`}
        className={`${className} h-28 m-auto`}
      />
      <img
        src={`/sponsors/${name.toLowerCase()}_text.png`}
        alt="Sponsor image"
      />
    </animated.a>
  );
}
