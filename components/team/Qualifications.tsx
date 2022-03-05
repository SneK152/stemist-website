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
          <ul className="list-disc list-inside">
            {props.quals.map((qual, index) => (
              <li key={index} className="py-1">
                {qual}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
