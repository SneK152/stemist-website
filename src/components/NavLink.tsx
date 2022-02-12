import { NavLinkProps } from "../utils";

export default function NavLink(props: NavLinkProps) {
  const scrollFunction = () => {
    document.querySelector(props.href)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <li
      className={`font-writing underline-offset-1 text-white hover:font-bold ${props.className}`}
    >
      <a
        href={props.href}
        onClick={
          !("scroll-behavior" in document.body.style)
            ? scrollFunction
            : () => null
        }
      >
        {props.children}
      </a>
    </li>
  );
}
