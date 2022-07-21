import Counter from "./Counter";

const HomeCounter = (props: {
  number: number;
  symbol: string;
  text: string;
}) => (
  <div className="rounded-xl w-52 h-64 mx-auto  mt-10 bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
    <div className="flex flex-col justify-between h-full bg-steve-dark text-white rounded-lg p-4">
      <Counter {...props} />
    </div>
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
