import { resolveTeamImage } from "../imageHelpers";
import type Person from "../types/Person";
import { TeamRole } from "../types/Person";

const people: Person<TeamRole>[] = [
  {
    name: "Jianyu Wang",
    positions: ["HR", "Teacher"],
    image: resolveTeamImage(),
    description:
      "Jianyu Wang is a chemistry fan and a random-facts-rookie who enjoys Wikipedia and harnessing the limitless potential of unnecessary stress.",
  },
  {
    name: "Isaac Sun",
    positions: ["Outreach", "Teacher"],
    image: resolveTeamImage("Isaac Sun", "jpeg"),
    description:
      "Isaac Sun is a freshman at Lynbrook High School who enjoys doing math, especially algebra and combinatorics. Outside of school-related work, he also likes to play chess and read novels.",
  },
  {
    name: "Harold Wang",
    positions: ["Teacher", "HR"],
    image: resolveTeamImage(),
    description:
      "Harold Wang is a freshman at Lynbrook High school who likes science. In his free time he plays games.",
  },
  {
    name: "Krithik Mohan",
    positions: ["Operations"],
    image: resolveTeamImage("Krithik Mohan", "jpg"),
    description:
      "Krithik is a freshman at Lynbrook High school who likes helping with technical stuff. In his free time, he likes reading and biking places.",
  },
  {
    name: "Jishnu Balaji",
    positions: ["Operations", "Teacher"],
    image: resolveTeamImage("Jishnu Balaji", "jpg"),
    description:
      "Jishnu Balaji has been interested in science for a long time. He is a member of groups like Science Olympiad and Science Alliance, just to name a few. In his free time, he likes to swim.",
  },
  {
    name: "Yajat Nagaraj",
    positions: ["Operations", "Teacher"],
    image: resolveTeamImage("Yajat Kiran", "png"),
    description:
      "Yajat is a freshman at Lynbrook High School who likes to do math and solve puzzles.",
  },
  {
    name: "Joshua Li",
    positions: ["Outreach"],
    image: resolveTeamImage("Joshua Li", "jpg"),
    description:
      "Joshua is a freshman at Lynbrook who enjoys all behind the curtain roles. He also likes exercising and gaming in his free time.",
  },
  {
    name: "Nathan Ye",
    positions: ["Outreach"],
    image: resolveTeamImage("Nathan Ye", "png"),
    description:
      "Nathan is a high school freshman that loves coding and football.",
  },
  {
    name: "Rohan Fernandes",
    positions: ["Intern", "Technology", "Website"],
    image: resolveTeamImage(),
    description:
      "Rising Freshman at Lynbrook Highschool, Likes to code and watch th NBA in his spare timeand likes math.",
  },
  {
    name: "Sophie Mak",
    positions: ["Outreach"],
    image: resolveTeamImage("Sophie Mak", "jpeg"),
    description:
      "Sophie Mak is a freshman at Lynbrook High School that enjoys writing and networking.  In her spare time, she bakes and binge-reads webtoons.",
  },
  {
    name: "Richard Yuan",
    positions: ["Outreach"],
    image: resolveTeamImage("Richard Yuan", "png"),
    description:
      "Richard is a dejected but content adolescent that aspires to be a business executive in the not-too-distant future.",
  },
  {
    name: "Sriman Ratnapu",
    positions: ["Outreach", "HR"],
    image: resolveTeamImage("Sriman Ratnapu", "png"),
    description:
      "Sriman is a freshman at Lynbrook High School likes to play video games and read books.",
  },
  {
    name: "Annie Li",
    positions: ["Graphic Design", "Outreach"],
    image: resolveTeamImage(),
    description: "",
  },
  {
    name: "Valerie Shu",
    positions: ["Graphic Design", "Outreach"],
    image: resolveTeamImage(),
    description: "",
  },
  {
    name: "Sarvesh Madullapalli",
    positions: ["Intern", "Technology", "Teacher"],
    image: resolveTeamImage(),
    description: "",
  },
  {
    name: "Vyaas Baskar",
    positions: ["Intern", "Teacher"],
    image: resolveTeamImage("Vyaas Baskar", "jpg"),
    description:
      "Vyaas Baskar is an 8th grader at Miller Middle school, who enjoys physics, chemistry, math, and programming. He has also been part of a robotics team for over four years. For fun, he creates games in Unity, and plays basketball with friends.",
  },
  {
    name: "Chaas Kandregula",
    positions: ["Intern", "Teacher"],
    image: resolveTeamImage(),
    description: "",
  },
];
people.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
people.forEach((p) => p.positions.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0)));
export default people;
