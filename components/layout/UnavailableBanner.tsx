import { ReactNode } from "react";
import PartialBanner from "./PartialBanner";

export default function UnavailableBanner({ title }: { title: ReactNode }) {
  return (
    <PartialBanner
      title={<span className="text-2xl md:text-3xl lg:text-5xl">{title}</span>}
    />
  );
}
