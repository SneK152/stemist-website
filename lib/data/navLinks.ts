type NavLink = {
  name: string;
  link: string;
  dropdownItems?: NavLink[];
  dropdown?: boolean;
  customProps?: { [key: string]: any };
};

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
    name: "Reach Out",
    link: "/get-involved",
    dropdown: true,
    dropdownItems: [
      {
        name: "Contact Us",
        link: "/get-involved/contact",
      },
      {
        name: "Team Applications",
        link: "https://bit.ly/stemistapplication",
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
    name: "Projects",
    link: "/projects",
    dropdown: true,
    dropdownItems: [
      {
        name: "STEMist Hacks",
        link: "/hacks",
      },
      // {
      //   name: "WEBS",
      //   link: "/webs",
      // },
    ],
  },
  {
    name: "Curriculum",
    link: "/curriculum",
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
  },
];
