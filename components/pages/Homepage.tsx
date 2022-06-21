import HomeColumn from "./HomeColumn";
import Counter from "./Counter";
import HomeSection from "../layout/HomeSection";
import { FC } from "react";
import Link from "next/link";

const E: FC = ({ children }) => <span className="text-red">{children}</span>;

export default function Homepage() {
  return (
    <>
      <div
        className="flex scroll-mt-24 my-10 flex-col max-w-[100rem] px-2 sm:px-6 lg:px-6 m-auto"
        id="hero"
      >
        {/* <h1 className="text-center font-display text-4xl font-bold">
          What We Do
        </h1>
        <p className="text-lg text-center px-3">
          Our goal is not only to teach kids STEM. We hope to empower students
          with foundational concepts they will use throughout their life. To
          accomplish this, we host workshops over Zoom to help students learn
          about various topics in our modern society. These workshops take place
          during school breaks such as Spring and Winter break. In the summer,
          we opt for a comprehensive curriculum that delves more in-depth into
          STEM topics.{" "}
        </p> */}
        <HomeSection
          title="Democratization of education"
          image="/home/demoedu.jpeg"
          side="left"
        >
          We strive to <E>empower</E> students with <E>foundational concepts</E>{" "}
          that will be vital to unlocking success in their lives. We{"'"}re
          committed to provide <E>education for everyone</E>, regardless of
          race, gender, age, income with free to ultralow cost classes online
          and in person.
        </HomeSection>
        <HomeSection
          title="Reshaping the learning curve"
          image="/home/reshape.jpeg"
          side="right"
        >
          Our{" "}
          <Link href="/programs">
            <a className="underline decoration-red underline-offset-1">
              <E>Summer 2022 STEM Course</E>
            </a>
          </Link>{" "}
          provides an intensive 5-week course that <E>accelerates</E> the
          internalization of concepts taught during class. Learning is
          reinforced with kahoots that promote note-taking and long term memory
          recall.
        </HomeSection>
        <HomeSection
          title="Putting skills to work"
          image="/home/hacks.jpeg"
          side="left"
        >
          <Link href="/hacks">
            <a className="underline decoration-red underline-offset-1 text">
              <E>STEMist Hacks</E>
            </a>
          </Link>{" "}
          encourages students to put their programming skills to work, with{" "}
          <E>riveting speaker talks</E> by real life professionals and tens of
          thousands of dollars in prizes.
        </HomeSection>
      </div>
      {/* <br /> */}
      {/* <div>
        <h1 className="text-center mb-2 sm:mb-0 text-4xl font-display font-bold">
          By the Numbers
        </h1>
        <div className="sm:grid-cols-2 lg:grid-cols-4 gap-3 grid-cols-1 max-w-[100rem] px-2 sm:px-6 lg:px-6 m-auto place-items-center sm:min-h-[12rem] min-h-[20rem] grid">
          <Counter
            number={45}
            symbol="+"
            text="interactive presentations created"
            className="!text-4xl sm:!text-5xl"
          />
          <Counter
            number={6}
            symbol="+"
            text="intriguing workshops hosted"
            className="!text-4xl sm:!text-5xl"
          />
          <Counter
            number={30}
            symbol="+"
            text="highly qualified teachers"
            className="!text-4xl sm:!text-5xl"
          />
          <Counter
            number={150}
            symbol="+"
            text="students taught"
            className="!text-4xl sm:!text-5xl"
          />
        </div>
      </div>
      <br />
      <div
        className="flex sm:flex-row max-w-[100rem] px-2 sm:px-6 lg:px-6 m-auto flex-col gap-3 scroll-mt-24"
        id="learnmore"
      >
        <HomeColumn
          title="Our Mission"
          description="We founded STEMist originally because we believed that learning was a gift that all students should have access to. We believe that kids should have access to proper education, especially in the rapidly-growing STEM fields. Our goal is to provide this education during times where students are available, such as in most school breaks. Ultimately, we want students to get an excelling immersion into STEM and build a foundation that they can rely on for years to come."
          buttonColor="white"
          buttonText="About Us"
          buttonLink="/about/who-we-are"
        />
        <HomeColumn
          title="Qualifications"
          description="Our vast team of instructors is highly specialized and qualified in the subjects they teach. The team includes JMO and AIME qualifiers, Science Olympiad winners in many different subjects, USACO competitors in a variety of divisions, and much more. We have been teaching workshops at STEMist for over two years, with 6 workshops hosted, and we are continuing to expand our learning model with new class and learning formats."
          buttonColor="white"
          buttonText="Meet our Instructors"
          buttonLink="/about/team"
        />
      </div> */}
      {/* <br /> */}
    </>
  );
}
