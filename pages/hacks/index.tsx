import Header from "@/components/hacks/layout/Header";
import FAQ from "@/components/hacks/faq/Faq";
import Sponsors from "@/components/hacks/sponsors/Sponsors";
import Section from "@/components/hacks/layout/Section";
import Schedule from "@/components/hacks/schedule/Schedule";
import Container from "@/components/layout/Container";
import PrizesSection from "@/components/hacks/prizes";

export default function App() {
  return (
    <Container title="STEMist Hacks">
      <Header />
      <div>
        <Section name="Hackathon Agenda" id="agenda">
          <Schedule />
        </Section>
        <PrizesSection />
        <Section name="Frequently Asked Questions">
          <FAQ />
        </Section>
        <Section name="Our Sponsors">
          <Sponsors />
        </Section>
      </div>
    </Container>
  );
}
