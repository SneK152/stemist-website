import { memo, useState } from "react";
import Person from "@/components/team/Person";
import people from "@/lib/team";
import teachers from "@/lib/teachers";
import Banner from "@/components/layout/Banner";
import Carousel from "@/components/team/Carousel";

let teacherRoles: string[] = [];
teachers.forEach((person) => {
  teacherRoles = [...teacherRoles, ...person.positions];
});
teacherRoles = ["All", ...new Set(teacherRoles)];
const MemoedPerson = memo(Person);

export default function Team() {
  const [activeTeacher, setActiveTeacher] = useState("All");
  return (
    <>
      <Banner image="/homepage.webp" className="sm:h-64">
        <h1 className="font-sans text-3xl font-bold md:text-5xl lg:text-7xl">
          Meet the Team
        </h1>
      </Banner>
      <Carousel />
      <div className="m-auto max-w-[100rem] px-2 sm:px-6 lg:px-6 text-black">
        <h1 className="font-display mb-3 text-center text-3xl font-bold text-white">
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
      <div className="m-auto max-w-[100rem] px-2 sm:px-6 lg:px-6 text-black">
        <h1 className="font-display mb-3 text-center text-3xl font-bold text-white">
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
