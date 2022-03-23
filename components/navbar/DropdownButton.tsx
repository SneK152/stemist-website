import { Menu } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function DropdownButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const router = useRouter();
  return (
    <Menu.Item>
      {() => (
        <Link href={href}>
          <a
            className={`${
              router.pathname === href
                ? "bg-neutral-200 font-semibold"
                : "hover:bg-neutral-100"
            } block px-4 py-2 text-base font-medium text-black z-50`}
          >
            {children}
          </a>
        </Link>
      )}
    </Menu.Item>
  );
}
