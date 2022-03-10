import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import LinkPage from "@/components/pages/LinkPage";
import PageLinks from "@/lib/types/PageLinks";

const projectLinks: PageLinks[] = [
  {
    name: "STEMist Hacks",
    url: "/hacks",
    description:
      "If you are interested in learning about our upcoming hackathon, go here!",
  },
  {
    name: "WEBS",
    url: "/webs",
    description: "Coming Soon",
  },
];

export default function Projects() {
  return (
    <Container title="Projects">
      <PartialBanner title="Projects" />
      <LinkPage links={projectLinks} columns={[2, 1]} base="/" />
    </Container>
  );
}
