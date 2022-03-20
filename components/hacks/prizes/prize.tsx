import React from "react";
import { GiftIcon } from "@heroicons/react/outline";
import useHover from "./useHover";

export interface PrizeProps {
  name: string;
  prizes: string;
  presented_by: string;
}

export default function Prize({ name, prizes, presented_by }: PrizeProps) {
  let { hoverOptions, status } = useHover(presented_by, prizes);

  return (
    <>
      <div className="col-span-1">
        <GiftIcon className="h-12 rounded-full shadow-md ml-5 p-2 group-hover:shadow-lg group-hover:border group-hover:border-gray-400 transition-all" />
      </div>
      <div className="col-span-5 font-semibold">{name}</div>
      <div className="col-span-6" {...hoverOptions}>
        {status}
      </div>
    </>
  );
}
