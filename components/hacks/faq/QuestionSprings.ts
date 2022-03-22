import { green, white } from "../Colors";
import { useSpring } from "react-spring";

export default function useQuestionSprings(state: boolean) {
  const questionSpring = useSpring({
    background: white,
  });
  const answerSpring = useSpring({
    background: green,
  });

  return { questionSpring, answerSpring };
}
