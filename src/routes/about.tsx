import Person from "../components/Person";
import { people } from "../utils";

export default function About() {
  return (
    <div>
      <h1 className="mb-3 text-center font-display text-3xl font-bold">
        About the Team
      </h1>
      <div className="grid gap-2 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
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
