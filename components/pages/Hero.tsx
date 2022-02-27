import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed, { TypedOptions } from "typed.js";

export default function Hero() {
  const el = useRef(null);
  const typed = useRef<any>(null);
  useEffect(() => {
    const options: TypedOptions = {
      strings: [
        "a place for kids to grow",
        "a positive learning environment",
        "a hands-on engaging class",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
    };
    if (true) {
      typed.current = new Typed(el.current!, options);
      return () => typed.current.destroy();
    }
  }, []);
  return (
    <div className="flex flex-col sm:flex-row my-5" id="hero">
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
          <Link href="/signup">
            <a className="font-writing m-auto text-xl underline-offset-1 rounded-md bg-green px-5 py-2 text-black">
              Sign Ups
            </a>
          </Link>
        </div>
      </div>
      <div className="w-full">
        <video
          controls
          src="/homepage.mp4"
          poster="/logo.svg"
          className="aspect-video w-full bg-white"
        />
      </div>
    </div>
  );
}
