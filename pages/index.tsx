export default function Index() {
  return <Hero />;
}

function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat object-cover"
      style={{ backgroundImage: `url("/homepage.webp")` }}
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="absolute flex min-h-2/5 h-auto w-3/4 flex-col justify-center gap-3 overflow-hidden break-words rounded-3xl bg-green text-white bg-opacity-80 p-4 text-center backdrop-blur-md sm:w-1/2">
          <span className="block font-sans text-lg">
            Learn STEM hands-on. Engage with fellow students. Have the
            experience of a lifetime.
          </span>
          <h1 className="font-sans text-4xl font-bold lg:text-7xl xl:text-8xl">
            STEMist Education
          </h1>
          <p className="px-5 font-writing text-base sm:px-10 sm:text-xl md:px-20">
            <span className="block italic">
              &quot;Tell me, and I will listen Teach me, and I&apos;ll remember
              Involve me, and I will learn.&quot;
            </span>
            <span className="block text-base">-Benjamin Franklin</span>
          </p>
        </div>
      </div>
    </div>
  );
}
