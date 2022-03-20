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
    <>
      {width! > 640 && (
        <div className="col-span-1">
          <GiftIcon className="h-12 rounded-full shadow-md p-2 group-hover:shadow-lg group-hover:border group-hover:border-gray-400 transition-all" />
        </div>
      )}
      <div className="sm:col-span-5 col-span-6 font-semibold">{name}</div>
      <div className="col-span-6" {...hoverOptions}>
        {status}
      </div>
    </>
  );
}
