import image from "../images/homepage.webp";

export default function Index() {
  return (
    <>
      <Hero />
      <Body />
    </>
  );
}

function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat object-cover"
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="absolute flex h-2/5 w-3/4 flex-col justify-center gap-3 overflow-hidden break-words rounded-3xl bg-green text-white bg-opacity-80 p-4 text-center backdrop-blur-md sm:h-2/5 sm:w-1/2">
          <span className="block font-sans text-lg">
            Learn STEM hands-on. Engage with fellow students. Have the
            experience of a lifetime.
          </span>
          <h1 className="font-display text-4xl font-bold lg:text-7xl xl:text-8xl">
            STEMist Education
          </h1>
          <p className="px-5 font-writing text-base sm:px-10 sm:text-xl md:px-20">
            <span className="block italic">
              "Tell me, and I will listen Teach me, and I'll remember Involve
              me, and I will learn."
            </span>
            <span className="block text-base">-Benjamin Franklin</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="m-3 p-3">
      <div className="z-50 m-auto w-full space-y-3 rounded-xl border border-gray-200 bg-white p-3 shadow-lg sm:w-9/12">
        <h1 className="text-center font-display text-xl font-semibold">
          Who We Are
        </h1>
        <p className="text-center font-light">
          Stemist Education is a student-led nonprofit that focuses on bringing
          free STEM education to kids of all ages. We have a variety of
          qualified instructors whom are very skilled in areas such as Biology,
          Oceanography, Web Development, Computer Science, Algebra, and more.
        </p>
      </div>
    </div>
  );
}
