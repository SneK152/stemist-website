import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import TabPage from "@/components/pages/TabPage";

export default function Programs() {
  return (
    <Container title="Summer Classes">
      <PartialBanner title="Summer Classes" />
      <h1 className="text-center font-display text-4xl font-bold mb-5">
        What We Teach
      </h1>
      <div className="max-w-[100rem] px-5">
        <TabPage />
      </div>
    </Container>
  );
}
