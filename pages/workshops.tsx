import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import Card from "@/components/pages/Card";
import Person from "@/components/team/Person";
import teachers from "@/lib/data/team/teachers";
import P from "@/lib/types/Person";
import { ReactNode, useCallback } from "react";

export default function Curriculum() {
  const personByName = useCallback((name: string) => {
    return teachers.find((person) => person.name === name)!;
  }, []);
  return (
    <Container title="Workshop Recap">
      <PartialBanner title="Workshop Recap" />
      <h1 className="text-center font-display font-bold text-3xl">
        Recordings
      </h1>
      <div className="flex justify-center gap-3 sm:flex-row flex-col w-full px-2 sm:px-6 lg:px-6 mx-auto">
        <iframe
          src="https://www.youtube.com/embed/xM73rqNecig"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-96"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/nhyKvVnXGCQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-96"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/CDrld7EdTb4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-96"
        ></iframe>
      </div>
      <br />
      <h1 className="text-center font-display font-bold text-3xl">
        Class Descriptions
      </h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 max-w-[100rem] px-2 sm:px-6 lg:px-6 mx-auto">
        <CurriculumCard
          title="Full Stack Web Development"
          subtitle="Monday, April 18th"
          person={personByName("Snehil Kakani")}
        >
          In this workshop session, we will take a deep dive into the basics of
          web development. Students attending the session will learn how to get
          started with building their own passion projects using web
          technologies. Concepts learned include HTML, CSS, JavaScript, and the
          basics of backend and API development. This session will be a great
          opportunity to learn how to build a website from scratch.
        </CurriculumCard>
        <CurriculumCard
          subtitle="Tuesday, April 19th"
          title="Biotechnology"
          person={personByName("Selena Yang")}
        >
          Biotechnology is a fascinating subject that not many students know
          about. In this session, students will learn about all kinds of
          concepts important in modern biology, such as protein structure, cell
          purification, and DNA experimentation and sequencing. These concepts
          can be applied to the real world and help students understand how to
          make a difference in the world.
        </CurriculumCard>
        <CurriculumCard
          subtitle="Wednesday, April 20th"
          title="Genetics"
          person={personByName("Harold Wang")}
        >
          In this session, students will learn all about genetics, such as what
          makes up the human body, how cells work, DNA, and heredity. By the end
          of this session, expect to know many cool facts about the human body
          and how it works.
        </CurriculumCard>
        <CurriculumCard
          subtitle="Thursday, April 21st"
          title="Waves"
          person={personByName("Steve Yang")}
        >
          Waves are used in many real-world situations. Not just ocean waves,
          but also electromagnetic waves, light waves, sound waves, and so much
          more. In this session, students will learn all about waves and what
          they are made up of. They will also learn amazing facts about waves
          and how they work.
        </CurriculumCard>
        <CurriculumCard
          subtitle="Friday, April 22nd"
          title="Thermodynamics"
          person={personByName("Sanya Badhe")}
        >
          Thermodynamics is a fascinating subject that not many students know
          of. It is the science of relationships between heat, temperature, and
          energy. Students will learn lots of energy and heat related concepts
          in this deep dive session.
        </CurriculumCard>
      </div>
    </Container>
  );
}

interface CurriculumCardProps {
  title: string;
  person: P;
  children: ReactNode;
  subtitle: string;
}

function CurriculumCard(props: CurriculumCardProps) {
  return (
    <Card title={props.title}>
      <h1 className="text-neutral-100 text-center font-writing text-xl">
        {props.subtitle}
      </h1>
      <br />
      <div>{props.children}</div>
      <br />
      <div className="grid text-left">
        <div
          className={`h-32 w-full overflow-hidden rounded-lg bg-white text-black shadow p-3`}
        >
          <Person person={{ ...props.person, positions: [] }} />
        </div>
      </div>
    </Card>
  );
}
