import Link from "next/link";
import { useRouter } from "next/router";
import { NavLinkProps } from "../lib/utils";

export default function NavLink(props: NavLinkProps) {
  const router = useRouter();
  return (
    <li
      className={`font-writing underline-offset-1 text-white hover:font-bold ${
        props.className
      } ${router.pathname === props.href && "underline"}`}
    >
      <Link href={props.href}>
        <a>{props.children}</a>
      </Link>
    </li>
  );
}
