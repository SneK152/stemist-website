import { memo, useMemo, useState } from "react";
import staff from "@/lib/data/team/staff";
import teachers from "@/lib/data/team/teachers";
import { GetStaticProps } from "next";
import TeamProps from "@/lib/types/TeamProps";
import db from "@/lib/serverApp";
// import directors from "@/lib/data/team/directors";
import officers from "@/lib/data/team/officers";
import dynamic from "next/dynamic";
import { TeacherSubject } from "@/lib/types/Person";
import PartialBanner from "@/components/layout/PartialBanner";
import Container from "@/components/layout/Container";
import { Tab } from "@headlessui/react";

const TeamSection = dynamic(() => import("@/components/pages/TeamSection"));
const LargePerson = dynamic(() => import("@/components/team/LargePerson"));
const Person = dynamic(() => import("@/components/team/Person"));
const Carousel = dynamic(() => import("@/components/team/Carousel"));

function getTeachers() {
  let teacherRoles: TeacherSubject[] = [];
  teachers.forEach((person) => {
    teacherRoles = [...teacherRoles, ...person.positions];
  });
  teacherRoles = ["All", ...new Set(teacherRoles)];
  teacherRoles = teacherRoles.filter((role) => !role.includes("Head"));
  return teacherRoles;
}

function getSortedTeachers(activeTeacher: TeacherSubject) {
  if (activeTeacher === "All") {
    return teachers.sort((a, b) =>
      a.positions[0].includes("Head")
        ? -1
        : b.positions[0].includes("Head")
        ? 1
        : 0
    );
  } else {
    return teachers
      .filter((person) => person.positions.includes(activeTeacher))
      .sort((a, b) =>
        a.positions[0].includes(`Head of ${activeTeacher}`)
          ? -1
          : b.positions[0].includes("Head")
          ? 1
          : 0
      );
  }
}

const MemoedPerson = memo(Person);
const MemoedLargePerson = memo(LargePerson);

export default function Team(props: TeamProps) {
  const [activeTeacher, setActiveTeacher] = useState<TeacherSubject>("All");
  const teacherRoles = useMemo(() => getTeachers(), []);
  const memoedTeachers = useMemo(
    () => getSortedTeachers(activeTeacher),
    [activeTeacher]
  );

  return (
    <Container title="Our Team">
      <PartialBanner
        title="Meet the Team"
        subheader="The dedicated and innovative people that make us who we are"
      />
      <div>
        <Tab.Group>
          <Tab.List className="flex gap-4 pt-1 pb-[0.5px] px-3 mx-5 border-y border-black">
            <Tab
              className={({ selected }) =>
                `text-xl font-display py-1 border-b-4 focus:outline-none ${
                  selected
                    ? "font-light border-black"
                    : "font-light border-transparent"
                }`
              }
            >
              Weekly Mentor Spotlight
            </Tab>
            <Tab
              className={({ selected }) =>
                `text-xl font-display py-1 border-b-4 focus:outline-none ${
                  selected
                    ? "font-light border-black"
                    : "font-light border-transparent"
                }`
              }
            >
              Officer Team
            </Tab>
            <Tab
              className={({ selected }) =>
                `text-xl font-display py-1 border-b-4 focus:outline-none ${
                  selected
                    ? "font-light border-black"
                    : "font-light border-transparent"
                }`
              }
            >
              Instructors
            </Tab>
            <Tab
              className={({ selected }) =>
                `text-xl font-display py-1 border-b-4 focus:outline-none ${
                  selected
                    ? "font-light border-black"
                    : "font-light border-transparent"
                }`
              }
            >
              Other Volunteers
            </Tab>
          </Tab.List>
          <Tab.Panels className="max-w-[100rem] px-2 sm:px-6 lg:px-6 mx-auto">
            <Tab.Panel>
              <div>
                <Carousel data={props.data} />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <TeamSection
                component={MemoedLargePerson}
                title="Officers"
                people={officers}
                large
              />
            </Tab.Panel>
            <Tab.Panel>
              <div className="text-black py-3">
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
                      className="h-36 w-full overflow-hidden border-2 border-opacity-10 border-black p-3"
                    >
                      <MemoedPerson person={person} />
                    </div>
                  ))}
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <TeamSection
                component={MemoedPerson}
                people={staff}
                title="Staff"
              />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
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
      } font-writing m-1 rounded-lg py-1 px-3 text-lg shadow-lg shadow-white/20 text-black`}
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
