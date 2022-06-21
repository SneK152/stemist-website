export default function TeamHeader({
  title,
}: // subheader,
{
  title: string;
  // subheader: string;
}) {
  return (
    <div>
      <h1 className="text-left font-display text-3xl mt-5 font-normal md:text-4xl lg:text-5xl">
        {title}
      </h1>
      {/* <h2 className="text-left font-sans font-extralight text-base md:text-base lg:text-xl md:mt-3">
        {subheader}
      </h2> */}
    </div>
  );
}
