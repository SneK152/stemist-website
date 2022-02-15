import { ReactNode } from "react";
import Banner from "../components/Banner";
import FeedBackForm from "../components/FeedbackForm";

export default function About() {
  return (
    <>
      <Banner image="/homepage.webp" className="h-72">
        <h1 className="font-sans text-7xl font-bold">About our Organization</h1>
      </Banner>
      <div className="m-3 p-3">
        <BodyCard title="Who We Are" className="sm:w-9/12 m-auto">
          STEMist Education is a student-led nonprofit that focuses on bringing
          free STEM education to children of ages 7 to 14. We have a variety of
          qualified instructors whom are skilled in areas such as Algebra,
          Computer Science, Biology, Chemistry, Physics, and much more. STEMist
          has been teaching kids STEM since 2020 and hopes to continue for much
          longer.
        </BodyCard>
        <div className="flex sm:flex-row flex-col mt-4 gap-4">
          <BodyCard title="Our Mission">
            We founded STEMist originally because we believed that learning was
            a gift that all students should have access to. We believe that kids
            should have access to proper education, especially in the
            rapidly-growing STEM fields .Our goal is to provide this education
            during times where students are available, such as in most school
            breaks. Ultimately, we want students to get an excelling immersion
            into STEM and build a foundation that they can rely on for years to
            come.
          </BodyCard>
          <BodyCard title="Curriculum and Format">
            Our team of instructors have vast amounts of experience in their
            respective STEM subjects, and they work hard to compile information
            in the form of engaging lectures every session. Our spring and
            winter break sessions are workshop based, where each day in the
            break has two to three 45-minute-classes. Students have the
            opportunity to pick and choose which ones they want to attend and
            learn from. During the long summer break from June to August, we opt
            for a curriculum based format where classes are separated into STEM
            topics and has two weeks worth of content that allows students to
            join an in-depth exploration of those topics.
          </BodyCard>
        </div>
        <FeedBackForm />
      </div>
    </>
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
