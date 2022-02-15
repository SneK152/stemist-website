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
      } bg-cover bg-center bg-no-repeat object-cover mb-10`}
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="flex h-full w-full items-center justify-center">
        <div
          className={`absolute flex min-h-2/5 h-auto w-3/4 flex-col justify-center gap-3 overflow-hidden break-words rounded-3xl bg-green border-2 border-white text-white bg-opacity-60 p-4 text-center backdrop-blur-md sm:w-1/2 ${
            className || ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
