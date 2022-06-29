import { navLinks } from "@/lib/data/navLinks";
import socials from "@/lib/data/socials";
import Image from "next/image";
import Link from "next/link";

const aboutLinks = [
  ...navLinks
    .find((l) => l.dropdown)
    ?.dropdownItems?.filter((l) => l.class === "about")!,
  ...navLinks.filter((l) => l.class === "about"),
];

const projectLinks = [
  ...navLinks
    .find((l) => l.dropdown)
    ?.dropdownItems?.filter((l) => l.class === "projects")!,
  ...navLinks.filter((l) => l.class === "projects"),
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-5">
      <div className="padded-section">
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-10">
            <div className="col-span-3 mb-5">
              <p className="text-base font-light hidden lg:block">
                STEMist is a 501(c)3 nonprofit based at Lynbrook High School.
                Founded in the summer of 2020, its goal of teaching kids STEM is
                supported by over 30 volunteers who teach classes and manage the
                organization. In addition to teaching classes, it also supports
                STEM education in many other ways such as hosting a Youtube
                channel and organizing a hackathon. Over the summer of 2022,
                STEMist raised over $1,200 for charity and taught over 30
                hour-long classes. Please direct all questions and concerns to
                contact@joinstemist.org.
              </p>
              <p className="text-lg font-light block lg:hidden">
                STEMist Education is a 501(c)3 nonprofit based at Lynbrook High
                School. Founded in the summer of 2020, its goal of teaching kids
                STEM is supported by over 30 volunteers who teach classes and
                manage the organization.
              </p>
            </div>
            <div className="flex md:hidden lg:flex justify-between lg:justify-end gap-10 w-full col-span-2">
              <div className="text-left">
                <h1 className="font-medium text-xl">About Us</h1>
                <div className="flex flex-col text-base">
                  {aboutLinks.map((link) => (
                    <Link href={link.link} key={link.name}>
                      <a target={link.customProps?.target}>{link.name}</a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <h1 className="font-medium text-xl">STEMist Projects</h1>
                <div className="flex flex-col text-base">
                  {projectLinks.map((link) => (
                    <Link href={link.link} key={link.name}>
                      <a target={link.customProps?.target}>{link.name}</a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <hr className="border-[1.5px]" />
          <div className="flex justify-between">
            <Image
              src="/logo-white.png"
              alt="STEMist Education"
              priority
              height={55.3}
              width={166.6}
              className="select-none"
            />
            <ul className="flex gap-3 items-center justify-start mb-2">
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
