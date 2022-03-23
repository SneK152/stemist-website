import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import LinkPage from "@/components/pages/LinkPage";
import PageLinks from "@/lib/types/PageLinks";

const involvedLinks: PageLinks[] = [
  {
    name: "Contact Us",
    description: "If you want to reach out to us, go here!",
    url: "/contact",
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
      <LinkPage links={involvedLinks} columns={3} base="/get-involved" />
    </Container>
  );
}
