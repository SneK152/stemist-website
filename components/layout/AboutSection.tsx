import Image from "next/image";
import { ReactNode } from "react";

export default function Section({
  children,
  title,
  image,
}: {
  children: ReactNode;
  title: string;
  image: string;
}) {
  return (
    <>
      <div className="justify-center grid grid-cols-8 w-12/13 min-h-[20rem] font-display bg-white px-6 text-elipsis py-3 rounded-sm gap-3">
        <div className="lg:col-span-5 col-span-8 my-auto">
          <h1 className="text-4xl font-bold py-2">{title}</h1>
          <p className="text-xl font-sans text-clip">{children}</p>
        </div>
        <div className="lg:col-span-3 h-56 lg:h-auto col-span-8 relative">
          <Image
            src={image}
            alt="Placeholder Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
}
