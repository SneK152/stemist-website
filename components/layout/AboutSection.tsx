import Image from "next/image";
import { ReactNode } from "react";

export default function Section({
  children,
  title,
  image,
  caption,
}: {
  children: ReactNode;
  title: string;
  image: string;
  caption: string;
}) {
  return (
    <>
      <div className="justify-center grid grid-cols-8 w-12/13 min-h-[30rem] font-display bg-white px-6 text-elipsis py-3 rounded-sm gap-3">
        <div className="lg:col-span-5 col-span-8 my-auto">
          <h1 className="text-5xl font-bold py-2">{title}</h1>
          <p className="text-2xl font-sans text-clip">{children}</p>
        </div>
        <div className="lg:col-span-3 col-span-8 relative gap-1 flex flex-col">
          <div className="h-80 lg:h-full w-full relative">
            <Image
              src={image}
              alt="Placeholder Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <caption className="text-lg font-writing text-gray-600">
            {caption}
          </caption>
        </div>
      </div>
    </>
  );
}
