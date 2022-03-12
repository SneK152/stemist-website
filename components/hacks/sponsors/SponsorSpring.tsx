/* eslint-disable @next/next/no-img-element */
import { animated } from "react-spring";
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
  let [isHovered, setHovered] = useState<boolean>(false);
  let { containerSpring, descriptionSpring } = useSponsorSpring(
    isHovered,
    color
  );

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
      <img
        alt={name}
        src={`/sponsors/${image}`}
        className={`${className} h-28`}
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
