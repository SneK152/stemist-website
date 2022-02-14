import { Disclosure } from "@headlessui/react";
import NavLink from "./NavLink";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  return (
    <Disclosure as="nav" className={className}>
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
                        height={40}
                        width={66.6666}
                      />
                    </div>
                  </h1>
                </a>
              </Link>
            </div>
            <Disclosure.Button className="sm:hidden">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </Disclosure.Button>
            <div className="mt-auto mb-auto hidden sm:block">
              <ul className="inline-flex gap-4">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About Us</NavLink>
                <NavLink href="/signup">Sign Ups</NavLink>
                <NavLink href="/team">Meet the Team</NavLink>
                <NavLink href="/contact">Contact Us</NavLink>
              </ul>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            {({ close }) => (
              <div className="absolute w-full -translate-x-2 space-y-1 bg-blue bg-opacity-95 object-cover px-2 pt-2 pb-3">
                <ul>
                  <Disclosure.Button className="block">
                    <NavLink href="/">Home</NavLink>
                  </Disclosure.Button>
                  <Disclosure.Button className="block">
                    <NavLink href="/about">About Us</NavLink>
                  </Disclosure.Button>
                  <Disclosure.Button className="block">
                    <NavLink href="/signup">Sign Ups</NavLink>
                  </Disclosure.Button>
                  <Disclosure.Button className="block">
                    <NavLink href="/team">Meet the Team</NavLink>
                  </Disclosure.Button>
                  <Disclosure.Button className="block">
                    <NavLink href="/contact">Contact Us</NavLink>
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
