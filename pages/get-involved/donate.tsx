import Container from "@/components/layout/Container";
import UnavailableBanner from "@/components/layout/UnavailableBanner";

export default function Donate() {
  return (
    <Container title="Donations">
      <UnavailableBanner
        title="Unfortunately, we aren't accepting donations right now. Thanks for
        your support!"
      />
    </Container>
  );
}
