export default interface DropdownLinkProps
  extends React.HTMLAttributes<HTMLElement> {
  href: string;
  children: React.ReactNode;
  title: string;
}
