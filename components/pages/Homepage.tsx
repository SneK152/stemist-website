import HomeColumn from "./HomeColumn";
import Counter from "./Counter";

export default function Homepage() {
  return (
    <>
      <div
        className="flex scroll-mt-20 my-10 flex-col max-w-[100rem] px-2 sm:px-6 lg:px-6 m-auto"
        id="hero"
      >
        <h1 className="text-center font-display text-4xl font-bold">
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
        </p>
      </div>
      <br />
      <div>
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
        className="flex sm:flex-row max-w-[100rem] px-2 sm:px-6 lg:px-6 m-auto flex-col gap-3 scroll-mt-20"
        id="learnmore"
      >
        <HomeColumn
          title="Our Mission"
          description="We founded STEMist originally because we believed that learning was a gift that all students should have access to. We believe that kids should have access to proper education, especially in the rapidly-growing STEM fields. Our goal is to provide this education during times where students are available, such as in most school breaks. Ultimately, we want students to get an excelling immersion into STEM and build a foundation that they can rely on for years to come."
          buttonColor="white"
          buttonText="Learn More"
          buttonLink="/about/who-we-are"
        />
        <HomeColumn
          title="Qualifications"
          description="Our vast team of instructors is highly specialized and qualified in the subjects they teach. The team includes JMO and AIME qualifiers, Science Olympiad winners in many different subjects, USACO competitors in a variety of divisions, and much more. We have been teaching workshops at STEMist for over two years, with 6 workshops hosted, and we are continuing to expand our learning model with new class and learning formats."
          buttonColor="white"
          buttonText="Meet our Instructors"
          buttonLink="/about/team"
        />
      </div>
      <br />
    </>
  );
}
