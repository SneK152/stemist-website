import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import Gallery from "react-photo-gallery";
import { useCallback } from "react";
import Image from "next/image";

const photos: {
  src: string;
  srcSet?: string | string[] | undefined;
  sizes?: string | string[] | undefined;
  width: number;
  height: number;
  alt?: string | undefined;
  key?: string | undefined;
}[] = [
  { src: "/about/teamphoto.jpg", width: 2, height: 1 },
  { src: "/about/carousel2.png", width: 3, height: 2 },
  { src: "/about/carousel5.png", width: 3, height: 2 },
  { src: "/about/carousel1.png", width: 3, height: 2 },
  { src: "/about/carousel4.png", width: 4, height: 2 },
  { src: "/about/carousel3.png", width: 2, height: 1 },
  { src: "/about/carousel6.png", width: 1, height: 1 },
];
export default function About() {
  const imageRenderer = useCallback(
    ({ photo }) => (
      <div className="m-1">
        <Image
          alt={photo.title}
          src={photo.src}
          objectFit="cover"
          width={photo.width}
          height={photo.height}
          className="hover:scale-110 transition-transform duration-300"
        />
      </div>
    ),
    []
  );
  return (
    <Container title="Gallery">
      <PartialBanner title="Gallery" />
      <div className="m-3 p-4 space-y-5 padded-section mx-auto">
        <Gallery
          photos={photos}
          renderImage={imageRenderer}
          targetRowHeight={300}
          margin={4}
        />
      </div>
    </Container>
  );
}
