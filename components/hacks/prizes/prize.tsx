import React from "react";
import { GiftIcon } from "@heroicons/react/outline";
import useHover from "./useHover";
import useWindowSize from "@/lib/hooks/useWindowSize";

export interface PrizeProps {
  name: string;
  prizes: string;
  presented_by: string;
}

export default function Prize({ name, prizes, presented_by }: PrizeProps) {
  let { hoverOptions, status } = useHover(presented_by, prizes);
  const { width } = useWindowSize();
  return (
    <div
      className="grid grid-cols-12 items-center group py-1 transition-all px-5 hover:bg-black hover:bg-opacity-10"
      {...hoverOptions}
    >
      {width! > 640 && (
        <div className="col-span-1">
          <GiftIcon className="h-12 p-2 rounded-full shadow-md" />
        </div>
      )}
      <div className="sm:col-span-5 col-span-6 font-semibold">{name}</div>
      <div className="col-span-6">{status}</div>
    </div>
  );
}
