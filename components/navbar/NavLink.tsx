import Link from "next/link";
import { useRouter } from "next/router";
import NavLinkProps from "@/lib/types/NavLinkProps";
import { useMemo } from "react";

export default function NavLink({
  children,
  href = "#",
  link = () => alert(`Click for function`),
  via,
  className,
  main = false,
  color = "white",
  textColor = "black",
  target = "_self",
}: NavLinkProps) {
  const router = useRouter();
  const classes = useMemo(
    () =>
      `font-display m-auto text-lg underline-offset-1 whitespace-nowrap ${
        main
          ? `bg-${color} py-1 px-3 hover:border-opacity-40 transition-all duration-300 text-${textColor} border-2 border-opacity-20 border-white`
          : `text-white`
      } ${router.pathname === href ? "font-bold" : "font-normal"}`,
    [color, href, main, router.pathname, textColor]
  );
  return (
    <>
      {via === "link" && (
        <Link href={href!}>
          <a className={`${className || ""} m-auto`} target={target}>
            <li className={classes}>{children}</li>
          </a>
        </Link>
      )}
      {via === "function" && (
        <button onClick={link!} className={`${className || ""} `}>
          <li className={classes}>{children}</li>
        </button>
      )}
    </>
  );
}
