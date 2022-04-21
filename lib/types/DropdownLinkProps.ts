import type { NavLink } from "../data/navLinks";

export default interface DropdownLinkProps
  extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title: string;
  mobile?: boolean;
  navLink: NavLink;
}
