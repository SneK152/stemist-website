import HomeColumn from "./HomeColumn";

export default function Homepage() {
  return (
    <>
      <div
        className="flex sm:flex-row w-3/4 m-auto flex-col gap-3 scroll-mt-20"
        id="learnmore"
      >
        <HomeColumn
          title="Our Mission"
          description="We founded STEMist originally because we believed that learning was a gift that all students should have access to. We believe that kids should have access to proper education, especially in the rapidly-growing STEM fields. Our goal is to provide this education during times where students are available, such as in most school breaks. Ultimately, we want students to get an excelling immersion into STEM and build a foundation that they can rely on for years to come."
          buttonColor="white"
          buttonText="More Info"
          buttonLink="/about"
        />
        <HomeColumn
          title="Qualifications"
          description="Our vast team of instructors is highly specialized and qualified in the subjects they teach. The team includes AIME qualifiers, Science Olympiad winners in many different subjects, USACO competitors in a variety of divisions, and much more. We have been teaching workshops at STEMist for over two years, with 6 workshops hosted, and we are continuing to expand our learning model with new class and learning formats."
          buttonColor="white"
          buttonText="Meet our Instructors"
          buttonLink="/team#instructors"
        />
      </div>
    </>
  );
}
