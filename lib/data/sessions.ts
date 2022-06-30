export type Session = {
  slug: string;
  title: string;
  media?: string;
  classes: {
    teacher: string;
    title: string;
    date: string;
    description?: string;
  }[];
};
export const sessionData: Session[] = [
  {
    slug: "intro-to-stem",
    title: "Intro to STEM Spring Workshop",
    media: `
        <iframe
          src="https://www.youtube.com/embed/xM73rqNecig"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="flex-grow: 1; height: 224px;"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/nhyKvVnXGCQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="flex-grow: 1; height: 224px;"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/CDrld7EdTb4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="flex-grow: 1; height: 224px;"
        ></iframe>`,
    classes: [
      {
        teacher: "Snehil Kakani",
        title: "Full Stack Web Development",
        date: "Monday, April 18th, 2022",
        description:
          "In this workshop session, we will take a deep dive into the basics of web development. Students attending the session will learn how to get started with building their own passion projects using web technologies. Concepts learned include HTML, CSS, JavaScript, and the basics of backend and API development. This session will be a great opportunity to learn how to build a website from scratch.",
      },
      {
        teacher: "Selena Yang",
        title: "Biotechnology",
        date: "Tuesday, April 19th, 2022",
        description:
          "Biotechnology is a fascinating subject that not many students know about. In this session, students will learn about all kinds of concepts important in modern biology, such as protein structure, cell purification, and DNA experimentation and sequencing. These concepts can be applied to the real world and help students understand how to make a difference in the world.",
      },
      {
        teacher: "Harold Wang",
        title: "Genetics",
        date: "Wednesday, April 20th, 2022",
        description:
          "In this session, students will learn all about genetics, such as what makes up the human body, how cells work, DNA, and heredity. By the end of this session, expect to know many cool facts about the human body and how it works.",
      },
      {
        teacher: "Steve Yang",
        title: "Waves",
        date: "Thursday, April 21st, 2022",
        description:
          "Waves are used in many real-world situations. Not just ocean waves, but also electromagnetic waves, light waves, sound waves, and so much more. In this session, students will learn all about waves and what they are made up of. They will also learn amazing facts about waves and how they work.",
      },
      {
        teacher: "Sanya Badhe",
        title: "Thermodynamics",
        date: "Friday, April 22nd, 2022",
        description:
          "Thermodynamics is a fascinating subject that not many students know of. It is the science of relationships between heat, temperature, and energy. Students will learn lots of energy and heat related concepts in this deep dive session.",
      },
    ],
  },
  {
    slug: "2021-winter",
    title: "2021 Winter Workshop",
    classes: [
      {
        teacher: "Steve Yang",
        title: "Hydrology",
        date: "Monday, December 20th, 2021",
      },
      {
        teacher: "Snehil Kakani",
        title: "Full Stack Web",
        date: "Tuesday, December 21st, 2021",
      },
      {
        teacher: "Thomas Wu",
        title: "Oceanography",
        date: "Tuesday, December 21st, 2021",
      },
      {
        teacher: "Steve Yang",
        title: "Mass Wasting",
        date: "Wednesday, December 22nd, 2021",
      },
      {
        teacher: "Chaas Kandregula",
        title: "Waves",
        date: "Wednesday, December 22nd, 2021",
      },
      {
        teacher: "Jishnu Balaji",
        title: "Ornithology",
        date: "Thursday, December 23rd, 2021",
      },
      {
        teacher: "Anish Bhethanabotla",
        title: "Electricity and Magnetism",
        date: "Thursday, December 23rd, 2021",
      },
      {
        teacher: "Samuel Wang",
        title: "Volcanoes",
        date: "Sunday, December 26th, 2021",
      },
      {
        teacher: "Anish Bhethanabotla",
        title: "Machines",
        date: "Sunday, December 26th, 2021",
      },
      {
        teacher: "Johnathan Kao",
        title: "Astronomy",
        date: "Monday, December 27th, 2021",
      },
      {
        teacher: "Chaas Kandregula",
        title: "VSEPR Theory",
        date: "Monday, December 27th, 2021",
      },
    ],
  },
  {
    slug: "2021-summer",
    title: "2021 Summer Workshop",
    classes: [
      {
        teacher: "Steve Yang",
        title: "Uncertainty Principle",
        date: "Friday, June 18th, 2021",
      },
      {
        teacher: "Chaas Kandregula",
        title: "Vaccines",
        date: "Friday, June 18th, 2021",
      },
      {
        teacher: "Steve Yang",
        title: "Oceanography",
        date: "Friday, June 25th, 2021",
      },
      {
        teacher: "Rohan & Arnav",
        title: "Python",
        date: "Friday, June 25th, 2021",
      },
      {
        teacher: "Chaas Kandregula",
        title: "Chemical Reactions",
        date: "Friday, July 2nd, 2021",
      },
      {
        teacher: "Selena Yang",
        title: "Animal Development",
        date: "Friday, July 2nd, 2021",
      },
      {
        teacher: "Sanya",
        title: "Combinatorics",
        date: "Friday, July 9th, 2021",
      },
      {
        teacher: "Daphne Zhu & Meghana Babu",
        title: "Ornithology",
        date: "Friday, July 9th, 2021",
      },
      {
        teacher: "Steve Yang",
        title: "Meteorology",
        date: "Friday, July 16th, 2021",
      },
      {
        teacher: "Rohan Fernandes",
        title: "Machine Learning",
        date: "Friday, July 16th, 2021",
      },
      {
        teacher: "Justin Zhang",
        title: "Beginner C",
        date: "Friday, July 23rd, 2021",
      },
      {
        teacher: "John Jou",
        title: "A&P -  Muscoskeletal System",
        date: "Friday, July 23rd, 2021",
      },
      {
        teacher: "Chaas Kandregula",
        title: "Nuclear Fission and Fusion",
        date: "Friday, July 30th, 2021",
      },
      {
        teacher: "Johnathan Kao",
        title: "Astronomy",
        date: "Friday, August 6th, 2021",
      },
      {
        teacher: "Aarav",
        title: "Python",
        date: "Friday, August 6th, 2021",
      },
    ],
  },
  {
    slug: "2020-winter",
    title: "2020 Winter Workshop",
    classes: [
      {
        teacher: "Aryan Patnaik",
        title: "Immune Systems",
        date: "Monday, December 21st, 2021",
      },
      {
        teacher: "Steve Yang",
        title: "Interpersonal Skills",
        date: "Monday, December 21st, 2021",
      },
      {
        teacher: "Steve Yang",
        title: "Ecology",
        date: "Wednesday, December 23rd, 2021",
      },
      {
        teacher: "Chaas Kandregula",
        title: "Periodic Table",
        date: "Wednesday, December 23rd, 2021",
      },
      {
        teacher: "Alan Yu",
        title: "Botanical Facts",
        date: "Sunday, December 27th, 2021",
      },
      {
        teacher: "Chaas Kandregula",
        title: "Electricity and Magnetism",
        date: "Sunday, December 27th, 2021",
      },
      {
        teacher: "Steve Yang",
        title: "Oceanography",
        date: "Monday, December 28th, 2021",
      },
      {
        teacher: "Aryan Patnaik",
        title: "Nervous Systems",
        date: "Monday, December 28th, 2021",
      },
      {
        teacher: "Alan Yu",
        title: "Chemistry",
        date: "Wednesday, December 30th, 2021",
      },
      {
        teacher: "Selena Yang",
        title: "Energy Pathways",
        date: "Wednesday, December 30th, 2021",
      },
      {
        teacher: "Steve Yang",
        title: "Viruses",
        date: "Friday, January 1st, 2022",
      },
      {
        teacher: "Rohan Fernandes",
        title: "Python Coding",
        date: "Friday, January 1st, 2022",
      },
      {
        teacher: "Alan Yu",
        title: "Entomology",
        date: "Sunday, January 3rd, 2022",
      },
      {
        teacher: "Selena Yang",
        title: "Cancer",
        date: "Sunday, January 3rd, 2022"
      }
    ],
  },
  {
    slug: "2020-thanksgiving",
    title: "2020 Thanksgiving Workshop",
    classes: [
      {
        teacher: "Aryan Patnaik",
        title: "Anatomy",
        date: "Monday, November 23rd, 2020",
      },
      {
        teacher: "Steve Yang",
        title: "Glaciers",
        date: "Monday, November 23rd, 2020",
      },
      {
        teacher: "yours truly",
        title: "EPD",
        date: "Tuesday, November 24th, 2020",
      },
      {
        teacher: "Selena Yang",
        title: "Genetics",
        date: "Tuesday, November 24th, 2020",
      },
      {
        teacher: "Aryan Patnaik & Sanya Badhe",
        title: "Cryptography",
        date: "Wednesday, November 25th, 2020",
      },
      {
        teacher: "Selena Yang",
        title: "C++",
        date: "Wednesday, November 25th, 2020",
      },
      {
        teacher: "Alan Yu",
        title: "Ants",
        date: "Thursday, November 26th, 2020",
      },
      {
        teacher: "Steve Yang",
        title: "Intermolecular Forces",
        date: "Thursday, November 26th, 2020",
      },
      {
        teacher: "Steve Yang",
        title: "Meteorology",
        date: "Friday, November 27th, 2020",
      },
      {
        teacher: "Vincent Qin",
        title: "Astronomy",
        date: "Friday, November 27th, 2020",
      },
      {
        teacher: "Aryan Patnaik",
        title: "Marine Biology",
        date: "Saturday, November 28th, 2020",
      },
      {
        teacher: "Vincent Qin",
        title: "Hydrology",
        date: "Saturday, November 28th, 2020",
      },
      {
        teacher: "Sanya Badhe",
        title: "Circuits",
        date: "Sunday, November 29th, 2020",
      },
      {
        teacher: "Sanya Badhe",
        title: "Forces",
        date: "Sunday, November 29th, 2020",
      },
    ]
  }
];
