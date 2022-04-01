import { useState } from "react";
import { animated, useSpring } from "react-spring";

export default function Question({
  answer,
  question,
}: {
  answer: string;
  question: string;
}) {
  const [open, setOpen] = useState(false);
  const answerSpring = useSpring({
    height: open ? "6rem" : "0rem",
    backgroundColor: !open ? "transparent" : "white",
    paddingTop: !open ? "0rem" : "0.75rem",
  });
  return (
    <div className="rounded-md flex flex-col">
      <div
        className={`rounded-lg text-2xl ${
          open ? "rounded-b-none" : ""
        } text-left flex h-20 pl-2 py-3 transition-all bg-green bg-opacity-70 backdrop-blur-sm font-display cursor-pointer`}
        onClick={() => setOpen((o) => !o)}
      >
        {question}
      </div>
      <animated.div
        style={answerSpring}
        className={`rounded-lg pl-2 ${
          open ? "opacity-100 py-3" : "opacity-0 select-none"
        } font-writing transition-opacity rounded-t-none bg-gray-200 text-black`}
      >
        {answer}
      </animated.div>
    </div>
  );
}
