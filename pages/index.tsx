import Banner from "@/components/layout/Banner";
import Container from "@/components/layout/Container";
import quotes from "@/lib/data/quotes";
import { scrollTo } from "@/lib/scroll";
import { sample } from "lodash";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/pages/Hero";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Button from "@/components/layout/Button";

const Homepage = dynamic(() => import("@/components/pages/Homepage"));

interface HomeProps {
  quote: string;
  author: string;
}

export default function Index(/*props: HomeProps*/) {
  return (
    <Container title="Home">
      <div className="-mt-20">
        <Banner image="/homepage.jpg" full>
          {/* <p
            className="font-writing px-5 text-xs text-left sm:px-10 sm:text-lg md:px-20"
            data-aos="fade-down"
            data-aos-delay={1000}
            data-aos-duration={600}
          >
            <span className="block italic">&quot;{props.quote}&quot;</span>
            <span className="block">-{props.author}</span>
          </p> */}
          <h1
            className="font-display text-left text-4xl sm:text-5xl font-bold md:text-6xl lg:text-8xl xl:text-8xl px-5 sm:px-10 md:px-20"
            data-aos="fade-right"
            data-aos-delay={0}
            data-aos-duration={600}
          >
            STEMist Education
          </h1>
          <span className="block sm:mb-4 font-sans text-lg text-left sm:text-2xl px-5 sm:px-10 md:px-20">
            <div
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={600}
            >
              Learn STEM hands-on.
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={600}
              data-aos-duration={600}
            >
              Engage with fellow students.
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={800}
              data-aos-duration={600}
            >
              Have the experience of a lifetime.
            </div>
          </span>
          <div className="flex justify-start px-5 sm:px-10 md:px-20 gap-3 text-lg whitespace-nowrap">
            <Button
              onClick={scrollTo("#learnmore")}
              backgroundColor="bg-white bg-opacity-10"
              textColor="text-white"
            >
              Learn More
            </Button>
            <Button
              href="/get-involved/students"
              backgroundColor="bg-blue-500"
              textColor="text-white"
            >
              Sign Up
            </Button>
            <Button
              href="/hacks"
              backgroundColor="bg-green bg-opacity-80"
              textColor="text-white"
            >
              Hackathon{" "}
              <ArrowRightIcon className="h-4 w-4 inline-block transform -rotate-45" />
            </Button>
          </div>
        </Banner>
        <Hero />
        <Homepage />
      </div>
    </Container>
  );
}

// export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
//   const quote = sample(quotes)!;
//   return {
//     props: {
//       quote: quote.quote,
//       author: quote.author,
//     },
//   };
// };
