import Banner from "@/components/layout/Banner";
import Container from "@/components/layout/Container";
import { scrollTo } from "@/lib/scroll";
import Hero from "@/components/pages/Hero";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Button from "@/components/layout/Button";
import Homepage from "@/components/pages/Homepage";

const events = ["STEMist Hacks", "Summer Classes"];

export default function Index() {
  return (
    <Container title="Home">
      <div>
        <Banner image="/homepage2.jpg" full>
          <h1
            className="text-left font-display text-3xl sm:text-4xl font-bold md:text-5xl lg:text-7xl px-5 sm:px-10 md:px-20"
            data-aos="fade-right"
            data-aos-delay={0}
            data-aos-duration={600}
            data-aos-anchor="#top"
          >
            The Leading STEM Education Initiative
          </h1>
          <span className="block sm:mb-4 font-sans text-base text-left sm:text-2xl px-5 sm:px-10 md:px-20">
            <div
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={600}
              data-aos-anchor="#top"
            >
              Learn STEM in an interactive way.
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={600}
              data-aos-duration={600}
              data-aos-anchor="#top"
            >
              Engage with fellow students.
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={800}
              data-aos-duration={600}
              data-aos-anchor="#top"
            >
              Achieve your goals!
            </div>
          </span>
          <div className="flex sm:flex-row flex-col px-5 gap-2 sm:px-10 md:px-20 sm:gap-10">
            {events.map((e) => (
              <div className="flex flex-col" key={e}>
                <h2 className="uppercase font-writing text-xs sm:text-sm text-left">
                  upcoming event
                </h2>
                <h1 className="font-sans sm:text-xl text-left">{e}</h1>
              </div>
            ))}
          </div>
          <div className="flex justify-start flex-wrap px-5 sm:px-10 md:px-20 sm:gap-3 gap-1 sm:mt-2 text-lg whitespace-nowrap">
            <Button
              onClick={scrollTo("#learnmore")}
              backgroundColor="bg-white bg-opacity-10"
              textColor="text-white"
            >
              Learn More
            </Button>
            <Button
              href="/programs"
              backgroundColor="bg-blue-500"
              textColor="text-white"
            >
              Summer Classes
            </Button>
            <Button
              href="https://stemist-hacks.devpost.com"
              backgroundColor="bg-green bg-opacity-80"
              textColor="text-white"
              target="_blank"
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
