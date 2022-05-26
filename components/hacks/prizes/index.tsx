import { useMemo } from "react";
import prizes from "./prizes";
import Section from "@/components/hacks/layout/Section";
import Prize from "./prize";
import Counter from "@/components/pages/Counter";

export default function PrizesSection() {
  return (
    <Section name="Prizes">
      <div className="text-white rounded-lg w-full">
        <PrizeSection title="Winners" filter="winners" />
        <PrizeSection title="Popular Vote" filter="everyone" />
        <PrizeSection title="Raffle" filter="raffle" />
        <Counter
          number={35000}
          className="!text-4xl"
          text="worth in prizes"
          symbol="+"
          before="$"
        />
      </div>
    </Section>
  );
}

function PrizeSection({
  title,
  filter,
}: {
  title: string;
  filter: "winners" | "everyone" | "raffle";
}) {
  const PrizeList = useMemo(
    () => prizes.filter((v) => v.type === filter),
    [filter]
  );
  return (
    <div>
      <h1 className="text-2xl font-display text-left px-5">{title}</h1>
      <hr className="border-white opacity-30 ml-4" />
      <br />
      {PrizeList.map((prize) => (
        <Prize {...prize} key={prize.presented_by} />
      ))}
      <br />
    </div>
  );
}
