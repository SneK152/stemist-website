interface SectionProps {
  children: React.ReactNode;
  name: string;
  id?: string;
}

export default function Section({ children, name, id }: SectionProps) {
  return (
    <div
      className="px-5 py-3 bg-inherit scroll-mt-20"
      {...(id ? { id: id } : {})}
    >
      <h1 className="text-white text-4xl py-4 capitalize font-bold max-w-screen-sm font-display w-2/5">
        {name}
      </h1>
      {children}
    </div>
  );
}
