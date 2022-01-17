import { Disclosure } from "@headlessui/react"
import { Link } from "react-router-dom"
import NavLink from "./NavLink"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
export default function Navbar({ className }: { className?: string }) {
    return (
        <Disclosure as="nav" className={className}>
            {({ open }) => <>
                <div className="flex justify-between py-3">
                    <div>
                        <Link to="/">
                            <h1 className="font-bold font-display text-2xl">STEMzyme Education</h1>
                        </Link>
                    </div>
                    <Disclosure.Button className="sm:hidden">
                        <span className="sr-only">Open main menu</span>
                        {open ? <XIcon className="block w-6 h-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" />}
                    </Disclosure.Button>
                    <div className="mt-auto mb-auto hidden sm:block">
                        <ul className="inline-flex gap-4">
                            <NavLink href="/">
                                Home
                            </NavLink>
                            <NavLink href="/signup">
                                Sign Ups
                            </NavLink>
                            <NavLink href="/about">
                                About Us
                            </NavLink>
                            <NavLink href="/contact">
                                Contact Us
                            </NavLink>
                        </ul>
                    </div>
                </div>
                <Disclosure.Panel className="sm:hidden">
                    {({ close }) => <div className="px-2 pt-2 bg-gradient-to-r -translate-x-2 from-slate-200 to-slate-300 w-full object-cover absolute pb-3 space-y-1">
                        <ul>
                            <Disclosure.Button className="block">
                                <NavLink href="/">
                                    Home
                                </NavLink>
                            </Disclosure.Button>
                            <Disclosure.Button className="block">
                                <NavLink href="/signup">
                                    Sign Ups
                                </NavLink>
                            </Disclosure.Button>
                            <Disclosure.Button className="block">
                                <NavLink href="/about">
                                    About Us
                                </NavLink>
                            </Disclosure.Button>
                            <Disclosure.Button className="block">
                                <NavLink href="/contact">
                                    Contact Us
                                </NavLink>
                            </Disclosure.Button>
                        </ul>
                    </div>}
                </Disclosure.Panel>
            </>}
        </Disclosure>
    )
}