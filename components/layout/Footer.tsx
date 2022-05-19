import { navLinks } from "@/lib/data/navLinks";
import socials from "@/lib/data/socials";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center lg:text-left text-white">
      <div className="flex justify-end items-center p-6 pb-1 border-b border-gray-300 border-opacity-50">
        <ul className="flex gap-3 items-center justify-start mb-2">
          {socials.map((social, index) => (
            <li key={index}>
              <a href={social.link} target="_blank" rel="noreferrer noopener">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-6 py-10 pt-5 text-center md:text-left">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
          <div className="lg:col-span-2 hidden md:block">
            <Link href="/">
              <a>
                <Image
                  src="/logo.svg"
                  className="filter invert select-none"
                  height={55.3}
                  width={166.6}
                  alt="Our logo"
                />
              </a>
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-10 lg:col-span-7 items-center justify-start min-w-[10rem]">
            {navLinks
              .filter((l) => l.important === true && !l.customProps?.main)
              .map((link, i) => (
                <Link href={link.link} key={i}>
                  <a className="font-writing uppercase font-semibold text-xl basis-1/3 shrink xs:shrink-0 grow text-left lg:text-center footer-value">
                    {link.name}
                  </a>
                </Link>
              ))}
          </div>
          {/* <div className="lg:col-span-3 flex justify-center gap-1 items-center">
            <Button
              href={navLinks.find((l) => l.name === "Sign Up")?.link}
              backgroundColor="bg-blue-500"
              textColor="text-white mt-0"
              target="_blank"
            >
              Sign Up
            </Button>
            <Button
              href="/hacks"
              backgroundColor="bg-green bg-opacity-80"
              textColor="text-white mt-0"
            >
              Hackathon{" "}
              <ArrowRightIcon className="h-4 w-4 inline-block transform -rotate-45" />
            </Button>
          </div> */}
          <div className="text-center lg:col-span-3 items-center justify-center flex flex-col">
            <div>
              <span>
                © <time dateTime="2022">2022</time> Copyright{" "}
              </span>
              <span className="text-blue-500 font-semibold">
                STEMist Education
              </span>
            </div>
            <div>A registered 501(c)3 organization.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
