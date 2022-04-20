import Image from "next/image";
import PersonProps from "@/lib/types/PersonProps";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Qualifications from "./Qualifications";

export default function Person(props: PersonProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group flex w-72 h-full flex-row mx-auto items-center gap-5">
      <div
        className={`${
          props.person.description || props.person.qualifications
            ? "group-hover:hidden"
            : ""
        }`}
      >
        <Image
          src={props.person.image}
          height={100}
          width={100}
          layout="fixed"
          className={`max-w-none rounded-full object-cover`}
          alt="User profile"
          quality={100}
        />
      </div>
      <h1 className="font-display justify-self-center w-full space-y-1 text-lg font-normal">
        <span
          className={`${
            props.person.description || props.person.qualifications
              ? "group-hover:hidden"
              : ""
          } transition-all`}
        >
          {props.person.name}
          <br />
          <div className="font-writing flex flex-wrap gap-1">
            {(props.roles ? props.roles : props.person.positions).map(
              (pos, index) =>
                !props.person.positions.includes(pos + " Lead") && (
                  <span
                    className="m-0.5 w-min whitespace-nowrap rounded-xl bg-gray-200 py-1 px-2 text-xs"
                    key={index}
                  >
                    {pos}
                  </span>
                )
            )}
          </div>
        </span>
        {props.person.description && (
          <p
            className={`hidden max-w-[40ch] font-writing ${
              props.person.qualifications ? "text-xs" : "text-sm"
            } transition-all group-hover:block mx-auto`}
          >
            {props.person.description}
          </p>
        )}
        {props.person.qualifications && (
          <button
            className="hidden m-auto bg-blue-500 px-2 py-1 shadow-md rounded-lg text-white font-sans text-xs transition-all group-hover:block"
            onClick={() => setOpen(true)}
          >
            Qualifications
          </button>
        )}
      </h1>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          onClose={() => setOpen(false)}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30"></Dialog.Overlay>
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h1"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {props.person.name.split(" ")[0]}&apos;s Qualifications
                </Dialog.Title>
                <div className="mt-2">
                  <div className="text-sm text-black">
                    <Qualifications
                      quals={props.person.qualifications}
                      header
                    />
                  </div>
                </div>
                <div className="mt-1">
                  <button
                    className="m-auto bg-blue-500 px-3 py-1 shadow-md rounded-lg text-white font-sans text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Back
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
