import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import Gallery from "react-photo-gallery";
import { useCallback } from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

interface Photo {
  src: string;
  srcSet?: string | string[] | undefined;
  sizes?: string | string[] | undefined;
  width: number;
  height: number;
  alt?: string | undefined;
  key?: string | undefined;
  scale?: boolean;
}

const photos: Photo[] = [
  {
    src: "/about/teamphoto.jpg",
    width: 2,
    height: 1,
    alt: "Our amazing officer team. Front row left to right: Selena, Aryan, Steve, Justin, Sriman. Back row left to right: Sanya, Shanker, Anish, Isaac, Snehil.",
  },
  {
    src: "/about/carousel2.png",
    width: 3,
    height: 2,
    alt: "Selena teaches students about DNA Analysis in the Intro to STEM workshop of April 2022.",
  },
  {
    src: "/about/carousel5.png",
    width: 3,
    height: 2,
    alt: "Steve talks about the basics of waves in the Intro to STEM workshop of April 2022.",
  },
  {
    src: "/about/carousel1.png",
    width: 3,
    height: 2,
    alt: "Snehil discusses the difference between backend and frontend web development in the Intro to STEM workshop of April 2022.",
  },
  {
    src: "/about/carousel4.png",
    width: 4,
    height: 2,
    alt: "Selena introduces the concept of DNA cloning using bacteria in the Intro to STEM workshop of April 2022.",
  },
  {
    src: "/about/carousel3.png",
    width: 2,
    height: 1,
    alt: "Snehil goes over the varies methods of how to get started with backend programming in the Intro to STEM workshop of April 2022.",
  },
  {
    src: "/about/carousel6.png",
    width: 1,
    height: 1,
    alt: "Steve congratulates the top 5 participants in his Waves kahoot in the Intro to STEM workshop of April 2022.",
  },
];
export default function About() {
  const [open, setOpen] = useState<boolean>(false);
  const [currentPhoto, setCurrentPhoto] = useState<Photo | null>(photos[0]);

  const imageRenderer = useCallback(
    ({ photo }: { photo: Photo }) => (
      <div className="m-1">
        <Image
          alt={photo.alt}
          src={photo.src}
          objectFit="cover"
          width={photo.width}
          height={photo.height}
          onClick={() => {
            setOpen(true);
            setCurrentPhoto(photo);
          }}
          className={`${
            photo.scale === false ? "" : "hover:scale-110"
          } transition-transform duration-300 cursor-pointer`}
        />
      </div>
    ),
    []
  );
  return (
    <Container title="Gallery">
      <PartialBanner
        title="Gallery"
        subheader="A collection of some of our most memorable moments"
      />
      <div className="m-3 p-4 space-y-5 padded-section mx-auto">
        <Gallery
          photos={photos}
          renderImage={imageRenderer}
          targetRowHeight={300}
          margin={4}
        />
      </div>
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
              <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div>
                  <div className="m-1 relative h-80">
                    <Image
                      alt={currentPhoto!.alt}
                      src={currentPhoto!.src}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  {currentPhoto!.alt || ""}
                </div>
                <div className="mt-1">
                  <button
                    className="m-auto bg-red px-3 py-1 rounded-md bg-opacity-50 shadow-sm shadow-slate-900 relative active:top-[2px] active:shadow-none text-white font-display text-sm outline-none"
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
    </Container>
  );
}
