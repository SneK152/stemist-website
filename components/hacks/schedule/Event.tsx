interface ExportProps {
  name: string;
  timeStart: string;
  timeEnd?: string;
  description: string;
}

export default function Event({
  name,
  timeStart,
  timeEnd,
  description,
}: ExportProps) {
  if (description === '<undecided>') {
    return null;
  }
  const timeStartDate = new Date(timeStart);
  const timeEndDate = timeEnd ? new Date(timeEnd) : undefined;
  const overMid = timeEndDate
    ? (timeStartDate.getHours() >= 12 && timeEndDate.getHours() < 12) ||
      (timeStartDate.getHours() < 12 && timeEndDate.getHours() >= 12)
    : true;
  return (
    <div className={`text-white p-3 h-auto`}>
      <div className="grid grid-cols-9">
        <div className="text-start col-span-3 font-semibold">
          <time dateTime={timeStart}>
            {timeStartDate.getHours() -
              (timeStartDate.getHours() > 12 ? 12 : 0)}
            {overMid ? (timeStartDate.getHours() >= 12 ? " PM" : " AM") : ""}
          </time>
          {timeEndDate && (
            <>
              {" to "}
              <time dateTime={timeEnd}>
                {timeEndDate.getHours() -
                  (timeEndDate.getHours() > 12 ? 12 : 0)}
                {timeEndDate.getHours() >= 12 ? " PM" : " AM"}
              </time>
            </>
          )}
        </div>
        <div className="col-span-6 font-bold">{name}</div>
      </div>
      <div className="border-t-[0.05px] border-opacity-30 border-white pt-2 mt-1" />
      <p className={`text-white opacity-100 justify-center max-w-sm`}>
        {description}
      </p>
    </div>
  );
}
