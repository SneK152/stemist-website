import Counter from "./Counter";

const HomeCounter = (props: {
  number: number;
  symbol: string;
  text: string;
}) => (
  <div className="border border-white h-full w-full">
    <Counter {...props} />
  </div>
);

export default function Hero() {
  return (
    <div className="bg-black my-5">
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
    /* <div className="w-full grid place-items-center">
        <div className="w-full text-center">
          <h1 className="lg:text-5xl sm:text-3xl text-2xl font-bold">
            STEMist is <span ref={el}></span>
          </h1>
          <br />
          <p className="font-display text-xl mb-5 max-w-[40ch] m-auto">
            Watch our video to learn more{" "}
            {width! >= 640 ? (
              <ArrowRightIcon className="h-4 w-4 inline-block" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 inline-block" />
            )}
          </p>
        </div>
      </div>
      <div className="w-full">
        <HomeCarousel />
        <video
          poster="/logo.svg"
          preload="none"
          controls
          playsInline
          ref={video}
          className="bg-white aspect-video h-full w-full"
        >
          <track
            src="/homepage-subtitles.vtt"
            label="English"
            kind="subtitles"
            srcLang="en"
            default
          />
          <track
            src="/homepage-captions.vtt"
            label="English"
            kind="captions"
            srcLang="en"
            default
          />
          <source src="/homepage.mp4" type="video/mp4" />
        </video> */
  );
}
