import HomeColumn from "./HomeColumn";

export default function Homepage() {
  return (
    <>
      <div className="flex sm:flex-row w-3/4 m-auto flex-col gap-3">
        <HomeColumn
          title="Our Mission"
          description="We founded STEMist originally because we believed that learning was a gift that all students should have access to. We believe that kids should have access to proper education, especially in the rapidly-growing STEM fields. Our goal is to provide this education during times where students are available, such as in most school breaks. Ultimately, we want students to get an excelling immersion into STEM and build a foundation that they can rely on for years to come."
          buttonColor="white"
          buttonText="Learn More"
          buttonLink="/about"
        />
        <HomeColumn
          title="Qualifications"
          description="We founded STEMist originally because we believed that learning was a gift that all students should have access to. We believe that kids should have access to proper education, especially in the rapidly-growing STEM fields. Our goal is to provide this education during times where students are available, such as in most school breaks. Ultimately, we want students to get an excelling immersion into STEM and build a foundation that they can rely on for years to come."
          buttonColor="white"
          buttonText="Meet our Teachers"
          buttonLink="/team#instructors"
        />
      </div>
    </>
  );
}
