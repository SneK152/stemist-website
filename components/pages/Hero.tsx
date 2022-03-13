import { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";
import useOnScreen from "@/lib/hooks/useOnScreen";
import dynamic from "next/dynamic";

const Plyr = dynamic(() => import("plyr-react"));

export default function Hero() {
  const el = useRef(null);
  const typed = useRef<any>(null);
  const heroDiv = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(heroDiv);

  const video = useRef<HTMLDivElement>(null);
  const videoIsVisible = useOnScreen(video);
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

  return (
    <div
      className="flex flex-col sm:flex-row my-5 bg-black bg-opacity-70 scroll-mt-20"
      id="hero"
      ref={heroDiv}
    >
      <div className="w-full grid place-items-center">
        <div className="w-full text-center">
          <h1 className="sm:text-7xl text-4xl font-bold font-display">
            What is STEMist?
          </h1>
          <h1 className="sm:text-5xl m-3 text-3xl">
            STEMist is <span ref={el}></span>
          </h1>
          <p className="font-writing text-xl mb-5">
            Watch our video to learn more about STEMist and why you should sign
            up today!
          </p>
        </div>
      </div>
      <div className="w-full" ref={video}>
        {videoIsVisible && (
          <Plyr
            source={{
              sources: [{ src: "/homepage.mp4" }],
              type: "video",
              poster: "/logo.svg",
            }}
          />
        )}
      </div>
    </div>
  );
}
