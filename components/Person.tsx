import Image from "next/image";
import { PersonProps } from "../lib/utils";

export default function Person(props: PersonProps) {
  return (
    <div className="flex h-full flex-row items-center justify-center gap-5 group">
      <div className={`${props.person.description && "group-hover:hidden"}`}>
        <Image
          src={props.person.image}
          height={90}
          width={90}
          layout="fixed"
          className={`object-cover max-w-none rounded-full`}
          alt="User profile"
        />
      </div>
      <h1 className="space-y-1 font-display text-lg font-normal">
        <span
          className={`${
            props.person.description && "group-hover:hidden"
          } transition-all`}
        >
          {props.person.name}
          <br />
          <div className="flex flex-wrap gap-1 font-writing">
            {props.person.positions.map((pos, index) => (
              <span
                className="m-0.5 rounded-xl w-min bg-gray-200 py-1 px-2 text-xs"
                key={index}
              >
                {pos}
              </span>
            ))}
          </div>
        </span>
        {props.person.description && (
          <p className="text-sm hidden group-hover:block transition-all font-sans max-w-[40ch]">
            {props.person.description}
          </p>
        )}
      </h1>
    </div>
  );
}
