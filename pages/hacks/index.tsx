import Header from "@/components/hacks/layout/Header";
import FAQ from "@/components/hacks/faq/Faq";
import Sponsors from "@/components/hacks/sponsors/Sponsors";
import Section from "@/components/hacks/layout/Section";
import Schedule from "@/components/hacks/schedule/Schedule";
import Container from "@/components/layout/Container";
import Prize from "../../components/hacks/prizes/prize";
import PrizesSection from "@/components/hacks/prizes";

export default function App() {
  return (
    <Container title="STEMist Hacks">
      <Header />
      <div>
        <Section name="Frequently Asked Questions">
          <FAQ />
        </Section>
        <Section name="Our Sponsors">
          <Sponsors />
        </Section>
        <Section name="Hackathon Agenda">
          <Schedule />
        </Section>
        <PrizesSection />
      </div>
    </Container>
  );
}
