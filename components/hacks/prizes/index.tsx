import { useMemo } from "react";
import prizes from "./prizes";
import Section from "@/components/hacks/layout/Section";
import Prize from "./prize";
import useAos from "@/components/useAos";

export default function PrizesSection() {
  const PrizeList = useMemo(() => prizes, []);

  return (
    <Section name="Prizes">
      <div
        {...useAos()}
        className="text-black odd:bg-gray-400 even:bg-gray-200 rounded-lg w-full"
      >
        <div className="w-full grid grid-cols-12 py-3">
          <span className="col-span-1"></span>
          <p className="w-full col-span-5 text-xl font-display font-semibold">
            Position
          </p>
          <p className="w-full col-span-6 text-xl font-display font-semibold">
            Prizes
          </p>
        </div>
        <hr className="border-black" />
        <div className="w-full">
          {PrizeList.map((props, k) => (
            <div
              key={k}
              className="grid grid-cols-12 items-center group py-1 transition-all hover:bg-gray-300 hover:rounded-lg"
            >
              <Prize {...props} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
