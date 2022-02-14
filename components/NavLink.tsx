import Link from "next/link";
import { useRouter } from "next/router";
import { NavLinkProps } from "../lib/utils";

export default function NavLink({children, href, className, main = false}: NavLinkProps) {
  const router = useRouter();
  return (
    <li
      className={`font-writing underline-offset-1 ${main ? `text-blue bg-white rounded-md px-3` : `text-white`} hover:font-bold ${
        className
      } ${router.pathname === href && "font-semibold"}`}
    >
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
}
