import useOnScreen from "@/lib/hooks/useOnScreen";
import { scrollTo } from "@/lib/scroll";
import { Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { Fragment, ReactNode, useRef } from "react";

export default function Banner({
  image,
  children,
  full,
  href = "#hero",
}: {
  image: string;
  children: ReactNode;
  full?: boolean;
  href?: string;
}) {
  const titleDiv = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(titleDiv);
  return (
    <>
      <div className="fixed w-screen z-50 left-0 top-0 h-screen flex justify-end items-end pointer-events-none">
        <Transition
          show={!onScreen}
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-50 scale-50"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-50 scale-50"
        >
          <button
            className="z-50 pointer-events-auto bg-green bg-opacity-80 backdrop-blur-sm rounded-full p-2 m-5"
            onClick={scrollTo("html")}
          >
            <ChevronUpIcon className="h-8 w-8" />
          </button>
        </Transition>
      </div>
      <div
        className={`${
          full ? "h-screen" : "sm:h-[50vh] h-[30vh] mb-10"
        } object-cover relative`}
        ref={titleDiv}
      >
        <Image
          src={image}
          alt="Background for page"
          layout="fill"
          className="-z-10 blur-sm pointer-events-none h-full w-full select-none absolute object-cover"
          priority
        />
        <div className="flex h-full w-full items-center justify-center">
          <div
            className={`absolute py-8 flex flex-col justify-center gap-3 overflow-hidden break-words rounded-xl p-4 bg-opacity-20 bg-black text-center text-white backdrop-blur-sm backdrop-brightness-75 z-20 ${
              full
                ? "h-full w-full"
                : "border-white border-2 h-auto w-3/4 sm:w-3/4 sm:h-56"
            }`}
          >
            {children}
            {full && (
              <div className="absolute h-[90vh] -translate-x-4 sm:h-full w-full flex justify-center items-end -z-[1]">
                <button className="animate-bounce" onClick={scrollTo(href)}>
                  <ChevronDownIcon className="h-12" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
