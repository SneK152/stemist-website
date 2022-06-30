import { ReactNode } from "react";
import Image from "next/image";

export default function Card(props: {
  title: string;
  children: ReactNode;
  className?: string;
  image?: string;
}) {
  return (
    <div
      className={`relative z-40 w-full space-y-3 rounded-md p-3 shadow-lg ${
        props.className || ""
      } `}
    >
      {props.image
        ? <div
            className="relative w-full h-full text-center bg-transparent bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: `url('${props.image}')` }}
          ></div>
        : null}
      <h1 className="font-display z-20 text-center text-4xl font-semibold">
        {props.title}
      </h1>
      <div className="z-20 text-center font-normal">{props.children}</div>
    </div>
  );
}
