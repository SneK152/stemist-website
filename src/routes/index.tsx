import {
  AcademicCapIcon,
  CalendarIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";
import { ReactNode } from "react";
import image from "../images/homepage.webp";

export default function Index() {
  return (
    <>
      <Hero />
      <Body />
    </>
  );
}

function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat object-cover"
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="absolute flex min-h-2/5 h-auto w-3/4 flex-col justify-center gap-3 overflow-hidden break-words rounded-3xl bg-green text-white bg-opacity-80 p-4 text-center backdrop-blur-md sm:w-1/2">
          <span className="block font-sans text-lg">
            Learn STEM hands-on. Engage with fellow students. Have the
            experience of a lifetime.
          </span>
          <h1 className="font-display text-4xl font-bold lg:text-7xl xl:text-8xl">
            STEMist Education
          </h1>
          <p className="px-5 font-writing text-base sm:px-10 sm:text-xl md:px-20">
            <span className="block italic">
              "Tell me, and I will listen Teach me, and I'll remember Involve
              me, and I will learn."
            </span>
            <span className="block text-base">-Benjamin Franklin</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="m-3 p-3">
      <BodyCard
        title="Who We Are"
        className="sm:w-9/12 m-auto"
        icon={AcademicCapIcon}
      >
        STEMist Education is a student-led nonprofit that focuses on bringing
        free STEM education to kids of all ages. We have a variety of qualified
        instructors whom are very skilled in areas such as Biology,
        Oceanography, Web Development, Computer Science, Algebra, and more.
        STEMist has been teaching kids STEM since 2020.
      </BodyCard>
      <div className="flex sm:flex-row flex-col mt-4 gap-4">
        <BodyCard title="Our Goal" icon={CalendarIcon}>
          We started STEMist because we believe that education is a right, and
          kids should have access to proper education especially in the
          rapidly-growing STEM fields. Our goal is to provide this education
          during school breaks in multiple formats, such as comprehensive
          curriculums and workshops. Ultimately, we want students to get an
          excelling immersion into STEM and build a foundation that they can
          rely on for years to come.
        </BodyCard>
        <BodyCard title="Curriculum and Format" icon={ClipboardListIcon}>
          Our team of instructors have vast amounts of experience in their
          respective STEM subjects, and they work hard to compile information in
          the form of engaging slideshows every session. Our spring and winter
          break sessions are workshop based. Each day in the break has two or
          three 45 minute classes, and students have the opportunity to pick and
          choose which ones they want to attend. During the summers, we opt for
          a curriculum based format where each STEM subject has two weeks worth
          of content that enables students to learn in a step-by-step fashion.
        </BodyCard>
      </div>
    </div>
  );
}

function BodyCard({
  title,
  children: desc,
  className = "",
  icon: Icon,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  icon: any;
}) {
  return (
    <div
      className={`z-40 w-full space-y-3 rounded-xl border relative border-gray-200 bg-white p-3 shadow-lg ${className} `}
    >
      <div className="absolute w-full h-full object-contain grid pointer-events-none place-items-center -translate-x-3 -translate-y-3 z-10 opacity-[0.15]">
        <Icon className="absolute object-cover h-full text-green" />
      </div>
      <h1 className="text-center font-display text-xl font-semibold z-20">
        {title}
      </h1>
      <p className="text-center font-light z-20">{desc}</p>
    </div>
  );
}
