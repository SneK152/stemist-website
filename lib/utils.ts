import React, { useState } from "react";

export interface NavLinkProps extends React.HTMLAttributes<HTMLElement> {
  href: string;
  children: React.ReactNode;
  main?: boolean;
}

export interface SpinnerProps {
  color: string;
  className?: string;
}

export interface InputFieldProps
  extends React.HTMLAttributes<HTMLInputElement> {
  labelName: string;
  name: string;
  type?: string;
  autoComplete?: string;
  className?: string;
  formik: any;
  errorClass: string;
  as?: "input" | "textarea";
}

export interface SelectInputFieldProps
  extends React.HTMLAttributes<HTMLSelectElement> {
  labelName: string;
  name: string;
  children: React.ReactNode;
  formik: any;
  errorClass: string;
}

export interface PersonProps {
  person: Person;
}

export function useLocalStorage(key: string, initialValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  const setValue = (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {}
  };
  return [storedValue, setValue];
}

type Person = {
  name: string;
  positions: string[];
  description: string;
  image: string;
};

const lorem = "";

export const people: Person[] = [
  {
    name: "Steve Yang",
    positions: ["Board", "Legal", "Teacher"],
    image: require("../public/avatar.svg").default.src,
    description:
      "Steve Yang is a freshman at Lynbrook High who focuses on Earth Science and Chemistry.  When not reading textbooks, he likes to conduct synthesis reactions, run five miles a day, and talk with friends.",
  },
  {
    name: "Johnathan Kao",
    positions: ["Board", "Legal", "Teacher"],
    image: require("../public/team/Johnathan Kao.jpg").default.src,
    description:
      "Johnathan Kao is a freshman at Lynbrook High School who specializes in astronomy and oceanography. He likes to read and play videogames in his free time, as well as preparing for the next competition whatever it may be.",
  },
  {
    name: "Justin Zhang",
    positions: ["Board", "Operations", "HR", "Teacher"],
    image: require("../public/avatar.svg").default.src,
    description:
      "Justin Zhang is a computer science and math enthusiast who codes in his free time. If he's not playing video games or watching Youtube, he's busy studying for his upcoming exams.",
  },
  {
    name: "Snehil Kakani",
    positions: ["Board", "Operations", "Technology", "Website", "Teacher"],
    image: require("../public/team/Snehil Kakani.jpg").default.src,
    description:
      "Snehil Kakani is a freshman at Lynbrook High who loves web development. He enjoys working on user interfaces and backend APIs. He's also a graphic designer, drummer, actor, and more!",
  },
  {
    name: "Jianyu Wang",
    positions: ["Board", "HR", "Teacher"],
    image: require("../public/avatar.svg").default.src,
    description: lorem,
  },
  {
    name: "Selena Yang",
    positions: ["Board", "Teacher"],
    image: require("../public/avatar.svg").default.src,
    description:
      "Selena is a freshman at Lynbrook who enjoys reading biology, especially oncology and animal development. Aside from going down wiki rabbit holes on who-knows-what disease, she also draws unnecessarily detailed anatomy diagrams, plays the piano, and struggles through math problems.",
  },
  {
    name: "Anish Bhethanabotla",
    positions: ["Board", "Technology", "HR", "Teacher"],
    image: require("../public/avatar.svg").default.src,
    description:
      "Anish is a freshman at Lynbrook High School who specializes in Physics and Computer Science. He enjoys listening to music.",
  },
  {
    name: "Daniel Kim",
    positions: ["Teacher"],
    image: require("../public/avatar.svg").default.src,
    description:
      "Daniel Kim is a freshman at Lynbrook who enjoys studying math, computer science, and physics. When he is not studying or doing homework, he likes to swim and talk to friends.",
  },
  {
    name: "Isaac Sun",
    positions: ["Board", "Outreach", "Teacher"],
    image: require("../public/team/Isaac Sun.png").default.src,
    description:
      "Isaac Sun is a freshman at Lynbrook High School who enjoys doing math, especially algebra and combinatorics. Outside of school-related work, he also likes to play chess and read novels.",
  },
  {
    name: "Harold Wang",
    positions: ["Teacher", "HR"],
    image: require("../public/avatar.svg").default.src,
    description:
      "Harold Wang is a freshman at Lynbrook High school who likes science. In his free time he plays games.",
  },
  {
    name: "Sanya Badhe",
    positions: ["Operations", "Teacher"],
    image: require("../public/avatar.svg").default.src,
    description: lorem,
  },
  {
    name: "Aryan Patnaik",
    positions: ["Teacher", "Technology"],
    image: require("../public/avatar.svg").default.src,
    description: lorem,
  },
  {
    name: "Krithik Mohan",
    positions: ["Operations", "Intern"],
    image: require("../public/team/Krithik Mohan.jpg").default.src,
    description: lorem,
  },
  {
    name: "Thomas Wu",
    positions: ["Teacher"],
    image: require("../public/avatar.svg").default.src,
    description: lorem,
  },
  {
    name: "Jishnu Balaji",
    positions: ["Operations", "Teacher"],
    image: require("../public/avatar.svg").default.src,
    description: lorem,
  },
  {
    name: "Yajat Nagaraj",
    positions: ["Operations", "Teacher"],
    image: require("../public/avatar.svg").default.src,
    description:
      "Yajat is a freshman at Lynbrook High School who likes to do math and solve puzzles.",
  },
  {
    name: "Joshua Li",
    positions: ["Outreach"],
    image: require("../public/avatar.svg").default.src,
    description: lorem,
  },
  {
    name: "Nathan Ye",
    positions: ["Outreach"],
    image: require("../public/team/Nathan Ye.png").default.src,
    description: lorem,
  },
  {
    name: "Jayadev Ghanta",
    positions: ["Teacher"],
    image: require("../public/avatar.svg").default.src,
    description: lorem,
  },
  {
    name: "Shanker Ram",
    positions: ["Teacher"],
    image: require("../public/avatar.svg").default.src,
    description:
      "Freshman at Lynbrook High School, Specializes in Math, Computer Science, and Data Science, Likes watching the NBA, in specific the Warriors",
  },
  {
    name: "Rohan Fernandes",
    positions: ["Intern", "Technology", "Website"],
    image: require("../public/avatar.svg").default.src,
    description:
      "Rising Freshman at Lynbrook Highschool, Likes to code and watch th NBA in his spare timeand likes math.",
  },
  {
    name: "Kiara Ha",
    positions: ["Technology", "Teacher"],
    image: require("../public/team/Kiara Ha.png").default.src,
    description: lorem,
  },
  {
    name: "Kasturi Kirubaharan",
    positions: ["Teacher"],
    image: require("../public/avatar.svg").default.src,
    description: lorem,
  },
  {
    name: "Sophie Mak",
    positions: ["Outreach"],
    image: require("../public/avatar.svg").default.src,
    description: lorem,
  },
];

