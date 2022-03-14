import Image from "next/image";
import { ReactNode } from "react";

export default function Section({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <>
      <div className="justify-center grid grid-cols-8 w-12/13 font-display bg-white px-6 text-elipsis py-3 rounded-md gap-3">
        <div className="col-span-5">
          <h1 className="text-3xl font-bold py-2">{title}</h1>
          <p className="text-xl font-sans text-clip">{children}</p>
        </div>
        <div className="col-span-3 relative">
          <Image
            src="/homepage.webp"
            alt="Placeholder Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
}
