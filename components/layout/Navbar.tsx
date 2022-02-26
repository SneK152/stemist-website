import { Disclosure, Menu } from "@headlessui/react";
import NavLink from "./NavLink";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import DropdownLink from "./DropdownLink";
import DropdownButton from "./DropdownButton";

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="fixed z-50 w-full bg-[#0d021f] bg-opacity-100 px-2 sm:px-6 lg:px-6"
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
            <Disclosure.Button className="sm:hidden">
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
            <div className="mt-auto mb-auto hidden sm:block">
              <ul className="inline-flex gap-4">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About Us</NavLink>
                <DropdownLink href="/team" title="Meet the Team">
                  <DropdownButton href="/team#directors">
                    Directors
                  </DropdownButton>
                  <DropdownButton href="/team#officers">
                    Officers
                  </DropdownButton>
                  <DropdownButton href="/team#staff">Staff</DropdownButton>
                  <DropdownButton href="/team#instructors">
                    Instructors
                  </DropdownButton>
                </DropdownLink>
                <NavLink href="/contact">Get Involved</NavLink>
                <NavLink main href="/signup">
                  Sign Ups
                </NavLink>
              </ul>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            {({ close }) => (
              <div className="absolute w-full -translate-x-2 space-y-1 bg-[#0d021f] bg-opacity-100 object-cover px-2 pt-2 pb-3">
                <ul>
                  <Disclosure.Button className="block">
                    <NavLink href="/">Home</NavLink>
                  </Disclosure.Button>
                  <Disclosure.Button className="block">
                    <NavLink href="/about">About Us</NavLink>
                  </Disclosure.Button>
                  <Disclosure.Button className="block">
                    <NavLink href="/team">Meet the Team</NavLink>
                  </Disclosure.Button>
                  <Disclosure.Button className="block">
                    <NavLink href="/contact">Get Involved</NavLink>
                  </Disclosure.Button>
                  <div className="h-2"></div>
                  <Disclosure.Button className="block">
                    <NavLink main href="/signup">
                      Sign Ups
                    </NavLink>
                  </Disclosure.Button>
                </ul>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
