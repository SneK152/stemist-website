import { useState } from "react";
import Person from "@/components/Person";
import people from "@/lib/team";
import teachers from "@/lib/teachers";
import Banner from "@/components/Banner";

let teacherRoles: string[] = [];
teachers.forEach((person) => {
  teacherRoles = [...teacherRoles, ...person.positions];
});
teacherRoles = ["All", ...new Set(teacherRoles)];

export default function Team() {
  const [activeTeacher, setActiveTeacher] = useState("All");
  return (
    <>
      <Banner image="/homepage.webp" className="h-72">
        <h1 className="font-sans text-7xl font-bold">Meet the Team</h1>
      </Banner>
      <div className="max-w-[100rem] px-2 sm:px-6 lg:px-6 m-auto">
        <h1 className="mb-3 text-center font-display text-3xl font-bold">
          Executive Team
        </h1>
        <div className="grid gap-2 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 pb-10">
          {people.map((person, index) => (
            <div
              key={index}
              className="h-36 w-full overflow-hidden rounded-xl bg-white p-3 shadow-lg"
            >
              <Person person={person} />
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[100rem] px-2 sm:px-6 lg:px-6 m-auto">
        <h1 className="mb-3 text-center font-display text-3xl font-bold">
          Instructor Team
        </h1>
        <div className="m-auto flex justify-center">
          <div className="pb-3 inline-block">
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
        <div className="grid gap-2 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 pb-10">
          {teachers
            .filter(
              (person) =>
                person.positions.includes(activeTeacher) ||
                activeTeacher === "All"
            )
            .map((person, index) => (
              <div
                key={index}
                className="h-36 w-full overflow-hidden rounded-xl bg-white p-3 shadow-lg"
              >
                <Person person={person} />
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
      } rounded-2xl shadow-lg py-1 px-3 font-writing text-lg m-1`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
