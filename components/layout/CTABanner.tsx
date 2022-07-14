import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";
import { ReactNode, useState } from "react";

export default function CTABanner({
  full = false,
  children,
  mic = true
}: { full?: boolean, children: ReactNode, mic?: boolean }) {
  const [show, setShow] = useState(true);
  return show ? (
    <div
      className={`bg-blue-600 absolute w-full z-30 ${
        !full ? "mt-20" : "mt-20"
      }`}
    >
      <div className="py-0 sm:py-1 padded-section">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center xl:px-52">
            {mic ? (<span className="flex sm:p-2 p-1 rounded-lg bg-blue-800">
              <SpeakerphoneIcon
                className="sm:h-4 sm:w-4 w-4 h-4 text-white"
                aria-hidden="true"
              />
            </span>) : null}
            <p className="ml-3 font-medium text-white truncate">
              {children}
            </p>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              onClick={() => setShow(false)}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-5 w-5 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
