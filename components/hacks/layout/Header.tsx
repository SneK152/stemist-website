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
    <div className="w-full h-full p-5 text-center center justify-center">
      <PartialBanner title="STEMist Hacks">
        <Description />
      </PartialBanner>
      <div className="justify-center text-center m-auto">
        <ChevronDownIcon className="mx-auto justify-center h-10 animate-bounce" />
      </div>
    </div>
  );
}
