import { useSpring, animated as a } from "react-spring";
import React, { useState } from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  start?: string;
  end?: string;
  type?: "button" | "reset" | "submit";
}

export default function Button({
  className = "px-10 py-4 m-5 rounded-lg font-bold text-white",
  children,
  start = "#4C514A",
  end = "#6C3B2A",
  type = "button",
}: ButtonProps) {
  const [pressed, setPressed] = useState(false);

  let ButtonSpring = useSpring({
    scale: pressed ? 0.8 : 1,
    background: pressed ? end : start,
  });

  return (
    <a.button
      style={{
        transform: ButtonSpring.scale.to((scale: any) => `scale(${scale})`),
        background: ButtonSpring.background,
      }}
      className={className}
      onMouseDown={() => setPressed(true)}
      onClick={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      type={type}
    >
      {children}
    </a.button>
  );
}
