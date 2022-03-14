import { resolveTeamImage } from "../imageHelpers";
import type Person from "../types/Person";
import { TeacherSubject } from "../types/Person";

const teachers: Person<TeacherSubject>[] = [
  {
    name: "Sanya Badhe",
    positions: ["Math Lead", "Math"],
    image: resolveTeamImage("Sanya Badhe", "png"),
    description:
      "Sanya Badhe is a freshman at Lynbrook who focuses on Physics and Math. Outside of school, you can find her playing basketball (for fun), painting, or playing with her friends' dogs.",
    qualifications: [
      "46 Medals in Science Olympiad",
      "1st Place Regionals Science Olympiad",
      "Second Place NorCAL States Science Olympiad",
      "Perfect Score MOEMS",
      "Perfect Score Math Kangaroo",
      "Honor Roll AMC 10",
      "Distinguished Honor Roll AMC 8",
      "2 Time AIME Qualifier",
      "AIME Score of 7",
      "Top 10 Individual Round Berkeley Math Tournament",
      "Distinguished Honor Roll Berkeley Math Tournament",
      "USACO Silver Competitor",
    ],
  },
  {
    name: "Selena Yang",
    positions: ["Biology Lead", "Math", "Biology"],
    image: resolveTeamImage("Selena Yang", "jpg"),
    description:
      "Selena is a freshman at Lynbrook who enjoys reading biology, especially oncology. Aside from going down wiki rabbit holes, she also draws unnecessarily detailed diagrams, plays the piano, and struggles through math problems.",
    qualifications: [
      "Two Time AIME Qualifier",
      "Two Time Semifinalist USABO",
      "Fifth Place Science Bowl Nationals",
      "First Place Science Bowl Regionals",
      "Second and Third Place Science Olympiad",
    ],
  },
  {
    name: "Anish Bhethanabotla",
    positions: [
      "Physical Science Lead",
      "Computer Science",
      "Physical Science",
    ],
    image: resolveTeamImage("Anish Bhethanabotla", "jpeg"),
    description:
      "Anish is a freshman at Lynbrook High School who specializes in Physics and Computer Science. He enjoys listening to music.",
    qualifications: [
      "Two time First Place Synopsys Science Fair",
      "USAAAO Semifinalist",
      "Top 30 Broadcom Finalist",
      "Most Innovative Award California Invention Convention",
      "Community Benefit Award National Invention Convention",
      "Science Olympiad Team C Astronomy",
      "Multiple time Hackathon winner",
    ],
  },
  {
    name: "Shanker Ram",
    positions: ["Computer Science Lead", "Computer Science"],
    image: resolveTeamImage("Shanker Ram", "jpg"),
    description:
      "Freshman at Lynbrook High School, Specializes in Math, Computer Science, and Data Science, Likes watching the NBA, in specific the Warriors",
    qualifications: [
      "USACO Silver",
      "Knows Python, Java, C++",
      "Experienced in ML with supervised learning and reinforcement learning",
      "GitHub Pro",
      "Codeforces Specialist Rank",
      "Multiple time Hackathon winner",
      "Experience with Information Theory",
    ],
  },
  {
    name: "Snehil Kakani",
    positions: ["Computer Science"],
    image: resolveTeamImage("Snehil Kakani", "jpg"),
    description:
      "Snehil Kakani is a freshman at Lynbrook High who loves web development. He enjoys working on user interfaces and backend APIs. He's also a graphic designer, drummer, actor, and more!",
    qualifications: [
      "Full Stack Web Developer",
      "Advanced Javascript and React Developer",
      "Skilled with Python and Node.js",
    ],
  },
  {
    name: "Steve Yang",
    positions: ["Biology", "Physical Science"],
    image: resolveTeamImage("Steve Yang", "jpeg"),
    description:
      "Steve Yang is a freshman at Lynbrook High who focuses on Earth Science and Chemistry.  When not reading textbooks, he likes to conduct synthesis reactions, run five miles a day, and talk with friends.",
    qualifications: [
      "Four Year Science Olympiad Competitor",
      "Fifteen+ Science Olympiad Medals, Including 2nd at States",
      "Varsity Team Ocean Science Bowl",
      "Third Place Sea Lion Bowl Regionals",
      "Two Year Science Bowl Competitor",
      "Over Two Years of Teaching Experience",
    ],
  },
  {
    name: "Johnathan Kao",
    positions: ["Biology"],
    image: resolveTeamImage("Johnathan Kao", "jpg"),
    description:
      "Johnathan Kao is a freshman at Lynbrook High School who specializes in astronomy and oceanography. He likes to read and play videogames in his free time, as well as preparing for the next competition whatever it may be.",
    qualifications: [
      "Science Bowl 5th Nationals",
      "Biology Bowl 2nd Nationals",
      "Ocean Bowl 2nd Regionals",
      "Geography Bee State Qualifier",
    ],
  },
  {
    name: "Justin Zhang",
    positions: ["Computer Science"],
    image: resolveTeamImage("Justin Zhang", "jpg"),
    description:
      "Justin Zhang is a computer science and math enthusiast who codes in his free time. If he's not playing video games or watching Youtube, he's busy studying for his upcoming exams.",
    qualifications: [
      "USACO Silver",
      "First place winner in many CA Hackathons",
      "Two Year Coder",
    ],
  },
  {
    name: "Jianyu Wang",
    positions: ["Physical Science"],
    image: resolveTeamImage("Jianyu Wang", "jpeg"),
    description:
      "Jianyu Wang is a chemistry fan and a random-facts-rookie who enjoys Wikipedia and harnessing the limitless potential of unnecessary stress.",
  },
  {
    name: "Daniel Kim",
    positions: ["Computer Science", "Math"],
    image: resolveTeamImage("Daniel Kim", "png"),
    description:
      "Daniel Kim is a freshman at Lynbrook who enjoys studying math, computer science, and physics. When he is not studying or doing homework, he likes to swim and talk to friends.",
    qualifications: ["USACO Gold Competitor", "AIME Qualifier"],
  },
  {
    name: "Isaac Sun",
    positions: ["Math"],
    image: resolveTeamImage("Isaac Sun", "jpeg"),
    description:
      "Isaac Sun is a freshman at Lynbrook High School who enjoys doing math, especially algebra and combinatorics. Outside of school-related work, he also likes to play chess and read novels.",
    qualifications: [
      "AIME Qualifier",
      "Berkeley Math Tournament Honorable Mentions",
      "AP Calculus BC Freshman Student",
    ],
  },
  {
    name: "Harold Wang",
    positions: ["Biology"],
    image: resolveTeamImage("Harold Wang", "jpeg"),
    description:
      "Harold Wang is a freshman at Lynbrook High school who likes science. In his free time he plays games.",
    qualifications: ["USABO Semifinalist"],
  },
  {
    name: "Aryan Patnaik",
    positions: ["Biology"],
    image: resolveTeamImage("Aryan Patnaik", "jpeg"),
    description:
      "Aryan is a rare specimen of the human race, despite his name being used by hundreds of other homo sapiens. He teaches ecology, and when he's not studying (aka watching wild kratts), he's on the run with his school's track team, striving for olympic gold.",
    qualifications: [
      "4 Time Science Olympiad Champion",
      "Second Place State Competition Science Olympiad",
    ],
  },
  {
    name: "Rohan Fernandes",
    positions: ["Computer Science"],
    image: resolveTeamImage("Rohan Fernandes", "png"),
    description:
      "Rising Freshman at Lynbrook Highschool, Likes to code and watch the NBA in his spare time.",
    qualifications: [
      "Multiple time Hackathon winner",
      "USACO member",
      "Three years of CS Competitive Coding",
    ],
  },
  {
    name: "Kiara Ha",
    positions: ["Physical Science", "Biology"],
    image: resolveTeamImage("Kiara Ha", "png"),
    description:
      "Kiara is an AI enthusiast. In her free time, she enjoys tutoring chemistry, solving math problems and crying through physics questions. She is always down to chat!",
    qualifications: [
      "Won and Competed in many math competitions in Asia and the US",
      "AP Stats Freshman Student",
      "AP Environmental Science Freshman Student",
      "Biology and Physical Science Intern Experience",
    ],
  },
  {
    name: "Kasturi Kirubaharan",
    positions: ["Math", "Biology"],
    image: resolveTeamImage("Kasturi Kirubaharan", "jpg"),
    description:
      "Kasturi Kirubaharan is a freshman at Lynbrook High School who focuses on genetics and cell biology. During her free time she likes to read and spend time with her friends.",
    qualifications: [
      "Algebra and Arithmetic Tutor",
      "Algebra 2 Trig Student",
      "Science Olympiad Heredity Competitor",
    ],
  },
  {
    name: "Sarvesh Madullapalli",
    positions: ["Computer Science"],
    image: resolveTeamImage("Sarvesh Madullapalli", "jpg"),
    description:
      "Sarvesh knows Python, Java, web development, and some C++. He has won 4 hackathons and is a very good team leader. He knows and contributes to almost all popular libraries, specializing in Python. ",
    qualifications: [
      "Won 5 Hackathons",
      "Top 2% in LHD",
      "Well versed with servers and APIs",
      "Familiar with lots of libraries and programming languages",
    ],
  },
  {
    name: "Vyaas Baskar",
    positions: ["Physical Science"],
    image: resolveTeamImage("Vyaas Baskar", "jpg"),
    description:
      "Vyaas Baskar is an 8th grader at Miller Middle school, who enjoys physics, chemistry, math, and programming. He has also been part of a robotics team for over four years. For fun, he creates games in Unity, and plays basketball with friends.",
    qualifications: [
      "Third Year Science Olympiad",
      "Consistent Science Olympiad Medal Winner",
      "Top 25 in National MYSO tournament in Engineering and Flight",
      "Circuit Designer",
    ],
  },
  {
    name: "Chaas Kandregula",
    positions: ["Physical Science", "Biology"],
    image: resolveTeamImage("Chaas Kandregula", "jpg"),
    description:
      "Chaas is an 8th grader at Miller Middle School. He loves chemistry and is very interested in math and science. Currently, he's on the Miller Science Bowl Team 1 and the Science Olympiad Black Team.",
  },
];

export default teachers;
