/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import { ReactNode } from "react";

export default function Banner({
  image,
  children,
  className,
  full,
}: {
  image: string;
  children: ReactNode;
  className?: string;
  full?: boolean;
}) {
  return (
    <div
      className={`${
        full ? "h-[70vh]" : "h-[50vh] mb-10"
      } object-cover relative`}
    >
      <img
        src={image}
        alt="Background for page"
        // layout="fill"
        className="-z-10 pointer-events-none h-full w-full select-none absolute object-cover"
        // priority
      />
      <div className="flex h-full w-full items-center justify-center">
        <div
          className={`min-h-2/5 bg-green absolute flex h-auto w-3/4 flex-col justify-center gap-3 overflow-hidden break-words rounded-3xl border-2 border-white bg-opacity-60 p-4 text-center text-white backdrop-blur-md sm:w-3/4 ${
            className || ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
