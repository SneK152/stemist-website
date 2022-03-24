import Person from "@/lib/types/Person";
import { FC, ReactNode } from "react";
import PersonProps from "@/lib/types/PersonProps";
import useWindowSize from "@/lib/hooks/useWindowSize";

interface TeamSectionProps {
  people: Person[];
  children?: ReactNode;
  component: FC<PersonProps>;
  title: string;
  large?: boolean;
}

export default function TeamSection(props: TeamSectionProps) {
  const { width } = useWindowSize();
  return (
    <div className="scroll-mt-20 m-auto max-w-[100rem] py-5 px-2 sm:px-6 lg:px-6 text-black">
      <h1 className="font-display mb-3 text-center text-5xl font-bold text-white">
        {props.title}
      </h1>
      <div
        className={`grid gap-3 pb-10 ${
          props.large
            ? "sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
            : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }`}
      >
        {props.people.map((person, index) => (
          <div
            key={index}
            className={`${
              props.large ? "h-48" : "h-36"
            } w-full overflow-hidden rounded-lg bg-white p-3 shadow-lg shadow-white/25`}
            data-aos="fade-up"
            {...{
              "data-aos-delay":
                (index %
                  (props.large
                    ? width! < 640
                      ? 1
                      : width! < 1024
                      ? 1
                      : width! < 1280
                      ? 2
                      : 3
                    : width! < 640
                    ? 1
                    : width! < 1024
                    ? 2
                    : width! < 1280
                    ? 3
                    : 4)) *
                100,
            }}
          >
            <props.component person={person} />
          </div>
        ))}
      </div>
    </div>
  );
}
