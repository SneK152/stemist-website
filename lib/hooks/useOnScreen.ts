import { RefObject, useEffect, useState } from "react";

export default function useOnScreen(
  ref: RefObject<HTMLElement>,
  initial: boolean = true
) {
  const [isIntersecting, setIntersecting] = useState(initial);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    observer.observe(ref.current!);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}
