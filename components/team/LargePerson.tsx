import Image from "next/image";
import PersonProps from "@/lib/types/PersonProps";
import { MailIcon } from "@heroicons/react/outline";

export default function LargePerson(props: PersonProps) {
  return (
    <>
      <div className="group flex w-96 flex-row mx-auto items-center gap-5">
        <div className={`${props.person.description ? "" : ""}`}>
          <Image
            src={props.person.image}
            height={140}
            width={140}
            layout="fixed"
            className={`max-w-none rounded-full object-cover`}
            alt="User profile"
            quality={100}
            priority
          />
        </div>
        <h1 className="font-display justify-self-center space-y-1 text-3xl font-normal">
          <span
            className={`${props.person.description ? "" : ""} transition-all`}
          >
            {props.person.name}
            <br />
            <div className="font-display flex flex-wrap gap-1">
              {props.person.positions.map(
                (pos, index) =>
                  !props.person.positions.includes("Head of " + pos) && (
                    <span
                      className="m-0.5 w-min whitespace-nowrap rounded-3xl bg-gray-200 py-1 px-2 text-sm"
                      key={index}
                    >
                      {pos}
                    </span>
                  )
              )}
            </div>
            <a
              href={
                "mailto:" +
                props.person.email! +
                "?body=" +
                encodeURI(
                  "\n\n\n\n\n\nSent from the official website of STEMist Education - joinstemist.org"
                )
              }
              target="_blank"
              rel="noreferrer noopener"
            >
              <MailIcon className="h-6 w-6 ml-1 inline-block" />
            </a>
          </span>
        </h1>
      </div>
      {props.person.description && (
        <p className="max-w-[40ch] font-display text-lg transition-all group-hover:block mx-auto">
          {props.person.description}
        </p>
      )}
    </>
  );
}
