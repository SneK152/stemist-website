/* eslint-disable @next/next/no-img-element */
import { animated, useSpring } from "react-spring";
import { useState } from "react";
import useSponsorSpring from "./useSponsorSpring";
import Image from "next/image";

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
  const { containerSpring, descriptionSpring } = useSponsorSpring(
    isHovered,
    color
  );

  const imageSpring = useSpring({
    scale: isHovered ? 1 : 1.5,
    translateY: isHovered ? 0 : 16,
  });

  return (
    <animated.a
      style={containerSpring}
      className={`text-black p-3 hover:shadow-xl rounded-md ${
        isHovered ? "z-50" : "z-30"
      }`}
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <animated.img
        alt={name}
        style={imageSpring}
        src={`/sponsors/${name.toLowerCase()}_logo.png`}
        className={`${className} h-28 m-auto`}
      />
      {/* <animated.p
        style={descriptionSpring}
        className="text-2xl pt-2 font-semibold text-center capitalize"
      >
        {name}
      </animated.p> */}
      <animated.img
        style={descriptionSpring}
        src={`/sponsors/${name.toLowerCase()}_text.png`}
      />
    </animated.a>
  );
}
