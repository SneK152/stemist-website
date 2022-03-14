import { useMemo } from "react";
import prizes from "./prizes";
import Section from "@/components/hacks/layout/Section";
import Prize from "./prize";

export default function PrizesSection() {
  const PrizeList = useMemo(() => prizes, []);

  return (
    <Section name="Prizes">
      <div className="odd:bg-gray-400 even:bg-gray-200 rounded-lg">
        {PrizeList.map((props, k) => (
          <Prize {...props} key={k} />
        ))}
      </div>
    </Section>
  );
}
