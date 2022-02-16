import Person from "@/lib/types/Person";
import Image from "next/image";

export default function CarouselPerson({ person }: { person: Person }) {
  return (
    <div className="flex px-10">
      <div className="w-1/4 relative">
        <Image
          src={person.image}
          alt="Mentor spotlight"
          width={60}
          height={60}
          layout="responsive"
          className="rounded-3xl"
        />
      </div>
      <div>
        <h1>{person.name}</h1>
        <p>{person.description}</p>
      </div>
    </div>
  );
}
