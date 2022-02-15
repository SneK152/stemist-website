import { ReactNode } from "react";

export default function Banner({
  image,
  children,
  className,
  full,
}: {
  image: string;
  children: ReactNode;
  className?: string;
  full?: boolean;
}) {
  return (
    <div
      className={`${
        full ? "h-screen" : "h-[50vh]"
      } mb-10 bg-cover bg-center bg-no-repeat object-cover`}
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="flex h-full w-full items-center justify-center">
        <div
          className={`min-h-2/5 bg-green absolute flex h-auto w-3/4 flex-col justify-center gap-3 overflow-hidden break-words rounded-3xl border-2 border-white bg-opacity-60 p-4 text-center text-white backdrop-blur-md sm:w-3/4 ${
            className || ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
