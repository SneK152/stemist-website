import { resolveTeamImage } from "../imageHelpers";
import type Person from "../types/Person";

const teachers: Person[] = [
  {
    name: "Sanya Badhe",
    positions: ["Math Lead", "Physical Science", "Math"],
    image: resolveTeamImage("Sanya Badhe", "png"),
    description:
      "Sanya Badhe is a freshman at Lynbrook who focuses on Physics and Math. Outside of school, you can find her playing basketball (for fun), painting, or playing with her friends' dogs.",
  },
  {
    name: "Selena Yang",
    positions: ["Biology Lead", "Math", "Biology"],
    image: resolveTeamImage("Selena Yang", "jpg"),
    description:
      "Selena is a freshman at Lynbrook who enjoys reading biology, especially oncology. Aside from going down wiki rabbit holes, she also draws unnecessarily detailed diagrams, plays the piano, and struggles through math problems.",
  },
  {
    name: "Anish Bhethanabotla",
    positions: [
      "Physical Science Lead",
      "Computer Science",
      "Math",
      "Physical Science",
    ],
    image: resolveTeamImage("Anish Bhethanabotla", "jpeg"),
    description:
      "Anish is a freshman at Lynbrook High School who specializes in Physics and Computer Science. He enjoys listening to music.",
  },
  {
    name: "Shanker Ram",
    positions: ["Computer Science Lead", "Computer Science"],
    image: resolveTeamImage(),
    description:
      "Freshman at Lynbrook High School, Specializes in Math, Computer Science, and Data Science, Likes watching the NBA, in specific the Warriors",
  },
  {
    name: "Snehil Kakani",
    positions: ["Computer Science"],
    image: resolveTeamImage("Snehil Kakani", "jpg"),
    description:
      "Snehil Kakani is a freshman at Lynbrook High who loves web development. He enjoys working on user interfaces and backend APIs. He's also a graphic designer, drummer, actor, and more!",
  },
  {
    name: "Steve Yang",
    positions: ["Biology", "Physical Science"],
    image: resolveTeamImage("Steve Yang", "jpeg"),
    description:
      "Steve Yang is a freshman at Lynbrook High who focuses on Earth Science and Chemistry.  When not reading textbooks, he likes to conduct synthesis reactions, run five miles a day, and talk with friends.",
  },
  {
    name: "Johnathan Kao",
    positions: ["Physical Science", "Biology"],
    image: resolveTeamImage("Johnathan Kao", "jpg"),
    description:
      "Johnathan Kao is a freshman at Lynbrook High School who specializes in astronomy and oceanography. He likes to read and play videogames in his free time, as well as preparing for the next competition whatever it may be.",
  },
  {
    name: "Justin Zhang",
    positions: ["Computer Science", "Math"],
    image: resolveTeamImage("Justin Zhang", "jpg"),
    description:
      "Justin Zhang is a computer science and math enthusiast who codes in his free time. If he's not playing video games or watching Youtube, he's busy studying for his upcoming exams.",
  },
  {
    name: "Jianyu Wang",
    positions: ["Physical Science"],
    image: resolveTeamImage(),
    description:
      "Jianyu Wang is a chemistry fan and a random-facts-rookie who enjoys Wikipedia and harnessing the limitless potential of unnecessary stress.",
  },
  {
    name: "Daniel Kim",
    positions: ["Computer Science", "Math"],
    image: resolveTeamImage("Daniel Kim", "png"),
    description:
      "Daniel Kim is a freshman at Lynbrook who enjoys studying math, computer science, and physics. When he is not studying or doing homework, he likes to swim and talk to friends.",
  },
  {
    name: "Isaac Sun",
    positions: ["Math"],
    image: resolveTeamImage("Isaac Sun", "jpeg"),
    description:
      "Isaac Sun is a freshman at Lynbrook High School who enjoys doing math, especially algebra and combinatorics. Outside of school-related work, he also likes to play chess and read novels.",
  },
  {
    name: "Harold Wang",
    positions: ["Math", "Biology"],
    image: resolveTeamImage(),
    description:
      "Harold Wang is a freshman at Lynbrook High school who likes science. In his free time he plays games.",
  },
  {
    name: "Aryan Patnaik",
    positions: ["Biology"],
    image: resolveTeamImage(),
    description:
      "Aryan is a rare specimen of the human race, despite his name being used by hundreds of other homo sapiens. He teaches ecology, and when he's not studying (aka watching wild kratts), he's on the run with his school's track team, striving for olympic gold.",
  },
  {
    name: "Jishnu Balaji",
    positions: ["Biology"],
    image: resolveTeamImage("Jishnu Balaji", "jpg"),
    description:
      "Jishnu Balaji has been interested in science for a long time. He is a member of groups like Science Olympiad and Science Alliance, just to name a few. In his free time, he likes to swim.",
  },
  {
    name: "Yajat Nagaraj",
    positions: ["Math"],
    image: resolveTeamImage("Yajat Kiran", "png"),
    description:
      "Yajat is a freshman at Lynbrook High School who likes to do math and solve puzzles.",
  },
  {
    name: "Rohan Fernandes",
    positions: ["Computer Science"],
    image: resolveTeamImage(),
    description:
      "Rising Freshman at Lynbrook Highschool, Likes to code and watch th NBA in his spare timeand likes math.",
  },
  {
    name: "Kiara Ha",
    positions: ["Math", "Physical Science", "Biology"],
    image: resolveTeamImage("Kiara Ha", "png"),
    description:
      "Kiara is an AI enthusiast. In her free time, she enjoys tutoring chemistry, solving math problems and crying through physics questions. She is always down to chat!",
  },
  {
    name: "Kasturi Kirubaharan",
    positions: ["Math", "Biology"],
    image: resolveTeamImage("Kasturi Kirubaharan", "jpg"),
    description:
      "Kasturi Kirubaharan is a freshman at Lynbrook High School who focuses on genetics and cell biology. During her free time she likes to read and spend time with her friends.",
  },
  {
    name: "Sarvesh Madullapalli",
    positions: ["Computer Science"],
    image: resolveTeamImage(),
    description: "",
  },
  {
    name: "Vyaas Baskar",
    positions: ["Physical Science"],
    image: resolveTeamImage(),
    description: "",
  },
  {
    name: "Chaas Kandregula",
    positions: ["Intern", "Teacher"],
    image: resolveTeamImage(),
    description: "",
  },
];

export default teachers;
