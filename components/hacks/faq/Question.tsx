export default function Question({
  answer,
  question,
}: {
  answer: string;
  question: string;
}) {
  return (
    <div className="rounded-md flex flex-col">
      <div className="rounded-lg text-2xl rounded-b-none text-left flex pl-2 py-3 bg-gray-900 bg-opacity-90 font-display">
        {question}
      </div>
      <div
        className={`rounded-lg pl-2 font-writing py-3 h-full rounded-t-none bg-gray-200 text-black`}
      >
        {answer}
      </div>
    </div>
  );
}
