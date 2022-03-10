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
}: NavLinkProps) {
  const router = useRouter();
  return (
    <li
      className={`font-writing m-auto text-lg underline-offset-1 whitespace-nowrap ${
        main
          ? `bg-${color} py-1 px-3 shadow-md rounded-lg hover:rounded-2xl hover:shadow-xl transition-all duration-300 text-${textColor}`
          : `text-white`
      } ${className || ""} ${router.pathname === href ? "font-extrabold" : ""}`}
    >
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
}
