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
        <Banner image="/homepage2.jpeg" full>
          <h1 className="text-left font-normal font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:mb-5 max-w-[28ch]">
            Accelerating education with{" "}
            <span className="text-blue">engaging</span> workshops
          </h1>
          <span className="block sm:mb-4 text-lg font-light text-left sm:text-3xl">
            <div>Welcome to STEMist Education, a 501(c)3 nonprofit</div>
          </span>
          {/* <div className="flex sm:flex-row flex-col px-5 gap-2 sm:px-10 md:px-20 sm:gap-10">
            {events.map((e) => (
              <div className="flex flex-col" key={e}>
                <h2 className="uppercase font-display text-xs sm:text-sm text-left">
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
          </div> */}
        </Banner>
        <Homepage />
        <Hero />
      </div>
    </Container>
  );
}
