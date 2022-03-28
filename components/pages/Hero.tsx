import { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";
import useOnScreen from "@/lib/hooks/useOnScreen";
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/outline";
import useWindowSize from "@/lib/hooks/useWindowSize";

export default function Hero() {
  const el = useRef<HTMLDivElement>(null);
  const typed = useRef<any>(null);
  const heroDiv = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(heroDiv);

  useEffect(() => {
    const options: TypedOptions = {
      strings: ["engaging", "hands-on", "growth", "the class for you!"],
      typeSpeed: 80,
      backSpeed: 40,
    };
    if (isVisible) {
      typed.current = new Typed(el.current!, options);
      return () => typed.current.destroy();
    }
  }, [isVisible]);

  const { width } = useWindowSize();

  return (
    <div
      className="flex flex-col max-w-[100rem] px-2 sm:px-6 lg:px-6 m-auto sm:flex-row my-5 scroll-mt-20"
      ref={heroDiv}
    >
      <div className="w-full grid place-items-center">
        <div className="w-full text-center">
          <h1 className="sm:text-5xl text-3xl font-bold">
            STEMist is <span ref={el}></span>
          </h1>
          <br />
          <p className="font-writing text-xl mb-5 max-w-[40ch] m-auto">
            Watch our video to learn more{" "}
            {width! > 640 ? (
              <ArrowRightIcon className="h-4 w-4 inline-block" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 inline-block" />
            )}
          </p>
        </div>
      </div>
      <div className="w-full">
        <video
          src="/homepage.mp4"
          poster="/logo.svg"
          controls
          className="bg-white aspect-video h-full w-full"
        />
      </div>
    </div>
  );
}
