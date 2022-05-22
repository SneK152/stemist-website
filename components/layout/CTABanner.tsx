import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

export default function CTABanner({ full = false }: { full?: boolean }) {
  const [show, setShow] = useLocalStorage("showBanner", true);
  return show ? (
    <div
      className={`bg-blue-600 absolute w-full z-30 ${!full ? "mt-20" : "mt-0"}`}
    >
      <div className="mx-auto py-1 sm:py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex sm:p-2 p-1 rounded-lg bg-blue-800">
              <SpeakerphoneIcon
                className="sm:h-6 sm:w-6 w-5 h-5 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">
                Our spring workshops just ended!
              </span>
              <span className="hidden md:inline">
                Our spring workshops have just ended! We would like to shoutout
                our top 5 Kahoot! winners: Rohan, Lily, Nate, John, and Ariana.
              </span>
            </p>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              onClick={() => setShow(false)}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