export const teachers: Person[] = [
  {
    name: "Johnathan Kao",
    positions: ["Physical Science", "Biology"],
    image: require("../public/team/Johnathan Kao.jpg").default.src,
    description:
      "Johnathan Kao is a freshman at Lynbrook High School who specializes in astronomy and oceanography. He likes to read and play videogames in his free time, as well as preparing for the next competition whatever it may be.",
  },
  {
    name: "Justin Zhang",
    positions: ["Computer Science", "Math"],
    image: require("../public/avatar.svg").default.src,
    description:
      "Justin Zhang is a computer science and math enthusiast who codes in his free time. If he's not playing video games or watching Youtube, he's busy studying for his upcoming exams.",
  },
  {
    name: "Snehil Kakani",
    positions: ["Computer Science"],
    image: require("../public/team/Snehil Kakani.jpg").default.src,
    description:
      "Snehil Kakani is a freshman at Lynbrook High who loves web development. He enjoys working on user interfaces and backend APIs. He's also a graphic designer, drummer, actor, and more!",
  },
  {
    name: "Jianyu Wang",
    positions: ["Physical Science"],
    image: require("../public/avatar.svg").default.src,
    description: lorem,
  },
  {
    name: "Selena Yang",
    positions: ["Math", "Biology"],
    image: require("../public/avatar.svg").default.src,
    description:
      "Selena is a freshman at Lynbrook who enjoys reading biology, especially oncology and animal development. Aside from going down wiki rabbit holes on who-knows-what disease, she also draws unnecessarily detailed anatomy diagrams, plays the piano, and struggles through math problems.",
  },
  {
    name: "Anish Bhethanabotla",
    positions: ["Computer Science", "Math", "Physical Science"],
    image: require("../public/avatar.svg").default.src,
    description:
      "Anish is a freshman at Lynbrook High School who specializes in Physics and Computer Science. He enjoys listening to music.",
  },
  {
    name: "Daniel Kim",
    positions: ["Computer Science", "Math"],
    image: require("../public/avatar.svg").default.src,
    description:
      "Daniel Kim is a freshman at Lynbrook who enjoys studying math, computer science, and physics. When he is not studying or doing homework, he likes to swim and talk to friends.",
  },
  {
    name: "Isaac Sun",
    positions: ["Math"],
    image: require("../public/team/Isaac Sun.png").default.src,
    description:
      "Isaac Sun is a freshman at Lynbrook High School who enjoys doing math, especially algebra and combinatorics. Outside of school-related work, he also likes to play chess and read novels.",
  },
  {
    name: "Harold Wang",
    positions: ["Math", "Biology"],
    image: require("../public/avatar.svg").default.src,
    description:
      "Harold Wang is a freshman at Lynbrook High school who likes science. In his free time he plays games.",
  },
  {
    name: "Sanya Badhe",
    positions: ["Math", "Physical Science"],
    image: require("../public/avatar.svg").default.src,
    description: lorem,
  },
  {
    name: "Aryan Patnaik",
    positions: ["Biology"],
    image: require("../public/avatar.svg").default.src,
    description: lorem,
  },
  {
    name: "Thomas Wu",
    positions: ["Reserve"],
    image: require("../public/avatar.svg").default.src,
    description: lorem,
  },
  {
    name: "Jishnu Balaji",
    positions: ["Biology"],
    image: require("../public/avatar.svg").default.src,
    description: lorem,
  },
  {
    name: "Yajat Nagaraj",
    positions: ["Math"],
    image: require("../public/avatar.svg").default.src,
    description:
      "Yajat is a freshman at Lynbrook High School who likes to do math and solve puzzles.",
  },
  {
    name: "Jay Ghanta",
    positions: ["Computer Science"],
    image: require("../public/avatar.svg").default.src,
    description: lorem,
  },
  {
    name: "Shanker Ram",
    positions: ["Computer Science"],
    image: require("../public/avatar.svg").default.src,
    description:
      "Freshman at Lynbrook High School, Specializes in Math, Computer Science, and Data Science, Likes watching the NBA, in specific the Warriors",
  },
  {
    name: "Rohan Fernandes",
    positions: ["Computer Science"],
    image: require("../public/avatar.svg").default.src,
    description:
      "Rising Freshman at Lynbrook Highschool, Likes to code and watch th NBA in his spare timeand likes math.",
  },
  {
    name: "Kiara Ha",
    positions: ["Math", "Physical Science", "Biology"],
    image: require("../public/team/Kiara Ha.png").default.src,
    description: lorem,
  },
  {
    name: "Kasturi Kirubaharan",
    positions: ["Math", "Biology"],
    image: require("../public/avatar.svg").default.src,
    description: lorem,
  },
];
