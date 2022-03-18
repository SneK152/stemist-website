import { Disclosure } from "@headlessui/react";
import NavLink from "./NavLink";
import { ArrowLeftIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import DropdownLink from "./DropdownLink";
import DropdownButton from "./DropdownButton";
import Button from "../layout/Button";
import { navLinks } from "@/lib/data/navLinks";

export default function Navbar({ noNav = false }: { noNav: boolean }) {
  return (
    <Disclosure
      as="nav"
      className="fixed z-50 w-full bg-black bg-opacity-100 px-2 sm:px-6 lg:px-6"
    >
      {({ open }) => (
        <>
          <div className="flex justify-between py-3">
            <div>
              <Link href="/">
                <a>
                  <h1 className="font-display text-2xl font-bold">
                    <div className="flex items-center gap-1">
                      <Image
                        src="/logo.svg"
                        alt="STEMist Education"
                        priority
                        height={55.3}
                        width={166.6}
                        className="filter invert"
                      />
                    </div>
                  </h1>
                </a>
              </Link>
            </div>
            {!noNav && (
              <Disclosure.Button className="md:hidden">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon
                    className="block h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                ) : (
                  <MenuIcon className="block h-6 w-6 text-white" />
                )}
              </Disclosure.Button>
            )}
            {noNav && (
              <div className="mt-auto mb-auto">
                <Button
                  href="/"
                  backgroundColor="bg-blue-500 bg-opacity-80 hover:bg-opacity-90 flex items-center gap-1"
                  textColor="text-white font-display text-lg"
                >
                  <ArrowLeftIcon className="h-5 w-5 inline-block" />
                  Back to STEMist
                </Button>
              </div>
            )}
            {!noNav && (
              <div className="mt-auto mb-auto hidden md:block">
                <ul className="inline-flex gap-4">
                  {navLinks.map((navLink, index) =>
                    !navLink.dropdown ? (
                      <NavLink
                        key={index}
                        href={navLink.link}
                        {...(navLink.customProps ? navLink.customProps : {})}
                      >
                        {navLink.name}
                      </NavLink>
                    ) : (
                      <DropdownLink
                        href={navLink.link}
                        key={index}
                        title={navLink.name}
                      >
                        {navLink.dropdownItems?.map((item, i) => (
                          <DropdownButton href={item.link} key={i}>
                            {item.name}
                          </DropdownButton>
                        ))}
                      </DropdownLink>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
          {!noNav && (
            <Disclosure.Panel className="md:hidden">
              {() => (
                <div className="absolute w-full -translate-x-2 space-y-1 bg-[#0d021f] bg-opacity-100 object-cover px-2 pt-2 pb-3">
                  <ul>
                    {navLinks.map((navLink, i) => (
                      <Disclosure.Button key={i} className="block">
                        <NavLink
                          href={navLink.link}
                          {...(navLink.customProps ? navLink.customProps : {})}
                        >
                          {navLink.name}
                        </NavLink>
                      </Disclosure.Button>
                    ))}
                    {/* <Disclosure.Button className="block">
                      <NavLink href="/">Home</NavLink>
                    </Disclosure.Button>
                    <Disclosure.Button className="block">
                      <NavLink href="/about">About Us</NavLink>
                    </Disclosure.Button>
                    <Disclosure.Button className="block">
                      <NavLink href="/team">Meet the Team</NavLink>
                    </Disclosure.Button>
                    <Disclosure.Button className="block">
                      <NavLink href="/get-involved">Get Involved</NavLink>
                    </Disclosure.Button>
                    <Disclosure.Button className="block">
                      <NavLink href="/contact">Contact Us</NavLink>
                    </Disclosure.Button>
                    <Disclosure.Button className="block">
                      <NavLink href="/projects">Projects</NavLink>
                    </Disclosure.Button>
                    <div className="h-2"></div>
                    <Disclosure.Button className="block">
                      <NavLink
                        main
                        color="blue-500"
                        textColor="white"
                        href="/programs"
                      >
                        Programs
                      </NavLink>
                    </Disclosure.Button>
                    <div className="h-2"></div>
                    <Disclosure.Button className="block">
                      <NavLink main href="/get-involved/students">
                        Student Signups
                      </NavLink>
                    </Disclosure.Button> */}
                  </ul>
                </div>
              )}
            </Disclosure.Panel>
          )}
        </>
      )}
    </Disclosure>
  );
}
