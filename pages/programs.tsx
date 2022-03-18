import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import Card from "@/components/pages/Card";
import Person from "@/components/team/Person";
import teachers from "@/lib/data/team/teachers";
import P from "@/lib/types/Person";
import { ReactNode } from "react";

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

export default function Programs() {
  return (
    <Container title="Programs">
      <PartialBanner title="Programs" />
      <div className="sm:mx-5 flex-col flex gap-5">
        <SubjectCard title="Computer Science" teachers={csTeachers}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          maxime pariatur natus officiis harum temporibus consequuntur.
          Consequatur praesentium deserunt eveniet dolorum mollitia dignissimos
          perferendis voluptates corporis qui. Aliquam, dicta. Vel. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Pariatur laborum
          temporibus inventore minima accusantium voluptatem maiores, numquam
          repellat magnam modi? Perspiciatis itaque repellat facilis id
          cupiditate hic praesentium, sequi totam?
        </SubjectCard>
        <SubjectCard title="Physical Science" teachers={physTeachers}>
          STEMist{"'"}s Physical Science covers a broad range of topics in
          Physics, Chemistry, Earth Science, and Astronomy. Presentations will
          go over the basics over the topic and show applications of the
          extensive material provided through the form of sample problems and
          explanations. Explanations will include information that is easily
          broken down into different segments to best prepare students in the
          subject matter. Our instructors include contestants and award winners
          through various physical science-related competitions and olympiads in
          science-related subjects including a combined 20+ years of Science
          Olympiad, Science Bowl, and Ocean Science Bowl experience winning
          dozens of medals and trophies. Instructors are familiar with teaching
          with all have past experience and willing to answer questions where
          students have lapses in understanding.
        </SubjectCard>
        <SubjectCard title="Biology" teachers={bioTeachers}>
          STEMist{"'"}s Intro to Biology is a comprehensive course which not
          only provides an introduction to the knowledge required for science
          competitions (including USABO, Science Bowl and Science Olympiad), but
          also delves deep into various fascinating topics (like oncology and
          immunology). Our curriculum covers biochemistry, molecular and cell
          biology, genetics, botany, anatomy, evolution and ethology, and
          ecology, touching upon all of the subjects covered in biolympiads and
          high school or AP biology courses. Our instructors are highly
          qualified, winning awards in many different contests (USABO
          semfinalists, Science Bowl competitors, Science Olympiad medalists,
          etc.). They also have more than two years of teaching experience, and
          are always happy to answer questions or explain tricky topics.
        </SubjectCard>
        <SubjectCard title="Mathematics" teachers={mathTeachers}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          maxime pariatur natus officiis harum temporibus consequuntur.
          Consequatur praesentium deserunt eveniet dolorum mollitia dignissimos
          perferendis voluptates corporis qui. Aliquam, dicta. Vel. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Pariatur laborum
          temporibus inventore minima accusantium voluptatem maiores, numquam
          repellat magnam modi? Perspiciatis itaque repellat facilis id
          cupiditate hic praesentium, sequi totam?
        </SubjectCard>
      </div>
    </Container>
  );
}

interface SubjectCardProps {
  teachers: P[];
  children: ReactNode;
  title: string;
}

function SubjectCard(props: SubjectCardProps) {
  return (
    <Card title={props.title}>
      <div>{props.children}</div>
      <br />
      <div className="grid text-left gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {props.teachers.map((t, index) => (
          <div
            key={index}
            className={`h-32 w-full overflow-hidden rounded-lg bg-white shadow p-3`}
          >
            <Person person={t} />
          </div>
        ))}
      </div>
    </Card>
  );
}
