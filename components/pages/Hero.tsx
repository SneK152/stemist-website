import { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";
import useOnScreen from "@/lib/hooks/useOnScreen";
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/outline";
import useWindowSize from "@/lib/hooks/useWindowSize";
import HomeCarousel from "./HomeCarousel";

export default function Hero() {
  const el = useRef<HTMLDivElement>(null);
  const typed = useRef<any>(null);
  const heroDiv = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const isVisible = useOnScreen(heroDiv);

  useEffect(() => {
    if (video.current) {
      for (let i = 0; i < video.current.textTracks.length; i++) {
        video.current.textTracks[i].mode = "hidden";
      }
    }
  }, [video]);

  useEffect(() => {
    const options: TypedOptions = {
      strings: ["engaging", "interactive", "growth", "the class for you!"],
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
    <div className="bg-blue my-5">
      <div className="text-black sm:grid-cols-2 lg:grid-cols-4 gap-3 grid-cols-1 py-10 px-24 m-auto place-items-center sm:min-h-[18rem] min-h-[30rem] grid scroll-mt-24 padded-section">
        <HomeCounter
          number={100}
          symbol="+"
          text="Interactive presentations created"
        />
        <HomeCounter
          number={1.2}
          symbol="k"
          text="Dollars raised for charity"
        />
        <HomeCounter
          number={30}
          symbol="+"
          text="Highly qualified instructors"
        />
        <HomeCounter
          number={250}
          symbol="+"
          text="Students taught nationwide"
        />
      </div>
    </div>
    {/* <div className="w-full grid place-items-center">
        <div className="w-full text-center">
          <h1 className="lg:text-5xl sm:text-3xl text-2xl font-bold">
            STEMist is <span ref={el}></span>
          </h1>
          <br />
          <p className="font-writing text-xl mb-5 max-w-[40ch] m-auto">
            Watch our video to learn more{" "}
            {width! >= 640 ? (
              <ArrowRightIcon className="h-4 w-4 inline-block" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 inline-block" />
            )}
          </p>
        </div>
      </div>
      <div className="w-full">
        <HomeCarousel />
        {/* <video
          poster="/logo.svg"
          preload="none"
          controls
          playsInline
          ref={video}
          className="bg-white aspect-video h-full w-full"
        >
          <track
            src="/homepage-subtitles.vtt"
            label="English"
            kind="subtitles"
            srcLang="en"
            default
          />
          <track
            src="/homepage-captions.vtt"
            label="English"
            kind="captions"
            srcLang="en"
            default
          />
          <source src="/homepage.mp4" type="video/mp4" />
        </video> */}
  );
}
