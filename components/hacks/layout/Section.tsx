interface SectionProps {
  children: React.ReactNode;
  name: string;
  id?: string;
  inverted?: boolean;
}

export default function Section({ children, name, id, inverted = false }: SectionProps) {
  return (
    <section className={`px-5 scroll-mt-24 mt-5 ${inverted ? 'text-white bg-[#1d263b]' : ''}`} {...(id ? { id: id } : {})}>
      <h1 className="text-4xl py-4 capitalize font-bold font-display text-center">
        {name}
      </h1>
      {children}
    </section>
  );
}
