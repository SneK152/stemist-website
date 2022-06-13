import { ReactNode, Fragment } from "react";
import Banner from "./Banner";

interface PartialBannerProps {
  title: ReactNode;
  children?: ReactNode;
}

export default function PartialBanner({ title, children }: PartialBannerProps) {
  return (
    <Banner image="/homepage2.jpg">
      <div className={`${children ? "py-6" : ""}`}>
        <h1 className="text-center w-screen justify-center font-display text-4xl font-bold md:text-5xl lg:text-7xl">
          {title}
        </h1>
        {children}
      </div>
    </Banner>
  );
}
