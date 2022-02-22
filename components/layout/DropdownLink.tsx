import DropdownLinkProps from "@/lib/types/DropdownLinkProps";
import { Menu, Transition } from "@headlessui/react";
import { BanIcon, CogIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment, ReactNode } from "react";
import NavLink from "./NavLink";

function Dropdown({ children }: { children: ReactNode }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex h-full">
        <Menu.Button className="w-full rounded-md text-sm font-medium focus:outline-none">
          <ChevronDownIcon className="w-5 h-5 -mr-1" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">{children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default function DropdownLink({
  children,
  href,
  title,
}: DropdownLinkProps) {
  return (
    <div className="flex">
      <NavLink href={href}>{title}</NavLink>
      <Dropdown>{children}</Dropdown>
    </div>
  );
}
