export default function TeamHeader({ title }: { title: string }) {
  return (
    <div>
      <h1 className="text-left font-display text-3xl mt-5 font-normal md:text-4xl lg:text-5xl">
        {title}
      </h1>
    </div>
  );
}
