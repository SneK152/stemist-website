import Banner from "@/components/layout/Banner";
import Button from "@/components/layout/Button";

const HACKATHON_INFO = {
  signup_form: "/hacks/signup",
  devpost: "https://stemist-hacks.devpost.com/",
  discord: "https://discord.gg/mQFreT6eCX",
};

function Description() {
  return (
    <div className="px-2">
      <p className="sm:text-xl text-base mb-2 max-w-[100ch] text-center mx-auto">
        STEMist Hacks aims to spark a light in the minds of students around the
        world interested in tech-related fields. We hope that by adding a form
        of competition and fun whilst still preserving the systematic school
        system, we can encourage students to learn in a fresh and new way.
        STEMist Hacks is primarily run by STEMist Education, a bay-area-based
        nonprofit run by and for students.
      </p>
      <p className="mb-2 text-2xl font-semibold">
        June 24th to June 26th, 2022
      </p>
      <br />
      <div className="flex flex-wrap sm:gap-5 gap-1 justify-center">
        <Button
          href={HACKATHON_INFO.signup_form}
          backgroundColor="bg-green bg-opacity-70"
          textColor="text-white"
        >
          Sign up Today!
        </Button>
        <Button
          href={HACKATHON_INFO.discord}
          backgroundColor="bg-black bg-opacity-80"
          textColor="text-white"
        >
          Join our Discord
        </Button>
        <Button
          href={HACKATHON_INFO.devpost}
          backgroundColor="bg-blue-500"
          textColor="text-white"
        >
          Join the Devpost
        </Button>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="-mt-20">
      <Banner image="/homepage.png" full href="#about">
        <h1 className="font-display text-3xl font-bold md:text-5xl lg:text-7xl">
          STEMist Hacks
        </h1>
        <Description />
      </Banner>
    </div>
  );
}
