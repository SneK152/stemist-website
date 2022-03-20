import { useMemo } from "react";
import prizes from "./prizes";
import Section from "@/components/hacks/layout/Section";
import Prize from "./prize";
import useAos from "@/components/useAos";

export default function PrizesSection() {
  const PrizeList = useMemo(() => prizes, []);

  return (
    <Section name="Prizes">
      <div {...useAos()} className="text-black odd:bg-gray-400 even:bg-gray-200 rounded-lg w-full">
        <table className="w-full">
          <thead className="w-full">
            <th> </th> 
            <th>Position</th>
            <th>Prizes</th>
          </thead>
          <tbody color="black" className="w-full">
            {PrizeList.map((props, k) => (
              <Prize {...props} key={k} />
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
