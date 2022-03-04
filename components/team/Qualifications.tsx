export default function Qualifications(props: {
  quals: string[] | undefined;
  header?: boolean;
}) {
  return (
    <>
      {props.quals && (
        <>
          {!props.header && (
            <>
              <hr className="border-black" />
              <br />
              <h1 className="font-bold text-xl">Qualifications</h1>
            </>
          )}
          <ul>
            {props.quals.map((qual, index) => (
              <li key={index} className="py-1 flex items-center gap-1">
                <hr className="w-3 border-black border-[0.75px] bg-black border-opacity-40 inline-block" />
                {qual}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
