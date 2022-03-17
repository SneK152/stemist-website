import Link from "next/link";
import Button from "../layout/Button";

export default function HomeColumn(props: {
  title: string;
  description: string;
  buttonColor: string;
  buttonText: string;
  buttonLink: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-white bg-opacity-10 backdrop-blur-sm p-5 rounded-lg">
      <h1 className="font-display font-bold text-3xl">{props.title}</h1>
      <br />
      <p className="mb-5 text-center">{props.description}</p>
      <Button
        href={props.buttonLink}
        backgroundColor={`bg-${props.buttonColor}`}
        textColor="text-black"
      >
        {props.buttonText}
      </Button>
    </div>
  );
}
