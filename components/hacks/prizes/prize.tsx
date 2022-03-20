import React from "react";
import { GiftIcon } from "@heroicons/react/outline";
import useHover from "./useHover";

export interface PrizeProps {
  name: string;
  prizes: string;
  presented_by: string;
}

export default function Prize({ name, prizes, presented_by }: PrizeProps) {
  
  let {hoverOptions, status} = useHover(presented_by, prizes)

  return (
    <tr>
      <td>
        <GiftIcon className="h-12 rounded-full"  />
      </td>
      <td>
        {name}
      </td>
      <td {...hoverOptions} >
        {status}
      </td>
    </tr>
  );
}
