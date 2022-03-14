import { green } from "../Colors";
import { useSpring } from "react-spring";

export default function useQuestionSprings(state: boolean) {
  const questionSpring = useSpring({
    background: state ? "#3b82f6" : green,
    borderBottomLeftRadius: !state ? "0.5rem" : "0rem",
    borderBottomRightRadius: !state ? "0.5rem" : "0rem",
  });
  const answerSpring = useSpring({
    transform: state ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
    opacity: state ? 1 : 0,
    background: state ? green : "white",
    borderTopLeftRadius: !state ? "0.5rem" : "0rem",
    borderTopRightRadius: !state ? "0.5rem" : "0rem",
  });

  return { questionSpring, answerSpring };
}
