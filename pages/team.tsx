import { memo, useMemo, useState } from "react";
import people from "@/lib/data/team";
import teachers from "@/lib/data/teachers";
import Carousel from "@/components/team/Carousel";
import { GetStaticProps } from "next";
import TeamProps from "@/lib/types/TeamProps";
import db from "@/lib/serverApp";
import directors from "@/lib/data/directors";
import officers from "@/lib/data/officers";
import dynamic from "next/dynamic";
import { TeacherSubject } from "@/lib/types/Person";
import PartialBanner from "@/components/layout/PartialBanner";
import Container from "@/components/layout/Container";

const TeamSection = dynamic(() => import("@/components/pages/TeamSection"));
const LargePerson = dynamic(() => import("@/components/team/LargePerson"));
const Person = dynamic(() => import("@/components/team/Person"));

let teacherRoles: TeacherSubject[] = [];
teachers.forEach((person) => {
  teacherRoles = [...teacherRoles, ...person.positions];
});
teacherRoles = ["All", ...new Set(teacherRoles)];
teacherRoles = teacherRoles.filter((role) => !role.includes("Lead"));

const MemoedPerson = memo(Person);
const MemoedLargePerson = memo(LargePerson);

export default function Team(props: TeamProps) {
  const [activeTeacher, setActiveTeacher] = useState<TeacherSubject>("All");
  const memoedTeachers = useMemo(
    () =>
      teachers
        .filter(
          (person) =>
            person.positions.includes(activeTeacher) || activeTeacher === "All"
        )
        .sort((a, b) =>
          a.positions[0].includes(`${activeTeacher} Lead`)
            ? -1
            : b.positions[0].includes("Lead")
            ? 1
            : 0
        ),
    [activeTeacher]
  );
  return (
    <Container title="Our Team">
      <PartialBanner title="Meet the Team" />
      <h1 className="font-display mb-3 text-center text-5xl font-bold text-white">
        Weekly Mentor Spotlight
      </h1>
      <div className="max-w-[100rem] px-2 sm:px-6 lg:px-6 m-auto">
        <Carousel data={props.data} />
      </div>
      <TeamSection
        component={MemoedLargePerson}
        id="directors"
        title="Board of Directors"
        people={directors}
        large
      />
      <TeamSection
        component={MemoedLargePerson}
        id="officers"
        title="Officers"
        people={officers}
        large
      />
      <TeamSection
        component={MemoedPerson}
        people={people}
        id="staff"
        title="Staff"
      />
      <div
        id="instructors"
        className="scroll-mt-20 m-auto max-w-[100rem] px-2 py-5 sm:px-6 lg:px-6 text-black"
      >
        <h1 className="font-display mb-3 text-center text-5xl font-bold text-white">
          Instructors
        </h1>
        <div className="m-auto flex justify-center">
          <div className="inline-block pb-3">
            {teacherRoles.map((role, index) => (
              <FilterButton
                key={index}
                name={role}
                active={activeTeacher === role}
                onClick={() => setActiveTeacher(role)}
              />
            ))}
          </div>
        </div>
        <div className="grid gap-2 pb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {memoedTeachers.map((person, index) => (
            <div
              key={index}
              className="h-36 w-full overflow-hidden rounded-xl bg-white p-3 shadow-lg shadow-white/25"
            >
              <MemoedPerson person={person} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

function FilterButton({
  name,
  active,
  onClick,
}: {
  name: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`${
        active ? "bg-blue-200" : "bg-gray-200"
      } font-writing m-1 rounded-2xl py-1 px-3 text-lg shadow-lg shadow-white/20 text-black`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export const getStaticProps: GetStaticProps<TeamProps> = async () => {
  const spotlight = await db.collection("spotlight").doc("spotlight").get();
  return {
    props: {
      data: spotlight.data()!.spotlight,
    },
    revalidate: 60,
  };
};
