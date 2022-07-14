import { ReactNode } from "react";
import Banner from "./Banner";

interface PartialBannerProps {
  title: ReactNode;
  children?: ReactNode;
  subheader?: ReactNode;
  banner?: boolean;
}

export default function PartialBanner({
  title,
  children,
  subheader,
  banner = true,
}: PartialBannerProps) {
  return (
    <Banner image="/homepage.jpg" banner={banner}>
      <div className={`${children ? "py-6" : ""}`}>
        <h1 className="text-left font-normal font-display text-4xl md:text-5xl lg:text-7xl">
          {title}
        </h1>
        {subheader && (
          <h2 className="text-left font-sans font-extralight text-base md:text-lg lg:text-2xl md:mt-3">
            {subheader}
          </h2>
        )}
        {children}
      </div>
    </Banner>
  );
}
