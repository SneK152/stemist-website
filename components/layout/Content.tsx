import { ReactNode } from "react";

export default function Content({ children }: { children: ReactNode }) {
  return <div className="bg-white">{children}</div>;
}
