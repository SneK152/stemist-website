import Banner from "@/components/layout/Banner";
import { scrollTo } from "@/lib/scroll";
import dynamic from "next/dynamic";
import Link from "next/link";

const Hero = dynamic(() => import("@/components/pages/Hero"));
const Homepage = dynamic(() => import("@/components/pages/Homepage"));

export default function Index() {
  return (
    <div className="-mt-16">
      <Banner image="/homepage.webp" full>
        <span className="block font-sans text-sm sm:text-lg">
          Learn STEM hands-on. Engage with fellow students. Have the experience
          of a lifetime.
        </span>
        <h1 className="font-display text-4xl font-bold md:text-6xl lg:text-8xl xl:text-8xl">
          STEMist Education
        </h1>
        <p className="font-writing px-5 text-sm sm:px-10 sm:text-xl md:px-20">
          <span className="block italic">
            &quot;Tell Me and I Forget; Teach Me and I May Remember; Involve Me
            and I Learn &quot;
          </span>
          <span className="block text-sm sm:text-base">-Confucius</span>
        </p>
        <div className="flex justify-center gap-3 text-lg">
          <button
            className="bg-white bg-opacity-10 text-white py-2 px-3 shadow-md rounded-lg hover:rounded-2xl hover:shadow-xl transition-all duration-300"
            onClick={scrollTo("#learnmore")}
          >
            Learn More
          </button>
          <Link href="/signup">
            <a className="bg-blue-500 py-2 px-3 shadow-md rounded-lg hover:rounded-2xl hover:shadow-xl transition-all duration-300">
              Sign Up
            </a>
          </Link>
        </div>
      </Banner>
      <Hero />
      <Homepage />
    </div>
  );
}
