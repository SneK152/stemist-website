import { useSpring, animated } from "react-spring";
import { useState } from "react";
import useQuestionSprings from "./QuestionSprings";

export default function Question({
  answer,
  question,
}: {
  answer: string;
  question: string;
}) {
  let arrow = "▼";

  const [isToggled, setToggle] = useState(false);
  const arrowSpring = useSpring({
    y: isToggled ? 180 : 0,
  });

  let { answerSpring, questionSpring } = useQuestionSprings(isToggled);

  return (
    <div
      onClick={() => setToggle(!isToggled)}
      className="cursor-pointer max-h-fit h-fit mx-2 px-3 text-2xl rounded-md pb-3"
    >
      <animated.div
        style={questionSpring}
        className="cursor-pointer rounded-lg text-left flex pl-2 py-3"
        onClick={() => setToggle(!isToggled)}
      >
        {question} ?
        <animated.p
          className={`cursor-pointer pl-2`}
          onClick={() => setToggle(!isToggled)}
          style={{
            transform: arrowSpring.y.to((y) => `rotateX(${y}deg)`),
          }}
        >
          {arrow}
        </animated.p>
      </animated.div>
      <animated.div style={answerSpring} className={`rounded-lg pl-2 py-3`}>
        {isToggled ? answer : null}
      </animated.div>
    </div>
  );
}
