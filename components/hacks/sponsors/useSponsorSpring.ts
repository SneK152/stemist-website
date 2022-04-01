import { useSpring } from "react-spring";

export default function useSponsorSpring(state: boolean, color: string) {
  const containerSpring = useSpring({
    scale: state ? 1.1 : 1,
    background: color,
  });

  return { containerSpring };
}
