export type NavLink = {
  name: string;
  link: string;
  dropdownItems?: Omit<NavLink, "dropdown" | "dropdownItems">[];
  dropdown?: boolean;
  customProps?: { [key: string]: any };
  class?: "about" | "projects";
};

export type NavLinks = NavLink[];

export const navLinks: NavLink[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
    dropdown: true,
    dropdownItems: [
      {
        name: "Who We Are",
        link: "/about/who-we-are",
        class: "about",
      },
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
    ],
  },
  // {
  //   name: "Contact Us",
  //   link: "/contact",
  //   important: true,
  // },
  // {
  //   name: "Team Applications",
  //   link: "https://bit.ly/stemistapplication",
  //   customProps: {
  //     target: "_blank",
  //   },
  // },
  {
    name: "STEMist Hacks",
    link: "/hacks",
    class: "projects",
  },
  {
    name: "Prior Workshops",
    link: "/workshops",
    class: "about",
  },
  {
    name: "WEBS Studio",
    link: "/webs",
    customProps: {
      target: "_blank",
    },
    class: "projects",
  },
  {
    name: "Summer Classes",
    link: "/programs",
    class: "projects",
    customProps: {
      main: true,
      color: "white",
      textColor: "black",
    },
  },
];

export const hackathonNavLinks: NavLink[] = [
  {
    name: "Home",
    link: "/hacks",
  },
  {
    name: "Sign Up",
    link: "/hacks/signup",
    customProps: {
      target: "_blank",
    },
  },
];
