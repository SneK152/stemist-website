import React from "react";
import useHover from "./useHover";

export interface PrizeProps {
  name: string;
  prizes: string;
  presented_by: string;
  type: "winners" | "everyone" | "raffle";
}

export default function Prize({ name, prizes, presented_by }: PrizeProps) {
  let { hoverOptions, status } = useHover(presented_by, prizes);
  return (
    <div
      className="grid grid-cols-12 items-center group py-1 transition-all px-5 hover:bg-black hover:bg-opacity-10"
      {...hoverOptions}
    >
      <div className="col-span-6 font-semibold">{name}</div>
      <div className="col-span-6">{status}</div>
    </div>
  );
}
