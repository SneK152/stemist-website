export type NavLink = {
  name: string;
  link: string;
  dropdownItems?: Omit<NavLink, "dropdown" | "dropdownItems">[];
  dropdown?: boolean;
  customProps?: { [key: string]: any };
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
      },
      {
        name: "Meet the Team",
        link: "/about/team",
      },
    ],
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
  {
    name: "Get Involved",
    link: "/get-involved",
    dropdown: true,
    dropdownItems: [
      {
        name: "Team Applications",
        link: "https://bit.ly/stemistapps",
        customProps: {
          target: "_blank",
        },
      },
      {
        name: "Workshop Signups",
        link: "/signup",
        customProps: {
          target: "_blank",
        },
      },
      // {
      //   name: "Donations",
      //   link: "/get-involved/donate",
      // },
    ],
  },
  {
    name: "STEMist Hacks",
    link: "/hacks",
  },
  // {
  //   name: "WEBS",
  //   link: "/webs",
  // },
  {
    name: "Workshops",
    link: "/workshops",
  },
  // {
  //   name: "Programs",
  //   link: "/programs",
  //   customProps: {
  //     main: true,
  //     color: "blue-500",
  //     textColor: "white",
  //   },
  // },
  {
    name: "Sign Up",
    link: "/signup",
    customProps: {
      main: true,
      color: "blue-500",
      textColor: "white",
      target: "_blank",
    },
  },
];

export const hackathonNavLinks: NavLink[] = [
  {
    name: "Home",
    link: "/hacks",
  },
  {
    name: "Signup",
    link: "/hacks/signup",
    customProps: {
      target: "_blank",
    },
  },
];
