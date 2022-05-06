import { useSpring } from "react-spring";

export default function useSponsorSpring(state: boolean) {
  const containerSpring = useSpring({
    scale: state ? 1.1 : 1,
    config: { mass: 1, tension: 500, friction: 50 },
  });

  return { containerSpring };
}
