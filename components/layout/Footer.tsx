import { navLinks } from "@/lib/data/navLinks";
import socials from "@/lib/socials";
import { ArrowRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="text-center lg:text-left bg-black text-white">
      <div className="flex justify-center items-center lg:justify-between p-6 pb-1 border-b border-gray-300">
        <div className="mr-12">
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
        <ul className="flex gap-3 items-center justify-start">
          {socials.map((social, index) => (
            <li key={index}>
              <a href={social.link} target="_blank" rel="noreferrer noopener">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
          <div className="lg:col-span-4">
            <p>
              A student-led nonprofit bringing free STEM education to children
              ages 7 to 14.
            </p>
          </div>
          <div className="flex w-full lg:col-span-5 gap-2">
            {navLinks
              .filter((l) => l.dropdown)
              .map((link, i) => (
                <div key={i} className="min-w-[10rem] w-full">
                  <Link href={link.link}>
                    <a className="font-writing uppercase font-semibold text-xl">
                      {link.name}
                    </a>
                  </Link>
                  {link.dropdownItems?.map((item) => (
                    <Link href={item.link} key={item.name}>
                      <a className="text-base block">{item.name}</a>
                    </Link>
                  ))}
                </div>
              ))}
          </div>
          <div className="lg:col-span-3 flex justify-center gap-1 items-center">
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
          </div>
        </div>
      </div>
      <div className="text-center p-6">
        <span>© 2022 Copyright </span>
        <span className="text-blue-500 font-semibold">STEMist Education</span>
      </div>
    </footer>
  );
}
