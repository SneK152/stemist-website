import { MinusIcon, PlusIcon } from "@heroicons/react/outline";
import { ReactNode, useState } from "react";
import { animated, useSpring } from "react-spring";

export default function Question({
  answer,
  question,
}: {
  answer: ReactNode;
  question: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const answerSpring = useSpring({
    height: open ? "8rem" : "0rem",
    transform: open ? "translate(0,0)" : "translate(0,10px)",
    opacity: open ? 1 : 0,
  });
  const containerSpring = useSpring({
    height: open ? "11rem" : "3rem",
  });
  return (
    <animated.div className="rounded-md flex flex-col" style={containerSpring}>
      <div
        className={`rounded-lg sm:text-lg md:text-xl xl:text-2xl ${
          open ? "rounded-b-none" : ""
        } text-left flex items-center gap-3 pl-2 py-3 transition-all font-display cursor-pointer`}
        onClick={() => setOpen((o) => !o)}
      >
        {!open ? (
          <PlusIcon className="w-5 h-5 inline-block" />
        ) : (
          <MinusIcon className="w-5 h-5 inline-block" />
        )}
        {question}
      </div>
      <animated.div
        style={answerSpring}
        className={`rounded-lg pl-2 ${
          open ? "" : "select-none -z-10"
        } font-display bg-transparent`}
      >
        {answer}
      </animated.div>
    </animated.div>
  );
}
