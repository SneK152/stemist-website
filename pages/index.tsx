import Banner from "@/components/layout/Banner";
import Hero from "@/components/pages/Hero";

export default function Index() {
  return (
    <div className="-mt-16">
      <Banner image="/homepage.webp" full>
        <span className="block font-sans text-sm sm:text-lg">
          Learn STEM hands-on. Engage with fellow students. Have the experience
          of a lifetime.
        </span>
        <h1 className="font-display text-4xl font-bold md:text-6xl lg:text-8xl xl:text-8xl">
          STEMist Education
        </h1>
        <p className="font-writing px-5 text-sm sm:px-10 sm:text-xl md:px-20">
          <span className="block italic">
            &quot;Tell me, and I will listen Teach me, and I&apos;ll remember
            Involve me, and I will learn.&quot;
          </span>
          <span className="block text-sm sm:text-base">-Benjamin Franklin</span>
        </p>
      </Banner>
      <Hero />
    </div>
  );
}
