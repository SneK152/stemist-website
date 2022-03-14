import Banner from "@/components/layout/Banner";
import Container from "@/components/layout/Container";
import quotes from "@/lib/data/quotes";
import { scrollTo } from "@/lib/scroll";
import { sample } from "lodash";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import Hero from "@/components/pages/Hero";

const Homepage = dynamic(() => import("@/components/pages/Homepage"));

interface HomeProps {
  quote: string;
  author: string;
}

export default function Index(props: HomeProps) {
  return (
    <Container title="Home">
      <div className="-mt-16">
        <Banner image="/homepage.webp" full>
          <p className="font-writing px-5 text-sm sm:px-10 sm:text-xl md:px-20">
            <span className="block italic">&quot;{props.quote}&quot;</span>
            <span className="block text-sm sm:text-base">-{props.author}</span>
          </p>
          <h1 className="font-display text-4xl font-bold md:text-6xl lg:text-8xl xl:text-8xl">
            STEMist Education
          </h1>
          <span className="block font-sans text-sm sm:text-xl">
            Learn STEM hands-on. Engage with fellow students. Have the
            experience of a lifetime.
          </span>
          <div className="flex justify-center gap-3 text-lg">
            <button
              className="bg-white bg-opacity-10 text-white py-2 px-3 shadow-md rounded-lg hover:rounded-2xl hover:shadow-xl transition-all duration-300"
              onClick={scrollTo("#learnmore")}
            >
              Learn More
            </button>
            <Link href="/get-involved/students">
              <a className="bg-blue-500 py-2 px-3 shadow-md rounded-lg hover:rounded-2xl hover:shadow-xl transition-all duration-300">
                Sign Up
              </a>
            </Link>
          </div>
        </Banner>
        <Hero />
        <Homepage />
      </div>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const quote = sample(quotes)!;
  return {
    props: {
      quote: quote.quote,
      author: quote.author,
    },
  };
};
