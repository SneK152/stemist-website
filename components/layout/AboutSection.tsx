import quotes from "@/lib/data/quotes";
import Image from "next/image";
import { ReactNode, useMemo } from "react";

export default function Section({
  children,
  title,
  image,
  caption,
  quote_num,
}: {
  children: ReactNode;
  title: string;
  image: string;
  caption: string;
  quote_num: number;
}) {
  const selectedQuote = useMemo(() => quotes[quote_num], [quote_num]);
  return (
    <section className="justify-center grid grid-cols-9 w-11/13 min-h-[30rem] font-display sm:px-6 px-4 text-elipsis py-3 rounded-sm gap-6">
      <div className="lg:col-span-5 col-span-9 my-auto">
        <h1 className="text-4xl font-bold py-2">{title}</h1>
        <p className="text-xl font-sans text-clip">{children}</p>
        <br />
        <p className="col-span-9 font-writing h-auto text-left">
          <span className="block italic text-sm sm:text-lg">
            &quot;{selectedQuote.quote}&quot;
          </span>
          <span className="block text-xs sm:text-base">
            -{selectedQuote.author}
          </span>
        </p>
      </div>
      <figure className="lg:col-span-4 col-span-9 relative gap-1 flex flex-col border border-black border-opacity-50">
        <div className="sm:h-80 h-56 lg:h-full w-full relative">
          <Image
            src={image}
            alt="Placeholder Image"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
        <figcaption className="text-base p-1 font-writing text-gray-200">
          {caption}
        </figcaption>
      </figure>
    </section>
  );
}
