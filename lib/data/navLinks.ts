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
        link: "/about",
      },
      {
        name: "Meet the Team",
        link: "/team",
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
        link: "/contact",
      },
      {
        name: "Student Signups",
        link: "/get-involved/students",
      },
      {
        name: "Team Applications",
        link: "https://bit.ly/stemistapps",
      },
      {
        name: "Donations",
        link: "/get-involved/donate",
      },
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
      {
        name: "WEBS",
        link: "/webs",
      },
    ],
  },
  {
    name: "Programs",
    link: "/programs",
    customProps: {
      main: true,
      color: "blue-500",
      textColor: "white",
    },
  },
  {
    name: "Student Signups",
    link: "/get-involved/students",
    customProps: {
      main: true,
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
