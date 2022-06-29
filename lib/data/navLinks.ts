export type NavLink = {
  name: string;
  link?: string;
  func?: any;
  via: "function" | "link";
  dropdownItems?: Omit<NavLink, "dropdown" | "dropdownItems" | "via">[];
  dropdown?: boolean;
  customProps?: { [key: string]: any };
  class?: "about" | "projects";
  image?: string;
};

export type NavLinks = NavLink[];

export const navLinks: NavLink[] = [
  {
    name: "Home",
    link: "/",
    via: "link",
  },
  {
    name: "About Us",
    link: "/about",
    dropdown: true,
    via: "link",
    dropdownItems: [
      {
        name: "Meet the Team",
        link: "/about/team",
        class: "about",
      },
      {
        name: "Contact Us",
        link: "/about/contact",
      },
      {
        name: "Team Applications",
        link: "https://bit.ly/stemistapplication",
        class: "about",
        customProps: {
          target: "_blank",
        },
      },
      {
        name: "Gallery",
        link: "/about/gallery",
        class: "about",
      },
    ],
  },
  {
    name: "STEMist Hacks",
    link: "/hacks",
    class: "projects",
    via: "link",
  },
  {
    name: "Prior Workshops",
    link: "/workshops",
    class: "about",
    via: "link",
  },
  {
    name: "WEBS Studio",
    link: "/webs",
    customProps: {
      target: "_blank",
    },
    class: "projects",
    via: "link",
  },
  {
    name: "Summer Registration",
    link: "/programs",
    class: "projects",
    via: "link",
    customProps: {
      main: true,
      color: "transparent",
      textColor: "white",
    },
  },
  {
    name: "Dashboard",
    link: "/dashboard",
    customProps: {
      main: true,
      color: "red",
      textColor: "white",
    },
    via: "link",
  },
];

export const hackathonNavLinks: NavLink[] = [
  {
    name: "Home",
    link: "/hacks",
    via: "link",
  },
  {
    name: "Sign Up",
    link: "/hacks/signup",
    customProps: {
      target: "_blank",
    },
    via: "link",
  },
];
