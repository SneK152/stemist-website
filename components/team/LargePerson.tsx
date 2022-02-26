import Image from "next/image";
import PersonProps from "@/lib/types/PersonProps";

export default function Person(props: PersonProps) {
  return (
    <div className="group flex h-full flex-row items-center justify-center gap-5">
      <div
        className={`${props.person.description ? "group-hover:hidden" : ""}`}
      >
        <Image
          src={props.person.image}
          height={130}
          width={130}
          layout="fixed"
          className={`max-w-none rounded-full object-cover`}
          alt="User profile"
        />
      </div>
      <h1 className="font-display space-y-1 text-3xl font-normal">
        <span
          className={`${
            props.person.description ? "group-hover:hidden" : ""
          } transition-all`}
        >
          {props.person.name}
          <br />
          <div className="font-writing flex flex-wrap gap-1">
            {props.person.positions.map(
              (pos, index) =>
                !props.person.positions.includes(pos + " Lead") && (
                  <span
                    className="m-0.5 w-min whitespace-nowrap rounded-3xl bg-gray-200 py-1 px-2 text-sm"
                    key={index}
                  >
                    {pos}
                  </span>
                )
            )}
          </div>
        </span>
        {props.person.description && (
          <p className="hidden max-w-[40ch] font-sans text-lg transition-all group-hover:block">
            {props.person.description}
          </p>
        )}
      </h1>
    </div>
  );
}
