import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import Person from "@/components/team/Person";
import teachers from "@/lib/data/team/teachers";
import P from "@/lib/types/Person";
import { GetStaticPaths, GetStaticProps } from "next";

interface SubjectCurriculumProps {
  subject: string;
}

const csTeachers = [...teachers]
  .filter((person) => person.positions.includes("Computer Science"))
  .sort((a, b) =>
    a.positions[0].includes("Head of Computer Science")
      ? -1
      : b.positions[0].includes("Head")
      ? 1
      : 0
  );
const physTeachers = [...teachers]
  .filter((person) => person.positions.includes("Physical Science"))
  .sort((a, b) =>
    a.positions[0].includes("Head of Physical Science")
      ? -1
      : b.positions[0].includes("Head")
      ? 1
      : 0
  );
const mathTeachers = [...teachers]
  .filter((person) => person.positions.includes("Math"))
  .sort((a, b) =>
    a.positions[0].includes("Head of Math")
      ? -1
      : b.positions[0].includes("Head")
      ? 1
      : 0
  );
const bioTeachers = [...teachers]
  .filter((person) => person.positions.includes("Biology"))
  .sort((a, b) =>
    a.positions[0].includes("Head of Biology")
      ? -1
      : b.positions[0].includes("Head")
      ? 1
      : 0
  );

const subjects: {
  [key: string]: { title: string; description: string; teachers: P[] };
} = {
  cs: {
    title: "Computer Science",
    description:
      "STEMist's Computer Science course is highly rigorous, teaching languages Python, C++, and Javascript. Our thorough lessons don't just teach students to memorize languages, but help them understand the thought process and reasoning behind different syntax. After learning the fundamentals, students take a deep dive into the applications of computer science, including algorithmic thinking, which is the premise of most programming contests, like USACO. We teach topics that students have heard about, like machine learning, and creating websites with web development, both of which help students succeed in hackathons. Our qualified instructors have experience with multiple facets of computer science, ranging from USACO Silver and Gold competitors to multiple-time hackathon winners. Our curriculum helps students learn to like computer science, and helps them get interested in pursuing it further.",
    teachers: csTeachers,
  },
  phys: {
    title: "Physical Science",
    description:
      "STEMist's Physical Science covers a broad range of topics in Physics, Chemistry, Earth Science, and Astronomy. Presentations will go over the basics over the topic and show applications of the extensive material provided through the form of sample problems and explanations. Explanations will include information that is easily broken down into different segments to best prepare students in the subject matter. Our instructors include contestants and award winners through various physical science-related competitions and olympiads in science-related subjects including a combined 20+ years of Science Olympiad, Science Bowl, and Ocean Science Bowl experience winning dozens of medals and trophies. Instructors are familiar with teaching with all have past experience and willing to answer questions where students have lapses in understanding.",
    teachers: physTeachers,
  },
  math: {
    title: "Math",
    description:
      "Welcome to the math branch of STEMist! Here, you'll dive into the fundamentals of competition math. Our curriculum has been carefully designed to cover the 4 main topics that appear in math contests: Algebra, Combinatorics, Geometry, and Number Theory. Whilst in classes, students can not only expect to be taught necessary skills, but also be taught to apply these skills through challenging and rewarding problems. Our instructors are tremendously qualified, having won many high-level awards in contests like the AMC 8/10/12 and Math Kangaroo, and have qualified for the AIME numerous amount of times. They have more than a year of teaching experience and are always open to answering any difficult questions that may come with the twists and turns of mathematics.",

    teachers: mathTeachers,
  },
  bio: {
    title: "Biology",
    description:
      "STEMist's Intro to Biology is a comprehensive course which not only provides an introduction to the knowledge required for science competitions (including USABO, Science Bowl and Science Olympiad), but also delves deep into various fascinating topics (like oncology and immunology). Our curriculum covers biochemistry, molecular and cell biology, genetics, botany, anatomy, evolution and ethology, and ecology, touching upon all of the subjects covered in biolympiads and high school or AP biology courses. Our instructors are highly qualified, winning awards in many different contests (USABO semfinalists, Science Bowl competitors, Science Olympiad medalists, etc.). They also have more than two years of teaching experience, and are always happy to answer questions or explain tricky topics.",
    teachers: bioTeachers,
  },
};

export default function SubjectCurriculum(props: SubjectCurriculumProps) {
  const subjectDetails = subjects[props.subject];
  return (
    <Container title={props.subject}>
      <PartialBanner title={subjectDetails.title} />
      <div className="max-w-[100rem] px-5 mx-auto">
        <div>{subjectDetails.description}</div>
        <br />
        <div className="grid text-left gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {subjectDetails.teachers.map((t, index) => (
            <div
              key={index}
              className={`h-32 w-full overflow-hidden rounded-lg bg-white text-black shadow p-3`}
            >
              <Person
                person={t}
                roles={
                  t.curriculumRoles ? t.curriculumRoles[props.subject] : []
                }
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps<SubjectCurriculumProps> = async ({
  params,
}) => {
  return {
    props: {
      subject: params!.slug as string,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ["cs", "phys", "math", "bio"].map((subject) => ({
      params: {
        slug: subject,
      },
    })),
    fallback: false,
  };
};
