import useOnScreen from "@/lib/hooks/useOnScreen";
import { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";

export default function Counter(props: {
  number: number;
  text: string;
  symbol?: string;
  before?: string;
  className?: string;
}) {
  const countUpRef = useRef(null);
  const { start, reset } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: props.number,
    // duration: 3,
    useEasing: true,
    separator: ",",
  });
  const isVisible = useOnScreen(countUpRef);
  useEffect(() => {
    start();
    return () => reset();
  }, [isVisible, start, reset]);
  return (
    <div className="flex flex-col gap-2 justify-center">
      <span
        className={`text-5xl font-semibold w-full text-center ${
          props.className || ""
        }`}
      >
        {props.before && <span>{props.before}</span>}
        <span ref={countUpRef}></span>
        {props.symbol && <span>{props.symbol}</span>}
      </span>
      <div className="text-center text-lg font-medium">{props.text}</div>
    </div>
  );
}
