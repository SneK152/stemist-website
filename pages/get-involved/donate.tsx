import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";

export default function Donate() {
  return (
    <Container title="Donations">
      <PartialBanner
        title={
          <span className="text-2xl md:text-3xl lg:text-5xl">
            Unfortunately, we aren&apos;t accepting donations right now. Thanks
            for your support!
          </span>
        }
      />
    </Container>
  );
}
