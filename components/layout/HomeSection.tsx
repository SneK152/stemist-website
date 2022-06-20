import Image from "next/image";
import { ReactNode } from "react";

export default function HomeSection({
  children,
  title,
  image,
  side,
}: {
  children: ReactNode;
  title: string;
  image: string;
  side: "left" | "right";
}) {
  return (
    <section className="justify-center grid grid-cols-9 w-11/13 min-h-[20rem] font-display sm:px-6 px-4 text-elipsis py-3 gap-6">
      <div
        className={`lg:col-span-5 col-span-9 my-auto order-1 ${
          side === "left" ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <h1 className="text-4xl font-medium py-2">{title}</h1>
        <p className="text-xl font-sans font-light text-clip">{children}</p>
      </div>
      <figure
        className={`lg:col-span-4 col-span-9 relative gap-1 flex flex-col order-2 ${
          side === "right" ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="sm:h-80 h-56 lg:h-full w-full relative">
          <Image
            src={image}
            alt="Placeholder Image"
            layout="fill"
            objectFit="cover"
            objectPosition="top left"
          />
        </div>
      </figure>
    </section>
  );
}
