import Banner from "@/components/layout/Banner";
import Container from "@/components/layout/Container";
import { scrollTo } from "@/lib/scroll";
import Hero from "@/components/pages/Hero";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Button from "@/components/layout/Button";
import Homepage from "@/components/pages/Homepage";

export default function Index() {
  return (
    <Container title="Home">
      <div className="-mt-20">
        <Banner image="/homepage.jpg" full>
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
              Learn STEM in an interactive way.
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
              Achieve your goals!
            </div>
          </span>
          <div className="flex sm:flex-row flex-col px-5 gap-2 sm:px-10 md:px-20 sm:gap-10">
            <div className="flex flex-col">
              <h2 className="uppercase font-writing text-sm text-left">
                upcoming event
              </h2>
              <h1 className="font-sans text-xl text-left">
                Intro to STEM Workshop
              </h1>
            </div>
            <div className="flex flex-col">
              <h2 className="uppercase font-writing text-sm text-left">
                upcoming event
              </h2>
              <h1 className="font-sans text-xl text-left">STEMist Hacks</h1>
            </div>
          </div>
          <div className="flex justify-start flex-wrap px-5 sm:px-10 md:px-20 gap-3 mt-2 text-lg whitespace-nowrap">
            <Button
              onClick={scrollTo("#learnmore")}
              backgroundColor="bg-white bg-opacity-10"
              textColor="text-white"
            >
              Learn More
            </Button>
            <Button
              href="/signup"
              target="_blank"
              backgroundColor="bg-blue-500"
              textColor="text-white"
            >
              Intro to STEM Workshop Signups
            </Button>
            <Button href="https://bit.ly/stemistapplication" target="_blank">
              Join our Organization
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
        <Homepage />
        <Hero />
      </div>
    </Container>
  );
}
