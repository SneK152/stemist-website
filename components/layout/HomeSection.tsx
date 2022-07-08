import Image from "next/image";
import { ReactNode } from "react";

export default function HomeSection({
  children,
  title,
  image,
  side,
  className
}: {
  children: ReactNode;
  title: string;
  image: string;
  side: "left" | "right";
  className: string
}) {
  return (
    <section className={`${className} px-2 h-full w-screen justify-center grid grid-cols-9 min-h-[20rem] font-display text-elipsis py-5 gap-6`}>
      <div
        className={`lg:col-span-5 col-span-9 my-auto order-1 ${className} ${
          side === "left" ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <h1 className="text-4xl font-medium py-4">{title}</h1>
        <p className="text-xl font-sans font-light text-clip">{children}</p>
      </div>
      <figure
        className={`${className} lg:col-span-4 col-span-9 relative gap-1 flex flex-col order-2 ${
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
