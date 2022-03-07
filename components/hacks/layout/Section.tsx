interface SectionProps {
  children: React.ReactNode;
  name: string;
}

export default function Section({ children, name }: SectionProps) {
  return (
    <div className="px-5 py-3">
      <h1 className="text-3xl py-4 capitalize font-bold">{name}:</h1>
      {children}
    </div>
  );
}
