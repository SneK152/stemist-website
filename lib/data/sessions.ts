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
];
