import useOnScreen from "@/lib/hooks/useOnScreen";
import React, { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import useHover from "./useHover";

export interface PrizeProps {
  name: number;
  prizes: string;
  presented_by: string;
  type: "winners" | "everyone" | "raffle";
}

export default function Prize({ name, prizes, presented_by }: PrizeProps) {
  let { hoverOptions, status } = useHover(presented_by, prizes);
  const countUpRef = useRef(null);
  const { start, reset } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: name,
    useEasing: true,
    separator: ",",
  });

  const isVisible = useOnScreen(countUpRef);
  useEffect(() => {
    start();
    return () => reset();
  }, [reset, start, isVisible]);
  return (
    <div
      className="grid grid-cols-12 items-center group py-1 transition-all px-5 hover:bg-black hover:bg-opacity-10"
      {...hoverOptions}
    >
      <div className="col-span-6 font-semibold font-writing">
        $<span ref={countUpRef}></span>
      </div>
      <div className="col-span-6">{status}</div>
    </div>
  );
}
