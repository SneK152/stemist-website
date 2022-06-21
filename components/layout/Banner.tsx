import useOnScreen from "@/lib/hooks/useOnScreen";
import { scrollTo } from "@/lib/scroll";
import { Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { Fragment, ReactNode, useRef } from "react";
import CTABanner from "./CTABanner";

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
            onClick={scrollTo("#top")}
            tabIndex={-1}
          >
            <ChevronUpIcon className="h-8 w-8" />
          </button>
        </Transition>
      </div>
      <CTABanner full={full} />
      <div
        className={`${
          full ? "h-screen" : "sm:h-[70vh] h-[50vh] mb-5"
        } object-cover relative`}
        ref={titleDiv}
      >
        <Image
          src={image}
          alt="Background for page"
          layout="fill"
          className="-z-10 pointer-events-none h-full w-full select-none absolute object-cover brightness-[.60]"
          priority
          objectPosition="bottom center"
        />
        <div className="h-full w-full -z-20 bg-black absolute" />
        <div
          className={`flex h-full w-full items-center ${
            full ? "justify-center" : "justify-start"
          }`}
        >
          <div
            className={`absolute py-8 flex flex-col justify-start short:justify-center gap-3 overflow-hidden break-words rounded-xl p-4 text-white z-20 -mt-0 ${
              full
                ? "min-h-full w-full bg-transparent text-center"
                : "bg-transparent h-auto sm:h-56 self-end pl-4 sm:pl-6 sm:translate-y-10 lg:translate-y-0 lg:pl-10"
            }`}
          >
            {children}
            {full && (
              <div className="absolute h-[90vh] -translate-x-4 sm:h-full w-full flex justify-center items-end -z-[1] -mt-20">
                <button
                  className="animate-bounce"
                  onClick={scrollTo(href)}
                  aria-label="Learn More"
                >
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
