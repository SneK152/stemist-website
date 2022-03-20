import { useState } from "react";

export default function useHover(optionOne: string, optionTwo: string) {
  let [hover, setHovered] = useState(false);

  return {
    status: hover ? `${optionTwo} (by ${optionOne})` : optionTwo,
    hoverOptions: {
      onMouseOver: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    },
  };
}
