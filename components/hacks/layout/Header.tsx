import Banner from "@/components/layout/Banner";
import Button from "@/components/layout/Button";
import Link from "next/link";

function Description() {
  return (
    <div className="px-2">
      <p className="mb-2 text-2xl font-semibold">From June 24th to June 26th</p>
      <Button
        href="/hacks/signup"
        backgroundColor="bg-blue-500"
        textColor="text-white"
      >
        Sign up!
      </Button>
    </div>
  );
}

export default function Header() {
  return (
    <div className="-mt-20">
      <Banner image="/homepage.jpeg" full href="#about">
        <h1 className="font-display text-3xl font-bold md:text-5xl lg:text-7xl">
          STEMist Hacks
        </h1>
        <Description />
      </Banner>
    </div>
  );
}
