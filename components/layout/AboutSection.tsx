import {ReactNode} from "react";

export default function Section({children, title,}: {children: ReactNode; title: string;}) {
  return (
      <>
        <div className="justify-center grid grid-cols-8 w-12/13 font-display bg-white px-6 text-elipsis py-3 rounded-md">
            <div className="col-span-5">
                <h1 className="text-3xl font-bold underline capitalize py-2 first-letter:capitalize">{title}</h1>
                <p className="text-xl font-medium text-clip">{children}</p>
            </div>
            <div className="col-span-3">
                <img />
            </div>
        </div>
      </>
  )
}
