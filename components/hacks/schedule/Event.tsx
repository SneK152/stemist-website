import { useState } from "react";
import { animated, useSpring } from "react-spring";

interface ExportProps {
  name: string;
  time: Date;
  description: string;
}

export default function Event({ name, time, description }: ExportProps) {
  let [hovered, setHovered] = useState(false);

  let dropped = useSpring({
    opacity: hovered ? 1 : 0,
    borderTop: hovered ? "0.05px solid" : "0rem solid",
  });

  let mainContainer = useSpring({
    height: hovered ? "5rem" : "3rem",
  });

  let time_info = {
    day: time.getDay(),
    hour: time.getHours(),
    min: time.getMinutes(),
    full_year: time.getFullYear(),
    local_time: time.toLocaleString(),
    local_date: time.toLocaleDateString(),
    local_overall: time.toLocaleTimeString(),
  };

  return (
    <animated.div
      style={mainContainer}
      className={`p-3 group hover:pb-3 rounded-md bg-gray-300 hover:bg-gray-200`}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="grid grid-cols-5 group">
        <div className="group-hover:pb-1 col-span-1 font-bold">{name}</div>
        <div className="text-start col-span-2 font-semibold">
          {time_info.local_time} on {time_info.local_date}
        </div>
      </div>
      <animated.div style={dropped} className={`justify-center pt-2 pb-6`}>
        {description}
      </animated.div>
    </animated.div>
  );
}
