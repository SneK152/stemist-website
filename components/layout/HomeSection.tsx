import Image from "next/image";
import { ReactNode } from "react";

export default function HomeSection({
  children,
  title,
  image,
  side,
  position,
  bgtheme,
}: {
  children: ReactNode;
  title: string;
  image: string;
  side: "left" | "right";
  position: string;
  bgtheme: "black" | "white";
}) {
  return (
    <section
      className={`${
        bgtheme === "black" ? "bg-steve-dark" : "bg-steve-light"
      } cropped`}
    >
      <div className="padded-section justify-center grid grid-cols-9 min-h-[25rem] font-display text-elipsis py-3 gap-6">
        <div
          className={`lg:col-span-5 col-span-9 my-auto order-1 ${
            side === "left" ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <h1
            className={`text-4xl font-bold py-4 text-transparent bg-clip-text bg-gradient-to-l ${
              bgtheme === "black"
                ? "from-steve-light to-slate-300"
                : "from-steve-purple to-steve-red"
            }`}
          >
            {title}
          </h1>
          <p
            className={`${
              bgtheme === "black" ? "text-steve-light" : "text-steve-dark"
            } text-xl font-sans font-light text-clip`}
          >
            {children}
          </p>
        </div>
        <figure
          className={`lg:col-span-4 col-span-9 relative gap-1 flex flex-col order-2 ${
            side === "right" ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="sm:h-80 py-3 h-56 lg:h-full w-full relative">
            <Image
              src={image}
              alt="Placeholder Image"
              layout="fill"
              objectFit="cover"
              objectPosition={position}
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
