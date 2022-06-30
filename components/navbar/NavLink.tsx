import Link from "next/link";
import { useRouter } from "next/router";
import NavLinkProps from "@/lib/types/NavLinkProps";

export default function NavLink({
  children,
  href,
  className,
  main = false,
  color = "white",
  textColor = "black",
  target = "_self",
}: NavLinkProps) {
  const router = useRouter();
  return (
    <li
      className={`font-writing m-auto text-lg underline-offset-1 whitespace-nowrap ${
        main
          ? `bg-${color} py-1 px-3 shadow-md rounded-lg hover:rounded-xl hover:shadow-lg transition-all duration-300 text-${textColor}`
          : `text-white`
      } ${router.pathname === href ? "font-bold" : "font-normal"}`}
    >
      <Link href={href}>
        <a className={`${className || ""}`} target={target}>
          {children}
        </a>
      </Link>
    </li>
  );
}
