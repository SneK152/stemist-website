import { resolveTeamImage } from "../imageHelpers";
import { ExtendedPerson } from "../types/Person";

const people: ExtendedPerson[] = [
  {
    name: "Steve Yang",
    officerRoles: ["President"],
    teacherRoles: ["Biology", "Physical Science"],
    curriculumRoles: {
      phys: ["Basic Chemistry", "Chemical Reactions", "Earth Science"],
      bio: ["Chemistry of Life"],
    },
    image: resolveTeamImage("Steve Yang"),
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
    name: "Justin Zhang",
    officerRoles: ["Vice President", "Director of Events", "WEBS"],
    teacherRoles: ["Computer Science"],
    curriculumRoles: {
      cs: ["C++"],
    },
    image: resolveTeamImage("Justin Zhang"),
    description:
      "Justin Zhang is a computer science and math enthusiast who codes in his free time. If he's not playing video games or watching Youtube, he's busy studying for his upcoming exams.",
    qualifications: [
      "USACO Silver",
      "First place winner in many CA Hackathons",
      "Two Year Coder",
    ],
  },
  {
    name: "Johnathan Kao",
    teacherRoles: ["Biology"],
    curriculumRoles: {
      bio: ["Evolution", "Ethology"],
    },
    image: resolveTeamImage("Johnathan Kao"),
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
    name: "Snehil Kakani",
    officerRoles: ["Director of Technology", "Website", "WEBS", "Events"],
    teacherRoles: ["Computer Science"],
    curriculumRoles: {
      cs: ["Javascript", "Python"],
    },
    image: resolveTeamImage("Snehil Kakani"),
    description:
      "Snehil Kakani is a freshman at Lynbrook High who loves web development. He enjoys working on user interfaces and backend APIs. He's also a graphic designer, drummer, actor, and more!",
    qualifications: [
      "Full Stack Web Developer",
      "Honorable Mention Synopsys Science Fair",
      "Advanced Javascript and React Developer",
      "Skilled with Python and Node.js",
    ],
  },
  {
    name: "Selena Yang",
    officerRoles: ["Instructor Lead"],
    image: resolveTeamImage("Selena Yang"),
    teacherRoles: ["Biology Lead", "Math", "Biology"],
    curriculumRoles: {
      math: ["Algebra", "Geometry"],
      bio: ["Lead", "Molecular and Cell Biology", "Genetics"],
    },
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
    officerRoles: ["Instructor Lead", "HR"],
    teacherRoles: [
      "Physical Science Lead",
      "Computer Science",
      "Physical Science",
    ],
    curriculumRoles: {
      cs: ["Python"],
      phys: ["Lead", "Electricity and Magnetism", "Stellar Evolution"],
    },
    image: resolveTeamImage("Anish Bhethanabotla"),
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
    name: "Sanya Badhe",
    officerRoles: ["Instructor Lead"],
    teacherRoles: ["Math Lead", "Math"],
    curriculumRoles: {
      math: ["Lead", "Algebra", "Geometry", "Advanced Geometry"],
    },
    image: resolveTeamImage("Sanya Badhe"),
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
    name: "Shanker Ram",
    officerRoles: ["Instructor Lead"],
    teacherRoles: ["Computer Science Lead", "Computer Science"],
    curriculumRoles: {
      cs: ["Lead", "Python"],
    },
    image: resolveTeamImage("Shanker Ram"),
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
    name: "Jianyu Wang",
    teamRoles: ["HR"],
    image: resolveTeamImage("Jianyu Wang"),
    description:
      "Jianyu Wang is a chemistry fan and a random-facts-rookie who enjoys Wikipedia and harnessing the limitless potential of unnecessary stress.",
  },
  {
    name: "Isaac Sun",
    officerRoles: ["Director of PR and Outreach", "WEBS", "Events"],
    teacherRoles: ["Math"],
    curriculumRoles: {
      math: ["Advanced Algebra"],
    },
    image: resolveTeamImage("Isaac Sun"),
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
    teamRoles: ["HR"],
    teacherRoles: ["Biology"],
    curriculumRoles: {
      bio: ["Botany"],
    },
    image: resolveTeamImage("Harold Wang"),
    description:
      "Harold Wang is a freshman at Lynbrook High school who likes science. In his free time he plays games.",
    qualifications: ["USABO Semifinalist"],
  },
  {
    name: "Joshua Li",
    teamRoles: ["Events"],
    image: resolveTeamImage("Joshua Li"),
    description:
      "Joshua is a freshman at Lynbrook who enjoys all behind the curtain roles. He also likes exercising and gaming in his free time.",
  },
  {
    name: "Nathan Ye",
    teamRoles: ["Outreach", "Events", "WEBS"],
    image: resolveTeamImage("Nathan Ye"),
    description:
      "Nathan is a high school freshman that loves coding and football.",
  },
  {
    name: "Rohan Fernandes",
    teamRoles: ["Intern", "Technology", "Website", "Events"],
    teacherRoles: ["Computer Science", "Intern"],
    curriculumRoles: {
      cs: ["Intern", "Python", "Javascript"],
    },
    image: resolveTeamImage("Rohan Fernandes"),
    description:
      "Rising Freshman at Lynbrook Highschool, Likes to code and watch the NBA in his spare time and likes math.",
    qualifications: [
      "Multiple time Hackathon winner",
      "USACO member",
      "Three years of CS Competitive Coding",
      "Knowledgable in NodeJS and React",
      "CA Synposis Science Fair Participant",
    ],
  },
  {
    name: "Sophie Mak",
    teamRoles: ["Outreach", "Events", "WEBS"],
    image: resolveTeamImage("Sophie Mak"),
    description:
      "Sophie Mak is a freshman at Lynbrook High School that enjoys writing and networking.  In her spare time, she bakes and binge-reads webtoons.",
  },
  {
    name: "Sriman Ratnapu",
    officerRoles: ["Director of HR", "Outreach", "Events", "WEBS"],
    image: resolveTeamImage("Sriman Ratnapu"),
    description:
      "Sriman is a freshman at Lynbrook High School likes to play video games and read books.",
  },
  {
    name: "Annie Li",
    teamRoles: ["Graphic Design", "Outreach", "Events"],
    image: resolveTeamImage("Annie Li"),
    description:
      "Annie Li is a Lynbrook freshman who either makes digital art in her free time or is watching analysis videos on horror series.",
  },
  {
    name: "Valerie Shu",
    teamRoles: ["Graphic Design", "Outreach", "Events", "WEBS"],
    image: resolveTeamImage("Valerie Shu"),
    description:
      "Valerie is a freshman at Lynbrook High who enjoys teaching and the outdoors. She reads avidly, writes intermittently, draws digitally, and owns 2 rabbits.",
  },
  {
    name: "Sarvesh Madullapalli",
    teamRoles: ["Intern", "Technology", "Events"],
    teacherRoles: ["Computer Science", "Intern"],
    curriculumRoles: {
      cs: ["Intern", "Python"],
    },
    image: resolveTeamImage("Sarvesh Madullapalli"),
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
    teacherRoles: ["Physical Science", "Intern"],
    curriculumRoles: {
      phys: ["Intern", "Electricity and Magnetism"],
    },
    image: resolveTeamImage("Vyaas Baskar"),
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
    teacherRoles: ["Physical Science", "Intern"],
    curriculumRoles: {
      phys: ["Intern", "Basic Chemistry"],
    },
    image: resolveTeamImage("Chaas Kandregula"),
    description:
      "Chaas is an 8th grader at Miller Middle School. He loves chemistry and is very interested in math and science. Currently, he's on the Miller Science Bowl Team 1 and the Science Olympiad Black Team.",
  },
  {
    name: "Daniel Kim",
    teacherRoles: ["Computer Science", "Math"],
    curriculumRoles: {
      cs: ["C++"],
      math: ["Number Theory"],
    },
    image: resolveTeamImage("Daniel Kim"),
    description:
      "Daniel Kim is a freshman at Lynbrook who enjoys studying math, computer science, and physics. When he is not studying or doing homework, he likes to swim and talk to friends.",
    qualifications: ["USACO Gold Competitor", "AIME Qualifier"],
  },
  {
    name: "Aryan Patnaik",
    officerRoles: ["WEBS Lead"],
    teacherRoles: ["Biology"],
    curriculumRoles: {
      bio: ["Ecology"],
    },
    image: resolveTeamImage("Aryan Patnaik"),
    description:
      "Aryan is a rare specimen of the human race, despite his name being used by hundreds of other homo sapiens. He teaches ecology, and when he's not studying (aka watching wild kratts), he's on the run with his school's track team, striving for olympic gold.",
    qualifications: [
      "4 Time Science Olympiad Champion",
      "Second Place State Competition Science Olympiad",
    ],
  },
  {
    name: "Kiara Ha",
    teacherRoles: ["Physical Science", "Biology"],
    curriculumRoles: {
      phys: ["Acids and Bases"],
      bio: ["Anatomy and Physiology"],
    },
    image: resolveTeamImage("Kiara Ha"),
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
    teacherRoles: ["Biology"],
    curriculumRoles: {
      bio: ["Molecular and Cell Biology", "Genetics"],
    },
    image: resolveTeamImage("Kasturi Kirubaharan"),
    description:
      "Kasturi Kirubaharan is a freshman at Lynbrook High School who focuses on genetics and cell biology. During her free time she likes to read and spend time with her friends.",
    qualifications: [
      "Algebra and Arithmetic Tutor",
      "Algebra 2 Trig Student",
      "Science Olympiad Heredity Competitor",
    ],
  },
  {
    name: "Idhant Rao",
    teacherRoles: ["Math"],
    curriculumRoles: {
      math: ["Counting"],
    },
    image: resolveTeamImage("Idhant Rao"),
    description:
      "Idhant Rao is a math instructor who loves to study various fields of mathematics. He loves to discuss all things math.",
    qualifications: ["Former Math Kangaroo Participant"],
  },
  {
    name: "Sarthak Ratan",
    teamRoles: ["Outreach", "HR"],
    image: resolveTeamImage("Sarthak Ratan"),
    description:
      "Sarthak Ratan is a freshman at Lynbrook high who enjoys science, designing, and business. When he isn’t working he loves swimming, playing the guitar, or talking to friends.",
  },
  {
    name: "Yash Singh",
    teamRoles: ["Technology", "Intern"],
    description:
      "Yash Singh is a computer science and math fanatic who codes in his free time and can often be found in hackathons. He likes to go on hikes and play basketball when he is not studying.",
    image: resolveTeamImage("Yash Singh"),
    qualifications: [
      "Advanced TypeScript and C++ Developer",
      "Front-end Web Developer",
      "Open Source Contributor and Maintainer",
      "Mermaid.js Core Maintainer",
      "Schema-Inspector Maintainer",
    ],
  },
];
export default people;
