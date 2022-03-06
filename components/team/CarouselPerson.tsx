import type Person from "@/lib/types/Person";
import Image from "next/image";
import Qualifications from "./Qualifications";
import teachers from "@/lib/data/teachers";
import { useMemo } from "react";

export default function CarouselPerson({ person }: { person: Person }) {
  const updatedPerson = useMemo(
    () => teachers.find((e) => e.name === person.name),
    [person.name]
  );
  return (
    <div className="flex flex-col sm:flex-row sm:px-10">
      <div className="sm:h-full relative p-3 mx-auto grid sm:p-5">
        <Image
          src={person.image}
          alt="Mentor spotlight"
          width={300}
          height={300}
          layout="fixed"
          loading="eager"
          className="rounded-full object-cover"
          quality={100}
        />
      </div>
      <div className="py-5 pl-10 pt-10">
        <h1 className="text-5xl font-display">{person.name}</h1>
        <br />
        <p className="max-w-[80ch] sm:text-xl">{person.description}</p>
        <br />
        <Qualifications quals={updatedPerson?.qualifications} />
      </div>
    </div>
  );
}
