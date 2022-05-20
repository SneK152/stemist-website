interface SectionProps {
  children: React.ReactNode;
  name: string;
  id?: string;
}

export default function Section({ children, name, id }: SectionProps) {
  return (
    <section className="px-5 scroll-mt-20" {...(id ? { id: id } : {})}>
      <h1 className="text-white text-4xl py-4 capitalize font-bold font-display text-center">
        {name}
      </h1>
      {children}
    </section>
  );
}
