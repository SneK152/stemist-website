import type Person from "./types/Person";

const people: Person[] = [
  {
    name: "Steve Yang",
    positions: ["Board", "Teacher"],
    image: require("@/public/team/Steve Yang.jpeg").default.src,
    description:
      "Steve Yang is a freshman at Lynbrook High who focuses on Earth Science and Chemistry.  When not reading textbooks, he likes to conduct synthesis reactions, run five miles a day, and talk with friends.",
  },
  {
    name: "Johnathan Kao",
    positions: ["Board", "Teacher", "Outreach"],
    image: require("@/public/team/Johnathan Kao.jpg").default.src,
    description:
      "Johnathan Kao is a freshman at Lynbrook High School who specializes in astronomy and oceanography. He likes to read and play videogames in his free time, as well as preparing for the next competition whatever it may be.",
  },
  {
    name: "Justin Zhang",
    positions: ["Board", "Operations", "HR", "Teacher"],
    image: require("@/public/team/Justin Zhang.jpg").default.src,
    description:
      "Justin Zhang is a computer science and math enthusiast who codes in his free time. If he's not playing video games or watching Youtube, he's busy studying for his upcoming exams.",
  },
  {
    name: "Snehil Kakani",
    positions: ["Board", "Operations", "Technology", "Website", "Teacher"],
    image: require("@/public/team/Snehil Kakani.jpg").default.src,
    description:
      "Snehil Kakani is a freshman at Lynbrook High who loves web development. He enjoys working on user interfaces and backend APIs. He's also a graphic designer, drummer, actor, and more!",
  },
  {
    name: "Jianyu Wang",
    positions: ["Board", "HR", "Teacher"],
    image: require("@/public/avatar.svg").default.src,
    description: "",
  },
  {
    name: "Selena Yang",
    positions: ["Board", "Teacher"],
    image: require("@/public/team/Selena Yang.jpg").default.src,
    description:
      "Selena is a freshman at Lynbrook who enjoys reading biology, especially oncology. Aside from going down wiki rabbit holes, she also draws unnecessarily detailed diagrams, plays the piano, and struggles through math problems.",
  },
  {
    name: "Anish Bhethanabotla",
    positions: ["Board", "Technology", "HR", "Teacher"],
    image: require("@/public/team/Anish Bhethanabotla.jpeg").default.src,
    description:
      "Anish is a freshman at Lynbrook High School who specializes in Physics and Computer Science. He enjoys listening to music.",
  },
  {
    name: "Isaac Sun",
    positions: ["Board", "Outreach", "Teacher"],
    image: require("@/public/team/Isaac Sun.jpeg").default.src,
    description:
      "Isaac Sun is a freshman at Lynbrook High School who enjoys doing math, especially algebra and combinatorics. Outside of school-related work, he also likes to play chess and read novels.",
  },
  {
    name: "Harold Wang",
    positions: ["Teacher", "HR"],
    image: require("@/public/avatar.svg").default.src,
    description:
      "Harold Wang is a freshman at Lynbrook High school who likes science. In his free time he plays games.",
  },
  {
    name: "Sanya Badhe",
    positions: ["Operations", "Teacher"],
    image: require("@/public/team/Sanya Badhe.png").default.src,
    description:
      "Sanya Badhe is a freshman at Lynbrook who focuses on Physics and Math. Outside of school, you can find her playing basketball (for fun), painting, or playing with her friends' dogs.",
  },
  {
    name: "Aryan Patnaik",
    positions: ["Teacher", "Technology"],
    image: require("@/public/avatar.svg").default.src,
    description: "",
  },
  {
    name: "Krithik Mohan",
    positions: ["Operations"],
    image: require("@/public/team/Krithik Mohan.jpg").default.src,
    description:
      "Krithik is a freshman at Lynbrook High school who likes helping with technical stuff. In his free time, he likes reading and biking places.",
  },
  {
    name: "Jishnu Balaji",
    positions: ["Operations", "Teacher"],
    image: require("@/public/avatar.svg").default.src,
    description:
      "Jishnu Balaji has been interested in science for a long time. He is a member of groups like Science Olympiad and Science Alliance, just to name a few. In his free time, he likes to swim.",
  },
  {
    name: "Yajat Nagaraj",
    positions: ["Operations", "Teacher"],
    image: require("@/public/team/Yajat Kiran.png").default.src,
    description:
      "Yajat is a freshman at Lynbrook High School who likes to do math and solve puzzles.",
  },
  {
    name: "Joshua Li",
    positions: ["Outreach"],
    image: require("@/public/team/Joshua Li.jpg").default.src,
    description:
      "Joshua is a freshman at Lynbrook who enjoys all behind the curtain roles. He also likes exercising and gaming in his free time.",
  },
  {
    name: "Nathan Ye",
    positions: ["Outreach"],
    image: require("@/public/team/Nathan Ye.png").default.src,
    description:
      "Nathan is a high school freshman that loves coding and football.",
  },
  {
    name: "Rohan Fernandes",
    positions: ["Intern", "Technology", "Website"],
    image: require("@/public/avatar.svg").default.src,
    description:
      "Rising Freshman at Lynbrook Highschool, Likes to code and watch th NBA in his spare timeand likes math.",
  },
  {
    name: "Kiara Ha",
    positions: ["Technology", "Teacher"],
    image: require("@/public/team/Kiara Ha.png").default.src,
    description: "",
  },
  {
    name: "Sophie Mak",
    positions: ["Outreach"],
    image: require("@/public/team/Sophie Mak.jpeg").default.src,
    description:
      "Sophie Mak is a freshman at Lynbrook High School that enjoys writing and networking.  In her spare time, she bakes and binge-reads webtoons.",
  },
  {
    name: "Richard Yuan",
    positions: ["Outreach"],
    image: require("@/public/team/Richard Yuan.png"),
    description:
      "Richard is a dejected but content adolescent that aspires to be a business executive in the not-too-distant future.",
  },
];

export default people;
