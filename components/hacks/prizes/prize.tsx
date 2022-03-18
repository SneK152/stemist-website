import React from "react";
import { GiftIcon } from "@heroicons/react/outline";

export interface PrizeProps {
  name: string;
  description: string;
  presented_by: string;
}

export default function Prize({ name, description, presented_by }: PrizeProps) {
  return (
    <div className="grid grid-cols-9 hover:bg-gray-100 rounded-lg text-black p-2">
      <GiftIcon className="col-span-1 h-10" />
      <div className="col-span-3 grid-rows-4">
        <div className="row-span-2">{name}</div>
        <div className="row-span-2">{presented_by}</div>
      </div>
      <div className="col-span-5">{description}</div>
    </div>
  );
}
