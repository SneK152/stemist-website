import Link from "next/link";

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
      <p>{props.description}</p>
      <Link href={props.buttonLink}>
        <a
          className={`bg-${props.buttonColor} text-black py-2 px-3 rounded-lg shadow-md hover:rounded-2xl hover:shadow-xl transition-all duration-300`}
        >
          {props.buttonText}
        </a>
      </Link>
    </div>
  );
}
