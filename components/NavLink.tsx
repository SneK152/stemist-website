import Link from "next/link";
import { useRouter } from "next/router";
import { NavLinkProps } from "../lib/utils";

export default function NavLink({
  children,
  href,
  className,
  main = false,
}: NavLinkProps) {
  const router = useRouter();
  return (
    <li
      className={`font-writing underline-offset-1 text-lg m-auto ${
        main ? `text-blue bg-white rounded-md px-3 py-1` : `text-white`
      } ${className || ""} ${router.pathname === href ? "font-extrabold" : ""}`}
    >
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
}
