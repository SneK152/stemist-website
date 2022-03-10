import { useState } from "react";
import { animated } from "react-spring";
import useEventSpring from './EventSpring';
import useTime from './Time';
interface ExportProps {
  name: string;
  time: Date;
  description: string;
}

export default function Event({ name, time, description }: ExportProps) {
  let [hovered, setHovered] = useState(false);
  let timestamp = useTime(time)
  let {dropped, mainContainer} = useEventSpring(hovered)

  return (
    <animated.div
      style={mainContainer}
      className={`text-black hover:h-20 p-3 h-12 group hover:pb-3 rounded-md bg-white hover:bg-gray-100`}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="grid grid-cols-5 group">
        <div className="group-hover:pb-1 col-span-1 font-bold">{name}</div>
        <div className="text-start col-span-2 font-semibold">
          {timestamp}
        </div>
      </div>
      <animated.p style={dropped} className={`text-black opacity-100 justify-center pt-2`}>
        {description}
      </animated.p>
    </animated.div>
  );
}
