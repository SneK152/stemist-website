import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import Gallery from "react-photo-gallery";
import { useCallback } from "react";
import Image from "next/image";
import { GetStaticProps } from "next";

export default function About({
  photos,
}: {
  photos: {
    src: string;
    srcSet?: string | string[] | undefined;
    sizes?: string | string[] | undefined;
    width: number;
    height: number;
    alt?: string | undefined;
    key?: string | undefined;
  }[];
}) {
  const imageRenderer = useCallback(
    ({ photo }) => (
      <div className="m-1">
        <Image
          alt={photo.title}
          src={photo.src}
          objectFit="cover"
          width={photo.width}
          height={photo.height}
          className="hover:scale-110 transition-transform duration-300"
        />
      </div>
    ),
    []
  );
  return (
    <Container title="Gallery">
      <PartialBanner title="Gallery" />
      <div className="m-3 p-4 space-y-5 padded-section mx-auto">
        <Gallery
          photos={photos}
          renderImage={imageRenderer}
          targetRowHeight={300}
          margin={4}
        />
        {/* <Section
          quote_num={0}
          title="About our Organization"
          image="/about/teamphoto.jpg"
          caption="Our amazing officer team. Front row left to right: Selena, Aryan, Steve, Justin, Sriman. Back row left to right: Sanya, Shanker, Anish, Isaac, Snehil."
        >
          STEMist Education is a student-led nonprofit that focuses on bringing
          exceptional and unparalleled STEM education to children of ages 7 to
          14. We have a variety of qualified instructors whom are skilled in
          areas such as Algebra, Computer Science, Biology, Chemistry, Physics,
          and much more. STEMist has been teaching kids STEM since 2020 and
          hopes to continue for much longer.
        </Section>
        <Section
          quote_num={1}
          title="Our Mission"
          image="/about/session.png"
          caption="A snapshot of one of our presentations"
        >
          We founded STEMist originally because we believed that learning was a
          gift that all students should have access to. We believe that kids
          should have access to proper education, especially in the
          rapidly-growing STEM fields. Our goal is to provide this education
          during times where students are available, such as in most school
          breaks. Ultimately, we want students to get an excelling immersion
          into STEM and build a foundation that they can rely on for years to
          come.
        </Section>
        <Section
          quote_num={2}
          title="Curriculum and Format"
          image="/about/slides.png"
          caption="Some of our past presentations"
        >
          Our team of instructors have vast amounts of experience in their
          respective STEM subjects, and they work hard to compile information in
          the form of engaging lectures every session. Our spring and winter
          break sessions are usually workshop-based with lectures daily followed
          by a twenty-minute Kahoot. These sessions have varying topics and
          difficulties, so everyone will be able to learn! During summer break,
          classes will be more curriculum-based, with different topics, ranging
          from Biology to CS to Math and more that students can learn over a
          one-week intensive period.
        </Section> */}
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const photos: {
    src: string;
    srcSet?: string | string[] | undefined;
    sizes?: string | string[] | undefined;
    width: number;
    height: number;
    alt?: string | undefined;
    key?: string | undefined;
  }[] = [
    { src: "/about/teamphoto.jpg", width: 2, height: 1 },
    { src: "/about/carousel2.png", width: 3, height: 2 },
    { src: "/about/carousel5.png", width: 3, height: 2 },
    { src: "/about/carousel1.png", width: 3, height: 2 },
    { src: "/about/carousel4.png", width: 4, height: 2 },
    { src: "/about/carousel3.png", width: 2, height: 1 },
    { src: "/about/carousel6.png", width: 1, height: 1 },
  ];

  return {
    props: {
      photos,
    },
  };
};
