import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import Card from "@/components/pages/Card";
import Person from "@/components/team/Person";
import teachers from "@/lib/data/team/teachers";
import P from "@/lib/types/Person";
import { ReactNode, useCallback } from "react";

const csTeachers = [...teachers]
  .filter((person) => person.positions.includes("Computer Science"))
  .sort((a, b) =>
    a.positions[0].includes("Computer Science Lead")
      ? -1
      : b.positions[0].includes("Lead")
      ? 1
      : 0
  );
const physTeachers = [...teachers]
  .filter((person) => person.positions.includes("Physical Science"))
  .sort((a, b) =>
    a.positions[0].includes("Physical Science Lead")
      ? -1
      : b.positions[0].includes("Lead")
      ? 1
      : 0
  );
const mathTeachers = [...teachers]
  .filter((person) => person.positions.includes("Math"))
  .sort((a, b) =>
    a.positions[0].includes("Math Lead")
      ? -1
      : b.positions[0].includes("Lead")
      ? 1
      : 0
  );
const bioTeachers = [...teachers]
  .filter((person) => person.positions.includes("Biology"))
  .sort((a, b) =>
    a.positions[0].includes("Biology Lead")
      ? -1
      : b.positions[0].includes("Lead")
      ? 1
      : 0
  );

export default function Curriculum() {
  const personByName = useCallback((name: string) => {
    return teachers.find((person) => person.name === name)!;
  }, []);
  return (
    <Container title="Curriculum">
      <PartialBanner title="Workshop Curriculum - Intro to STEM" />
      <div className="grid grid-cols-2 gap-5 max-w-[100rem] px-2 sm:px-6 lg:px-6 mx-auto">
        <CurriculumCard
          title="Full Stack Web Development"
          subtitle="Monday, April 18th"
          person={personByName("Snehil Kakani")}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente
          quibusdam architecto, totam tempore nemo cupiditate laudantium dolore
          earum a optio veniam amet accusantium quam consequatur eveniet sed
          excepturi ullam.
        </CurriculumCard>
        <CurriculumCard
          subtitle="Tuesday, April 19th"
          title="Biotechnology"
          person={personByName("Selena Yang")}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quam
          eius natus quas dolore, quisquam assumenda repellat repellendus sit
          quis eligendi facere, at labore deleniti ipsa accusantium, pariatur
          quidem saepe.
        </CurriculumCard>
        <CurriculumCard
          subtitle="Wednesday, April 20th"
          title="Genetics"
          person={personByName("Harold Wang")}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa qui
          minus fuga dolore asperiores quibusdam, veritatis dolores consectetur
          hic distinctio quos excepturi repellat ab sequi quam aspernatur
          reiciendis quasi nam!
        </CurriculumCard>
        <CurriculumCard
          subtitle="Thursday, April 21st"
          title="Waves"
          person={personByName("Steve Yang")}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          deserunt numquam vel dolorum recusandae voluptas sit sapiente odio
          nobis, nostrum aspernatur debitis, consequatur voluptatum obcaecati
          atque nemo quis, aut eius.
        </CurriculumCard>
        <CurriculumCard
          subtitle="Friday, April 22nd"
          title="Thermodynamics"
          person={personByName("Sanya Badhe")}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          veritatis perferendis perspiciatis, mollitia accusantium nobis sed
          quisquam harum nam cum repellendus, iure dolor ab dolorum saepe quam
          sequi quidem illo.
        </CurriculumCard>
      </div>
    </Container>
  );
}

interface CurriculumCardProps {
  title: string;
  person: P;
  children: ReactNode;
  subtitle: string;
}

function CurriculumCard(props: CurriculumCardProps) {
  return (
    <Card title={props.title}>
      <h1 className="text-gray-800 text-center font-writing text-xl">
        {props.subtitle}
      </h1>
      <br />
      <div>{props.children}</div>
      <br />
      <div className="grid text-left">
        <div
        // className={`h-32 w-full overflow-hidden rounded-lg bg-white shadow p-3`}
        >
          <Person person={{ ...props.person, positions: [] }} />
        </div>
      </div>
    </Card>
  );
}
