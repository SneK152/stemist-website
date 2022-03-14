import { useMemo } from "react";
import Dynamic from "next/dynamic";
import prizes from "./prizes";

const Section = Dynamic(() => import("@/components/hacks/layout/Section"));
const Prize = Dynamic(() => import("./prize"));

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
