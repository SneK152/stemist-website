import { ReactNode } from "react";
import Banner from "./Banner";

export default function PartialBanner({ title }: { title: ReactNode }) {
  return (
    <Banner image="/homepage.webp">
      <h1 className="font-display text-3xl font-bold md:text-5xl lg:text-7xl">
        {title}
      </h1>
    </Banner>
  );
}
