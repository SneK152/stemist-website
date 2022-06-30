import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import Card from "@/components/pages/Card";
import Person from "@/components/team/Person";
import teachers from "@/lib/data/team/teachers";
import P from "@/lib/types/Person";
import { GetStaticPaths, GetStaticProps } from "next";
import { ReactNode, useCallback } from "react";
import { Session, sessionData } from "@/lib/data/sessions";

interface CurriculumProps {
  data: Session;
}

export default function Curriculum({ data }: CurriculumProps) {
  const personByName = useCallback((name: string) => {
    return teachers.find((person) => person.name === name)!;
  }, []);
  return (
    <Container title={data.title}>
      <PartialBanner
        title={data.title}
        subheader={`Our interactive session details and recordings for the ${data.title}`}
      />
      {data.media !== undefined && (
        <>
          <h1 className="text-center font-display font-bold text-5xl mb-5">
            Media
          </h1>
          <div
            className="flex justify-center gap-5 sm:flex-row flex-col flex-wrap w-full padded-section mx-auto"
            dangerouslySetInnerHTML={{ __html: data.media }}
          ></div>
          <br />
        </>
      )}
      <h1 className="text-center font-display font-bold text-5xl mb-5">
        Class Description
      </h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 padded-section mx-auto auto-rows-[1fr] items-start">
        {data.classes.map((c) => (
          <CurriculumCard
            title={c.title}
            subtitle={c.date}
            person={personByName(c.teacher)}
            key={c.title}
          >
            {c.description}
          </CurriculumCard>
        ))}
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
      <h1 className="text-black text-center font-display text-xl">
        {props.subtitle}
      </h1>
      <br />
      <div>{props.children}</div>
      <h1 className="font-display mt-3">Presented By</h1>
      <div className="grid text-left">
        <div
          className={`h-32 w-full overflow-hidden rounded-lg text-black p-3`}
        >
          <Person person={{ ...props.person, positions: [] }} />
        </div>
      </div>
    </Card>
  );
}

export const getStaticProps: GetStaticProps<CurriculumProps> = async ({
  params,
}) => {
  const slug = params!.slug as string;
  const data = sessionData.find((session) => session.slug === slug)!;
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = sessionData.map((s) => s.slug);
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};
