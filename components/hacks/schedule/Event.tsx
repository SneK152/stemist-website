interface ExportProps {
  name: string;
  time: string;
  description: string;
}

export default function Event({ name, time, description }: ExportProps) {
  return (
    <div
      className={`text-black p-3 h-auto rounded-md bg-white hover:bg-gray-200 transition-colors`}
    >
      <div className="grid grid-cols-5">
        <div className="col-span-3 font-bold">{name}</div>
        <div className="text-start col-span-2 font-semibold">{time}</div>
      </div>
      <p
        className={`text-black opacity-100 justify-center border-t-[0.05px] border-black pt-2`}
      >
        {description}
      </p>
    </div>
  );
}
