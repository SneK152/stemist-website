export default interface NavLinkProps
  extends React.HTMLAttributes<HTMLElement> {
  href: string;
  children: React.ReactNode;
  main?: boolean;
}
