import useClickOutside from "@/lib/hooks/useClickOutside";
import { MinusIcon, PlusIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
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
  const questionRef = useRef(null);
  useClickOutside(questionRef, () => setOpen(false));
  return (
    <div className="rounded-md flex flex-col" ref={questionRef}>
      <div
        className={`rounded-lg text-2xl ${
          open ? "rounded-b-none" : ""
        } text-left flex items-center gap-3 pl-2 py-3 transition-all backdrop-blur-sm font-display cursor-pointer`}
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
          open ? "opacity-100 py-3" : "opacity-0 select-none"
        } font-writing transition-opacity bg-gray-200 text-black`}
      >
        {answer}
      </animated.div>
    </div>
  );
}
