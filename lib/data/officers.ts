import { resolveTeamImage } from "../imageHelpers";
import Person from "../types/Person";

const officers: Person[] = [
  {
    name: "Steve Yang",
    positions: ["President", "Teacher"],
    image: resolveTeamImage("Steve Yang", "jpeg"),
    description:
      "Steve Yang is a freshman at Lynbrook High who focuses on Earth Science and Chemistry.  When not reading textbooks, he likes to conduct synthesis reactions, run five miles a day, and talk with friends.",
  },
  {
    name: "Justin Zhang",
    positions: ["Vice President", "Director of HR", "Operations", "Teacher"],
    image: resolveTeamImage("Justin Zhang", "jpg"),
    description:
      "Justin Zhang is a computer science and math enthusiast who codes in his free time. If he's not playing video games or watching Youtube, he's busy studying for his upcoming exams.",
  },
  {
    name: "Johnathan Kao",
    positions: ["Director of PR and Outreach", "Teacher"],
    image: resolveTeamImage("Johnathan Kao", "jpg"),
    description:
      "Johnathan Kao is a freshman at Lynbrook High School who specializes in astronomy and oceanography. He likes to read and play videogames in his free time, as well as preparing for the next competition whatever it may be.",
  },
  {
    name: "Snehil Kakani",
    positions: [
      "Director of Technology",
      "Website Dev",
      "Operations",
      "Teacher",
    ],
    image: resolveTeamImage("Snehil Kakani", "jpg"),
    description:
      "Snehil Kakani is a freshman at Lynbrook High who loves web development. He enjoys working on user interfaces and backend APIs. He's also a graphic designer, drummer, actor, and more!",
  },
  {
    name: "Selena Yang",
    positions: ["Instructor Lead"],
    image: resolveTeamImage("Selena Yang", "jpg"),
    description:
      "Selena is a freshman at Lynbrook who enjoys reading biology, especially oncology. Aside from going down wiki rabbit holes, she also draws unnecessarily detailed diagrams, plays the piano, and struggles through math problems.",
  },
  {
    name: "Anish Bhethanabotla",
    positions: ["Instructor Lead", "HR"],
    image: resolveTeamImage("Anish Bhethanabotla", "jpeg"),
    description:
      "Anish is a freshman at Lynbrook High School who specializes in Physics and Computer Science. He enjoys listening to music.",
  },
  {
    name: "Sanya Badhe",
    positions: ["Instructor Lead", "Operations"],
    image: resolveTeamImage("Sanya Badhe", "png"),
    description:
      "Sanya Badhe is a freshman at Lynbrook who focuses on Physics and Math. Outside of school, you can find her playing basketball (for fun), painting, or playing with her friends' dogs.",
  },
  {
    name: "Shanker Ram",
    positions: ["Instructor Lead"],
    image: resolveTeamImage(),
    description:
      "Freshman at Lynbrook High School, Specializes in Math, Computer Science, and Data Science, Likes watching the NBA, in specific the Warriors",
  },
];

export default officers;
