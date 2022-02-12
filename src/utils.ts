import React, { useState } from "react";

export interface NavLinkProps extends React.HTMLAttributes<HTMLElement> {
  href: string;
  children: React.ReactNode;
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
    image: require("./images/avatar.svg").default,
    description:
      "Steve Yang is a freshman at Lynbrook High who focuses on Earth Science and Chemistry.  When not reading textbooks, he likes to conduct synthesis reactions, run five miles a day, and talk with friends.",
  },
  {
    name: "Johnathan Kao",
    positions: ["Board", "Legal", "Teacher"],
    image: require("./images/avatar.svg").default,
    description: lorem,
  },
  {
    name: "Justin Zhang",
    positions: ["Board", "Operations", "HR", "Teacher"],
    image: require("./images/avatar.svg").default,
    description:
      "Justin Zhang is a computer science and math enthusiast who codes in his free time. If he's not playing video games or watching Youtube, he's busy studying for his upcoming exams.",
  },
  {
    name: "Snehil Kakani",
    positions: ["Board", "Technology", "Teacher"],
    image: require("./images/avatar.svg").default,
    description:
      "Snehil Kakani is a freshman at Lynbrook High who loves web development. He enjoys working on user interfaces and backend APIs. He's also a graphic designer, drummer, actor, and more!",
  },
  {
    name: "Jianyu Wang",
    positions: ["Board", "Legal", "Teacher"],
    image: require("./images/avatar.svg").default,
    description: lorem,
  },
  {
    name: "Selena Yang",
    positions: ["Board", "Teacher"],
    image: require("./images/avatar.svg").default,
    description: lorem,
  },
  {
    name: "Anish Bhethanabotla",
    positions: ["Tech", "HR", "Teacher"],
    image: require("./images/avatar.svg").default,
    description:
      "Anish is a freshman at Lynbrook High School who specializes in Physics and Computer Science. He enjoys listening to music.",
  },
  {
    name: "Daniel Kim",
    positions: ["Teacher"],
    image: require("./images/avatar.svg").default,
    description:
      "Daniel Kim is a freshman at Lynbrook who enjoys studying math, computer science, and physics. When he is not studying or doing homework, he likes to swim and talk to friends.",
  },
  {
    name: "Harold Wang",
    positions: ["Teacher", "HR"],
    image: require("./images/avatar.svg").default,
    description: lorem,
  },
  {
    name: "Sanya Badhe",
    positions: ["Teacher"],
    image: require("./images/avatar.svg").default,
    description: lorem,
  },
  {
    name: "Aryan Patnaik",
    positions: ["Teacher"],
    image: require("./images/avatar.svg").default,
    description: lorem,
  },
  {
    name: "Krithik Mohan",
    positions: ["Operations"],
    image: require("./images/avatar.svg").default,
    description: lorem,
  },
  {
    name: "Thomas Wu",
    positions: ["Teacher"],
    image: require("./images/avatar.svg").default,
    description: lorem,
  },
  {
    name: "Jishnu Balaji",
    positions: ["Operations", "Teacher"],
    image: require("./images/avatar.svg").default,
    description: lorem,
  },
  {
    name: "Yajat Nagaraj",
    positions: ["Operations", "Teacher"],
    image: require("./images/avatar.svg").default,
    description:
      "Yajat is a freshman at Lynbrook High School who likes to do math and solve puzzles.",
  },
  {
    name: "Joshua Li",
    positions: ["Operations", "Outreach"],
    image: require("./images/avatar.svg").default,
    description: lorem,
  },
  {
    name: "Nathan Ye",
    positions: ["Outreach"],
    image: require("./images/avatar.svg").default,
    description: lorem,
  },
  {
    name: "Jayadev Ghanta",
    positions: ["Teacher"],
    image: require("./images/avatar.svg").default,
    description: lorem,
  },
  {
    name: "Isaac Sun",
    positions: ["Teacher"],
    image: require("./images/avatar.svg").default,
    description: lorem,
  },
  {
    name: "Shanker Ram",
    positions: ["Teacher"],
    image: require("./images/avatar.svg").default,
    description:
      "Freshman at Lynbrook High School, Specializes in Math, Computer Science, and Data Science, Likes watching the NBA, in specific the Warriors",
  },
];
