import socials from "@/lib/socials";

export default function Footer() {
  return (
    <div className="bg-black bg-opacity-90 h-24">
      <h1 className="text-center text-3xl font-display font-bold">
        STEMist Education
      </h1>
      <p className="font-writing text-center text-lg">
        A student-led nonprofit bringing free STEM education to children ages 7
        to 14.
      </p>
      <div className="h-1"></div>
      <ul className="flex justify-center">
        {socials.map((social, index) => (
          <li key={index}>
            <a href={social.link}>
              {social.icon} {social.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
