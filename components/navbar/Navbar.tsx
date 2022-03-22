import { Disclosure } from "@headlessui/react";
import NavLink from "./NavLink";
import { ArrowLeftIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import DropdownLink from "./DropdownLink";
import DropdownButton from "./DropdownButton";
import Button from "../layout/Button";
import { navLinks } from "@/lib/data/navLinks";

export default function Navbar({
  noNav,
  navTitle,
  customNav,
}: {
  noNav: boolean;
  navTitle: string;
  customNav: any[];
}) {
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
                        className="filter invert select-none"
                      />
                      <span className="font-semibold">{navTitle}</span>
                    </div>
                  </h1>
                </a>
              </Link>
            </div>
            {!noNav && (
              <Disclosure.Button className="lg:hidden">
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
              <div className="mt-auto mb-auto flex">
                <ul className="inline-flex gap-4">
                  {customNav.map((navLink, index) => (
                    <NavLink key={index} href={navLink.link}>
                      {navLink.name}
                    </NavLink>
                  ))}
                  <NavLink
                    main
                    href="/"
                    color="blue-500 bg-opacity-80 hover:bg-opacity-90"
                    textColor="white"
                    className="flex items-center gap-1"
                  >
                    <ArrowLeftIcon className="h-5 w-5 inline-block" />
                    Back to STEMist
                  </NavLink>
                </ul>
              </div>
            )}
            {!noNav && (
              <div className="mt-auto mb-auto hidden lg:block">
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
                      <DropdownLink key={index} title={navLink.name}>
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
            <Disclosure.Panel className="lg:hidden">
              {() => (
                <div className="absolute w-full -translate-x-2 sm:-translate-x-6 space-y-1 bg-black bg-opacity-100 object-cover px-2 pt-2 pb-3">
                  <ul>
                    {navLinks.map((navLink, i) => (
                      <>
                        {navLink.customProps?.main && (
                          <div
                            className="h-2"
                            key={`${navLink.name}${i}`}
                          ></div>
                        )}
                        {!navLink.dropdown ? (
                          <Disclosure.Button key={i} className="block">
                            <NavLink
                              href={navLink.link}
                              {...(navLink.customProps
                                ? navLink.customProps
                                : {})}
                            >
                              {navLink.name}
                            </NavLink>
                          </Disclosure.Button>
                        ) : (
                          // <DropdownLink key={i} title={navLink.name} mobile>
                          //   {navLink.dropdownItems?.map((item, i) => (
                          //     <Disclosure.Button key={i} className="block">
                          //       <DropdownButton href={item.link}>
                          //         {item.name}
                          //       </DropdownButton>
                          //     </Disclosure.Button>
                          //   ))}
                          // </DropdownLink>
                          <Disclosure>
                            <Disclosure.Button className="block font-writing text-lg underline-offset-1 whitespace-nowrap">
                              {navLink.name}
                            </Disclosure.Button>
                            <Disclosure.Panel>
                              {navLink.dropdownItems?.map((item, i) => (
                                <Link key={i} href={item.link}>
                                  <a className="block ml-3">{item.name}</a>
                                </Link>
                              ))}
                            </Disclosure.Panel>
                          </Disclosure>
                        )}
                      </>
                    ))}
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
