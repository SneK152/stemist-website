import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <div className="p-32 text-white h-1/2 bg-black text-center">
      <h1 className="p-2 font-extrabold text-4xl">Welcome to STEMist Hacks</h1>
      <p className="p-2 font-semibold text-2xl">from March 10 to March 16</p>
      <div>
        <Link href="/signup" passHref>
          <Button
            className="px-10 py-4 m-5 rounded-lg font-bold"
            start="#4C514A"
            end="#6C3B2A"
          >
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
}
