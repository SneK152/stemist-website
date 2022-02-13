export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto h-[10000px]">
      <div className="mx-auto overflow-hidden pt-16">{children}</div>
    </div>
  );
}
