import { useMemo } from "react";
import prizes from "./prizes";
import Section from "@/components/hacks/layout/Section";
import Prize from "./prize";
import useAos from "@/components/useAos";
import useWindowSize from "@/lib/hooks/useWindowSize";
import Counter from "@/components/pages/Counter";

export default function PrizesSection() {
  const PrizeList = useMemo(() => prizes, []);

  const { width } = useWindowSize();

  return (
    <Section name="Prizes">
      <div {...useAos()} className="text-white rounded-lg w-full">
        {/* <div className="w-full grid grid-cols-12 py-3 px-5">
          {width! > 640 && <span className="col-span-1"></span>}
          <p className="w-full col-span-6 sm:col-span-5 text-xl font-display font-semibold">
            Type
          </p>
          <p className="w-full col-span-6 text-xl font-display font-semibold">
            Prizes
          </p>
        </div> */}
        <hr className="border-white" />
        <div className="w-full">
          {PrizeList.map((props, k) => (
            <Prize {...props} key={k} />
          ))}
        </div>
        <br />
        <Counter number={15_500} text="worth in prizes" symbol="$" before />
      </div>
    </Section>
  );
}
