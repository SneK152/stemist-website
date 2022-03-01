import { RefObject, useEffect, useState } from "react";

export default function useOnScreen(ref: RefObject<HTMLDivElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    observer.observe(ref.current!);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}
