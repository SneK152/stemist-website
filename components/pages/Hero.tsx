import Counter from "./Counter";

const HomeCounter = (props: {
  number: number;
  symbol: string;
  text: string;
}) => (
  <div className="border border-white p-5 h-full w-full">
    <Counter {...props} />
  </div>
);

export default function Hero() {
  return (
    <div className="bg-black mt-5">
      <div className="sm:grid-cols-2 lg:grid-cols-4 gap-3 grid-cols-1 py-10 px-24 m-auto place-items-center sm:min-h-[18rem] min-h-[30rem] grid scroll-mt-24 padded-section">
        <HomeCounter
          number={100}
          symbol="+"
          text="Interactive presentations created"
        />
        <HomeCounter
          number={1.2}
          symbol="k"
          text="Dollars raised for charity"
        />
        <HomeCounter
          number={30}
          symbol="+"
          text="Highly qualified instructors"
        />
        <HomeCounter
          number={250}
          symbol="+"
          text="Students taught nationwide"
        />
      </div>
    </div>
  );
}
