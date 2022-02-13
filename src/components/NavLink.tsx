import { Link, useLocation } from "react-router-dom";
import { NavLinkProps } from "../utils";

export default function NavLink(props: NavLinkProps) {
  const location = useLocation();
  return (
    <li
      className={`font-writing underline-offset-1 text-white hover:font-bold ${
        props.className
      } ${location.pathname === props.href && "underline"}`}
    >
      <Link to={props.href}>{props.children}</Link>
    </li>
  );
}
