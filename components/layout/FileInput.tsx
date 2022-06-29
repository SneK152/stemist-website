import { Dispatch, ForwardedRef, forwardRef } from "react";

export default forwardRef(function FileInput(
  {
    className,
    name,
    setImage,
    image,
  }: {
    className: string;
    name: string;
    setImage: Dispatch<string>;
    image: string;
  },
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div>
      <span className="relative block w-full rounded-md px-1.5 py-1 text-black focus:outline-none">
        <label
          htmlFor={`${name}-file-input`}
          className="flex flex-auto cursor-pointer items-center sm:text-sm dark:text-other-400"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center bg-purple">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </span>
          <p className="ml-2 inline-block h-full text-base">
            {image || "Profile Picture"}
          </p>
        </label>
        <input
          accept="image/*"
          id={`${name}-file-input`}
          name={`${name}-file-input`}
          type="file"
          ref={ref}
          hidden
          onChange={(e) => setImage(e.target.files![0].name)}
        />
      </span>
      {/* <label htmlFor={`${name}-file-input`}>{name.toUpperCase()}</label>
      <input
        className={`${className} relative block w-full appearance-none rounded-md border border-neutral-600 px-3 py-2 text-gray-50 shadow-sm focus:z-10 shadow-white/25 focus:border-neutral-600 bg-black focus:outline-none focus:ring-black sm:text-sm peer placeholder-transparent transition-[background-color] duration-[10000000s]`}
        type="file"
        onChange={(e) => setImage(e.target.files![0])}
        name={`${name}-file-input`}
        ref={ref}
      /> */}
    </div>
  );
});
