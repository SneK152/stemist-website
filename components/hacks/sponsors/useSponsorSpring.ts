import { useSpring } from "react-spring";

export default function useSponsorSpring(state: boolean, color: string) {
  const containerSpring = useSpring({
    scale: state ? 1.1 : 1,
    background: color,
    config: { mass: 1, tension: 500, friction: 50 },
  });

  return { containerSpring };
}
