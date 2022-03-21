import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import dynamic from "next/dynamic";

const Section = dynamic(() => import("@/components/layout/AboutSection"));

export default function About() {
  return (
    <Container title="About Us">
      <PartialBanner title="About Our Organization" />
      <div className="m-3 p-3 text-black space-y-3">
        <Section title="Who We Are" image="/about/teamphoto.jpg">
          STEMist Education is a student-led nonprofit that focuses on bringing
          free STEM education to children of ages 7 to 14. We have a variety of
          qualified instructors whom are skilled in areas such as Algebra,
          Computer Science, Biology, Chemistry, Physics, and much more. STEMist
          has been teaching kids STEM since 2020 and hopes to continue for much
          longer.
        </Section>
        <Section title="Our Mission" image="/homepage.png">
          We founded STEMist originally because we believed that learning was a
          gift that all students should have access to. We believe that kids
          should have access to proper education, especially in the
          rapidly-growing STEM fields. Our goal is to provide this education
          during times where students are available, such as in most school
          breaks. Ultimately, we want students to get an excelling immersion
          into STEM and build a foundation that they can rely on for years to
          come.
        </Section>
        <Section title="Curriculum and Format" image="/about/slides.png">
          Our team of instructors have vast amounts of experience in their
          respective STEM subjects, and they work hard to compile information in
          the form of engaging lectures every session. Our spring and winter
          break sessions are workshop based, where each day in the break has two
          to three 45-minute-classes. Students have the opportunity to pick and
          choose which ones they want to attend and learn from. During the long
          summer break from June to August, we opt for a curriculum based format
          where classes are separated into STEM topics and has two weeks worth
          of content that allows students to join an in-depth exploration of
          those topics.
        </Section>
      </div>
    </Container>
  );
}
