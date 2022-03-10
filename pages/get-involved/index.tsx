import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import LinkPage from "@/components/pages/LinkPage";
import PageLinks from "@/lib/types/PageLinks";

const involvedLinks: PageLinks[] = [
  {
    name: "Student Signups",
    description:
      "If you are a student that is interested in joining our class, go here!",
    url: "/students",
  },
  {
    name: "Team Applications",
    description:
      "If you are a student who wants to get involved in teaching or join our nonprofit, go here!",
    url: "https://bit.ly/stemistapps",
    external: true,
  },
  {
    name: "Donations",
    description: "If you would like to contribute to our cause, go here!",
    url: "/donate",
  },
];

export default function GetInvolved() {
  return (
    <Container title="Get Involved">
      <PartialBanner title="Get Involved" />
      <LinkPage links={involvedLinks} />
    </Container>
  );
}
