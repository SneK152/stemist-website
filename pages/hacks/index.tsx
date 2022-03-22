import Header from "@/components/hacks/layout/Header";
import FAQ from "@/components/hacks/faq/Faq";
import Sponsors from "@/components/hacks/sponsors/Sponsors";
import Section from "@/components/hacks/layout/Section";
import Schedule from "@/components/hacks/schedule/Schedule";
import Container from "@/components/layout/Container";
import PrizesSection from "@/components/hacks/prizes";
import { hackathonNavLinks } from "@/lib/data/navLinks";

export default function App() {
  return (
    <Container
      title="STEMist Hacks"
      noNav
      navTitle="STEMist Hacks"
      customNav={hackathonNavLinks}
    >
      <Header />
      <div>
        <Section name="About our Hackathon">
          <div className="bg-gray-100 text-black p-5 rounded-lg shadow-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            mollitia facere aperiam natus voluptatum porro excepturi, amet atque
            debitis unde quo autem libero, non minima, a cum recusandae rem!
            Praesentium? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Fugit rem molestiae ullam sapiente, a quae atque neque
            corrupti quos vero iusto enim fugiat, aperiam qui animi inventore
            nobis nihil reprehenderit? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Esse magnam iste dicta omnis, delectus cupiditate
            quaerat nostrum suscipit officiis. Deleniti aut dolore mollitia
            voluptas suscipit inventore nostrum quia eos cupiditate? Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Debitis
            voluptatem nobis dignissimos consequuntur? Enim doloremque aut sunt
            tenetur, eum recusandae sint expedita quos, libero repellendus iusto
            provident praesentium maxime blanditiis? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Animi, debitis assumenda. Fugiat,
            vitae a tempore, autem fuga eligendi, cumque consequatur assumenda
            ipsum quas tempora voluptate ex eum quod dignissimos illum? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam amet
            pariatur culpa natus perferendis beatae molestiae voluptatum tempore
            expedita in, nesciunt fugit saepe corporis aut ipsum quia incidunt
            autem explicabo? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Similique nam quasi tempora? Alias animi totam, minima
            nostrum, beatae possimus iure accusantium, voluptas corrupti autem
            repudiandae ex harum tenetur incidunt recusandae.
          </div>
        </Section>
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
