interface ExportProps {
  name: string;
  time: string;
  description: string;
}

export default function Event({ name, time, description }: ExportProps) {
  return (
    <div className={`text-white p-3 h-auto`}>
      <div className="grid grid-cols-5">
        <div className="col-span-3 font-bold">{name}</div>
        <div className="text-start col-span-2 font-semibold">{time}</div>
      </div>
      <p
        className={`text-white opacity-100 justify-center border-t-[0.05px] border-white pt-2`}
      >
        {description}
      </p>
    </div>
  );
}
