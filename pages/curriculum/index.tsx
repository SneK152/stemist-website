import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import Link from "next/link";

export default function Programs() {
  return (
    <Container title="Curriculum">
      <PartialBanner title="Curriculum" />
      <div className="max-w-[100rem] px-5 grid gap-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        {[
          ["cs", "Computer Science"],
          ["phys", "Physical Science"],
          ["math", "Math"],
          ["bio", "Biology"],
        ].map((subject) => (
          <Link key={subject[0]} href={`/curriculum/${subject[0]}`}>
            <a className="w-full h-48 bg-white bg-opacity-[.15] rounded-lg p-3 hover:rounded-xl hover:-translate-y-2 transition-all duration-300 shadow-lg flex flex-col justify-center items-center font-display text-2xl font-medium text-center">
              {subject[1]}
            </a>
          </Link>
        ))}
      </div>
    </Container>
  );
}
