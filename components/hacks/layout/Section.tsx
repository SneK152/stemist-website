interface SectionProps {
  children: React.ReactNode;
  name: string;
}

export default function Section({ children, name }: SectionProps) {
  return (
    <div className="px-5 py-3 bg-white">
      <h1 className="text-3xl py-4 capitalize font-bold text-black underline max-w-screen-sm w-2/5">{name}:</h1>
      {children}
    </div>
  );
}
