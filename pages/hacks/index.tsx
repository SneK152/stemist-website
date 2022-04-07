import Header from "@/components/hacks/layout/Header";
import FAQ from "@/components/hacks/faq/Faq";
import Sponsors from "@/components/hacks/sponsors/Sponsors";
import Section from "@/components/hacks/layout/Section";
import Schedule from "@/components/hacks/schedule/Schedule";
import Container from "@/components/layout/Container";
import PrizesSection from "@/components/hacks/prizes";
import { hackathonNavLinks } from "@/lib/data/navLinks";
import { GetServerSideProps } from "next";

export default function App() {
  return (
    <Container
      title="STEMist Hacks"
      noNav
      navTitle="STEMist Hacks"
      customNav={hackathonNavLinks}
    >
      <Header />
      <div className="max-w-[100rem] m-auto">
        <Section name="About our Hackathon" id="about">
          <div className="bg-black bg-opacity-20 text-white text-lg p-5 rounded-lg shadow-md">
            Welcome to STEMist Hacks! Join other hackers in creating a project
            to impress judges, and to win prizes. There will be workshops
            provided from our gracious sponsors, volunteers, and guest speakers
            to aid in your process. Or, you can start hacking the moment STEMist
            Hacks is open!
          </div>
        </Section>
        <Section name="Requirements">
          <div className="bg-black bg-opacity-20 text-white text-lg p-5 rounded-lg shadow-md">
            Build anything {`"`}tech-related{`"`} to impress judges and win
            prizes. This can include- AR/VR software, Camera Software, Data
            Analysis, Computer Science Programs, Games, Blender Videos,
            Mechanical Designs and Projects, Mini-Computers, Electrical or
            Pneumatic powered systems, a solution to a problem with an MVP
            coded, and much, much, more! If you have any questions, please ask
            on our discord server.
          </div>
        </Section>
        <Section name="Hackathon Agenda (PST)">
          <Schedule />
        </Section>
        <PrizesSection />
        <Section name="Our Sponsors">
          <Sponsors />
        </Section>
        <Section name="Frequently Asked Questions">
          <FAQ />
        </Section>
      </div>
    </Container>
  );
}
