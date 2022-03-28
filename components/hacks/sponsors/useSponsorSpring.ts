import { useSpring } from "react-spring";

export default function useSponsorSpring(state: boolean, color: string) {
  let containerSpring = useSpring({
    scale: state ? 1.2 : 1,
    background: color,
  });

  return { containerSpring };
}
