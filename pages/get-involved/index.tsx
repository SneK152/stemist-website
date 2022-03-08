import Banner from "@/components/layout/Banner";
import PartialBanner from "@/components/layout/PartialBanner";
import Link from "next/link";

type InvolvedLinks = {
  name: string;
  description: string;
  url: string;
};

const involvedLinks: InvolvedLinks[] = [
  {
    name: "Student Signups",
    description:
      "If you are a student that is interested in joining our class, go here!",
    url: "/students",
  },
  {
    name: "Instructor Signups",
    description:
      "If you are a student who wants to get involved in teaching, go here!",
    url: "/instructors",
  },
  {
    name: "Donations",
    description: "If you would like to contribute to our cause, go here!",
    url: "/donate",
  },
];

export default function GetInvolved() {
  return (
    <>
      <PartialBanner title="Get Involved" />
      <div className="grid place-items-center gap-3 items-center sm:grid-cols-3 grid-cols-1 h-48 sm:w-3/4 w-full m-auto">
        {involvedLinks.map((link, i) => (
          <Link href={"/get-involved" + link.url} key={i}>
            <a className="bg-white rounded-lg p-3 hover:rounded-2xl hover:-translate-y-4 transition-all duration-300 shadow-lg w-full h-full flex flex-col justify-center items-center">
              <h1 className="text-black font-display text-2xl font-medium text-center">
                {link.name}
              </h1>
              <p className="text-black text-center text-lg">
                {link.description}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
