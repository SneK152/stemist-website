import type Person from "../types/Person";

const people: Person[] = [
  {
    name: "Jianyu Wang",
    positions: ["HR", "Teacher"],
    image: require("@/public/avatar.svg").default.src,
    description:
      "Jianyu Wang is a chemistry fan and a random-facts-rookie who enjoys Wikipedia and harnessing the limitless potential of unnecessary stress.",
  },
  {
    name: "Isaac Sun",
    positions: ["Outreach", "Teacher"],
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
    name: "Krithik Mohan",
    positions: ["Operations"],
    image: require("@/public/team/Krithik Mohan.jpg").default.src,
    description:
      "Krithik is a freshman at Lynbrook High school who likes helping with technical stuff. In his free time, he likes reading and biking places.",
  },
  {
    name: "Jishnu Balaji",
    positions: ["Operations", "Teacher"],
    image: require("@/public/team/Jishnu Balaji.jpg").default.src,
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
    description:
      "Kiara is an AI enthusiast. In her free time, she enjoys tutoring chemistry, solving math problems and crying through physics questions. She is always down to chat!",
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
].sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

export default people;
