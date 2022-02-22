import { Menu } from "@headlessui/react";
import Link from "next/link";
import { ReactNode } from "react";

export default function DropdownButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link href={href}>
          <a
            className={`${
              active ? "bg-gray-100 text-gray-900" : "text-gray-700"
            } block px-4 py-2 text-sm`}
          >
            {children}
          </a>
        </Link>
      )}
    </Menu.Item>
  );
}
