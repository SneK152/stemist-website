import { useState } from "react";
import { animated } from "react-spring";
import useEventSpring from "./EventSpring";
import useTime from "./Time";
interface ExportProps {
  name: string;
  time: Date;
  description: string;
}

export default function Event({ name, time, description }: ExportProps) {
  let timestamp = useTime(time);

  return (
    <div
      className={`text-black p-3 h-auto rounded-md bg-white hover:bg-gray-200 transition-colors`}
    >
      <div className="grid grid-cols-5">
        <div className="col-span-1 font-bold">{name}</div>
        <div className="text-start col-span-4 font-semibold">{timestamp}</div>
      </div>
      <p
        className={`text-black opacity-100 justify-center border-t-[0.05px] border-black pt-2`}
      >
        {description}
      </p>
    </div>
  );
}
