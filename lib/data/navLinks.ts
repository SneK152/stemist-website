export type NavLink = {
  name: string;
  link: string;
  dropdownItems?: Omit<NavLink, "dropdown" | "dropdownItems">[];
  dropdown?: boolean;
  customProps?: { [key: string]: any };
  important?: boolean;
};

export type NavLinks = NavLink[];

export const navLinks: NavLink[] = [
  {
    name: "Home",
    link: "/",
    important: true,
  },
  {
    name: "About Us",
    link: "/about",
    important: true,
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
    important: true,
  },
  {
    name: "Get Involved",
    link: "/get-involved",
    dropdown: true,
    dropdownItems: [
      {
        name: "Team Applications",
        link: "https://bit.ly/stemistapplication",
        customProps: {
          target: "_blank",
        },
      },
      {
        name: "Donations",
        link: "https://paypal.com",
      },
      // {
      //   name: "Workshop Signups",
      //   link: "/signup",
      //   customProps: {
      //     target: "_blank",
      //   },
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
    name: "Summer Classes",
    link: "/curriculum",
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
