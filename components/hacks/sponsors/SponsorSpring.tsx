/* eslint-disable @next/next/no-img-element */
import { animated } from "react-spring";
import { useState } from "react";
import useSponsorSpring from "./useSponsorSpring";
import Image from "next/image";

export default function SpringSponsor({
  className = "",
  name,
  url,
  color,
  baseClassName = "",
  textClassName = "",
  icon = true,
}: {
  className?: string;
  name: string;
  url: string;
  color: string;
  baseClassName?: string;
  textClassName?: string;
  icon?: boolean;
}) {
  const [isHovered, setHovered] = useState<boolean>(false);
  const { containerSpring } = useSponsorSpring(isHovered);

  return (
    <animated.a
      style={{ background: color.toLowerCase().toString(), ...containerSpring }}
      className={`text-black p-3 hover:shadow-xl transition-shadow duration-300 rounded-md relative ${
        isHovered ? "z-40" : "z-30"
      } ${className}`}
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {icon ? <img
        alt={name}
        src={`/sponsors/${name.toLowerCase()}_logo.png`}
        className={`${baseClassName} h-28 m-auto`}
      /> : null}
      <Image
        src={`/sponsors/${name.toLowerCase()}_text.png`}
        width={300}
        height={60}
        alt="Sponsor image"
        className={`w-full h-auto aspect-auto ${textClassName}`}
      />
    </animated.a>
  );
}
