import Link from "next/link";
import { useRouter } from "next/router";
import NavLinkProps from "@/lib/types/NavLinkProps";

export default function NavLink({
  children,
  href,
  className,
  main = false,
}: NavLinkProps) {
  const router = useRouter();
  return (
    <li
      className={`font-writing m-auto text-lg underline-offset-1 ${
        main ? `rounded-md bg-white px-3 py-1 text-black` : `text-white`
      } ${className || ""} ${router.pathname === href ? "font-extrabold" : ""}`}
    >
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
}
