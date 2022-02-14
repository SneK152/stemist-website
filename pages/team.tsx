import Person from "../components/Person";
import { people } from "../lib/utils";

export default function Team() {
  return (
    <div className="max-w-[100rem] px-2 sm:px-6 lg:px-6 m-auto">
      <h1 className="mb-3 text-center font-display text-3xl font-bold">
        Meet the Team
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
  );
}
