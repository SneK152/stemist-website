import Banner from "@/components/layout/Banner";
import PartialBanner from "@/components/layout/PartialBanner";
import { ChevronDownIcon } from "@heroicons/react/solid";

function Description() {
  return (
    <div className="py-3 px-2">
      <p className="text-lg font-semibold">From June 24th to June 26th</p>
      <button className="text-white bg-blue-400 animate-bounce duration-200 mt-5 py-3 px-6 rounded-lg font-semibold">
        Sign up!
      </button>
    </div>
  );
}

export default function Header() {
  return (
    <div className="-mt-16">
      <Banner image="/homepage.webp" full href="#agenda">
        <h1 className="font-display text-3xl font-bold md:text-5xl lg:text-7xl">
          STEMist Hacks
        </h1>
        <Description />
      </Banner>
    </div>
  );
}
