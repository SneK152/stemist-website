import Banner from "@/components/layout/Banner";
import Link from "next/link";

function Description() {
  return (
    <div className="py-3 px-2">
      <p className="mb-8 text-lg font-semibold">From June 24th to June 26th</p>
      <Link href={"/hacks/signup"}>
        <a className="text-white bg-blue-400 mt-5 py-3 px-6 rounded-lg font-semibold">
          Sign up for STEMist Hacks
        </a>
      </Link>
    </div>
  );
}

export default function Header() {
  return (
    <div className="-mt-16">
      <Banner image="/homepage.png" full href="#agenda">
        <h1 className="font-display text-3xl font-bold md:text-5xl lg:text-7xl">
          STEMist Hacks
        </h1>
        <Description />
      </Banner>
    </div>
  );
}
