import Button from "@/components/layout/Button";
import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import TabPage from "@/components/pages/TabPage";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Programs() {
  return (
    <Container title="Summer Classes">
      <PartialBanner title="Summer Classes" />
      <h1 className="text-center font-display text-4xl font-bold mb-8">
        Course Description
      </h1>
      <div className="grid grid-cols-14 mx-[12.5%] gap-3 padded-section">
        <div className="col-span-1"></div>
        <div className="col-span-4">
          <Image
            src="/summer-flyer.png"
            alt="Flyer for STEMist Summer Class 2022"
            width={435}
            height={580}
            layout="responsive"
          />
        </div>
        <div className="col-span-8 flex justify-center gap-3 flex-col items-center px-5">
          <p className="text-3xl">
            STEMist is proud to announce our Summer 2022 Course from 6/13 to
            7/24. Classes are 1 to 1.5 hours long and four unique classes are
            offered, including Intro to USACO and Machine Learning, AMC8 and
            MATHCOUNTS Preparation, Intro to USABO and our Physical Science
            course at $10 per week.
          </p>
          <Button
            href="/signup"
            backgroundColor="bg-blue-500"
            textColor="text-white text-xl"
            target="_blank"
          >
            Sign Up Now!{" "}
            <ArrowRightIcon className="h-4 w-4 inline-block transform -rotate-45" />
          </Button>
        </div>
      </div>
      <h1 className="text-center font-display text-4xl font-bold mb-5">
        What We Teach
      </h1>
      <div className="">
        <TabPage />
      </div>
    </Container>
  );
}
