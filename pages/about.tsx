import { ReactNode } from "react";

export default function About() {
  return (
    <div className="m-3 p-3">
      <BodyCard title="Who We Are" className="sm:w-9/12 m-auto">
        STEMist Education is a student-led nonprofit that focuses on bringing
        free STEM education to kids of all ages. We have a variety of qualified
        instructors whom are very skilled in areas such as Biology,
        Oceanography, Web Development, Computer Science, Algebra, and more.
        STEMist has been teaching kids STEM since 2020.
      </BodyCard>
      <div className="flex sm:flex-row flex-col mt-4 gap-4">
        <BodyCard title="Our Goal">
          We started STEMist because we believe that education is a right, and
          kids should have access to proper education especially in the
          rapidly-growing STEM fields. Our goal is to provide this education
          during school breaks in multiple formats, such as comprehensive
          curriculums and workshops. Ultimately, we want students to get an
          excelling immersion into STEM and build a foundation that they can
          rely on for years to come.
        </BodyCard>
        <BodyCard title="Curriculum and Format">
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
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`z-40 w-full space-y-3 rounded-xl border relative border-gray-200 bg-white p-3 shadow-lg ${className} `}
    >
      <h1 className="text-center font-display text-xl font-semibold z-20">
        {title}
      </h1>
      <p className="text-center font-light z-20">{desc}</p>
    </div>
  );
}
