import { memo, useMemo, useState } from "react";
import Person from "@/components/team/Person";
import people from "@/lib/team";
import teachers from "@/lib/teachers";
import Banner from "@/components/layout/Banner";
import Carousel from "@/components/team/Carousel";
import { GetServerSideProps } from "next";
import TeamProps from "@/lib/types/TeamProps";
import db from "@/lib/serverApp";

let teacherRoles: string[] = [];
teachers.forEach((person) => {
  teacherRoles = [...teacherRoles, ...person.positions];
});
teacherRoles = ["All", ...new Set(teacherRoles)];
teacherRoles = teacherRoles.filter((role) => !role.includes("Lead"));
const MemoedPerson = memo(Person);

export default function Team(props: TeamProps) {
  const [activeTeacher, setActiveTeacher] = useState("All");
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
    <>
      <Banner image="/homepage.webp" className="sm:w-auto">
        <h1 className="font-sans text-3xl font-bold md:text-5xl lg:text-7xl">
          Meet the Team
        </h1>
      </Banner>
      <h1 className="font-display mb-3 text-center text-5xl font-bold text-white">
        Weekly Mentor Spotlight
      </h1>
      <div className="max-w-[100rem] px-2 sm:px-6 lg:px-6 m-auto">
        <Carousel data={props.data} />
      </div>
      <div className="m-auto max-w-[100rem] py-5 px-2 sm:px-6 lg:px-6 text-black">
        <h1 className="font-display mb-3 text-center text-5xl font-bold text-white">
          Executive Team
        </h1>
        <div className="grid gap-2 pb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {people.map((person, index) => (
            <div
              key={index}
              className="h-36 w-full overflow-hidden rounded-xl bg-white p-3 shadow-lg"
            >
              <MemoedPerson person={person} />
            </div>
          ))}
        </div>
      </div>
      <div className="m-auto max-w-[100rem] px-2 py-5 sm:px-6 lg:px-6 text-black">
        <h1 className="font-display mb-3 text-center text-5xl font-bold text-white">
          Instructor Team
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
              className="h-36 w-full overflow-hidden rounded-xl bg-white p-3 shadow-lg"
            >
              <MemoedPerson person={person} />
            </div>
          ))}
        </div>
      </div>
    </>
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
      } font-writing m-1 rounded-2xl py-1 px-3 text-lg shadow-lg text-black`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export const getServerSideProps: GetServerSideProps<TeamProps> = async () => {
  const spotlight = await db.collection("spotlight").doc("spotlight").get();
  return {
    props: {
      data: spotlight.data()!.spotlight,
    },
  };
};
