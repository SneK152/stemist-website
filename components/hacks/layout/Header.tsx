import PartialBanner from "@/components/layout/PartialBanner";
import Link from "next/link";
import Button from "./Button";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <div className='w-full h-full p-5 text-center center justify-center'>
      <PartialBanner title="STEMist Hacks" />
      <div className='justify-center text-center m-auto'>
          <ChevronDownIcon className="mx-auto justify-center h-10 animate-bounce" />
      </div>
    </div>
  );
}
