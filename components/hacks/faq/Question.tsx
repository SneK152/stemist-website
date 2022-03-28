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
  });
  return (
    <div className="rounded-md flex flex-col">
      <div
        className={`rounded-lg text-2xl ${
          open ? "rounded-b-none" : ""
        } text-left flex h-20 pl-2 py-3 transition-all bg-blue-500 bg-opacity-60 backdrop-blur-sm font-display cursor-pointer`}
        onClick={() => setOpen((o) => !o)}
      >
        {question}
      </div>
      <animated.div
        style={answerSpring}
        className={`rounded-lg pl-2 ${
          open ? "opacity-100" : "opacity-0 select-none"
        } font-writing transition-opacity rounded-t-none bg-gray-200 text-black`}
      >
        {answer}
      </animated.div>
    </div>
  );
}
