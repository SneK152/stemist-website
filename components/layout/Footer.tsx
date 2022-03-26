import socials from "@/lib/socials";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full h-48 absolute">
      <div className="flex flex-row justify-center h-full max-w-[60rem] m-auto">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-display font-bold">STEMist Education</h1>
          <p className="font-sans text-lg max-w-[40ch]">
            A student-led nonprofit bringing free STEM education to children
            ages 7 to 14.
          </p>
          <div className="h-1"></div>
          <ul className="flex justify-start">
            {socials.map((social, index) => (
              <li key={index}>
                <a href={social.link} target="_blank" rel="noreferrer noopener">
                  {social.icon} {social.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center">
          <Image
            src="/logo.svg"
            className="filter invert"
            height={110.6}
            width={333.2}
            alt="Our logo"
          />
          <h1>Copyright © STEMist Education 2022</h1>
        </div>
      </div>
    </div>
  );
}
