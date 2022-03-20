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
  },
  {
    name: "Meet the Team",
    link: "/team",
  },
  {
    name: "Get Involved",
    link: "/get-involved",
    dropdown: true,
    dropdownItems: [
      {
        name: "Students",
        link: "/get-involved/students",
      },
      {
        name: "Applications",
        link: "https://bit.ly/stemistapps",
      },
      {
        name: "Donations",
        link: "/get-involved/donate",
      },
    ],
  },
  {
    name: "Contact Us",
    link: "/contact",
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
