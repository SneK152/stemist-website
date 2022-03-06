import { scrollTo } from "@/lib/scroll";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { ReactNode } from "react";

export default function Banner({
  image,
  children,
  full,
}: {
  image: string;
  children: ReactNode;
  full?: boolean;
}) {
  return (
    <div
      className={`${
        full ? "h-screen" : "h-[50vh] mb-10"
      } object-cover relative`}
    >
      <Image
        src={image}
        alt="Background for page"
        layout="fill"
        className="-z-10 pointer-events-none h-full w-full select-none absolute object-cover"
        priority
        quality={90}
      />
      <div className="flex h-full w-full items-center justify-center">
        <div
          className={`bg-green absolute py-8 flex h-auto w-3/4 flex-col justify-center gap-3 overflow-hidden break-words rounded-3xl border-2 border-white bg-opacity-60 p-4 text-center text-white backdrop-blur-md sm:w-3/4 z-10 ${
            full ? "" : "sm:w-3/4 sm:h-56"
          }`}
        >
          {children}
        </div>
        {full && (
          <div className="absolute h-full w-full flex justify-center items-end">
            <button className="animate-bounce" onClick={scrollTo("#hero")}>
              <ChevronDownIcon className="h-12" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
