import Question from "./Question";
import { ReactNode } from "react";

const questions: {
  question: ReactNode;
  answer: ReactNode;
}[] = [
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is a coding event where interested people from all over the world can participate in fun coding competitions and bring their amazing ideas to life. There are also chances to win prizes! Overall hackathons are very fun experiences.",
  },
  {
    question: "How much does it cost?",
    answer: "This hackathon is completely free to attend.",
  },
  {
    question: "Do I need experience to join?",
    answer:
      "No! This is a completely beginner friendly hackathon. We have workshops and mentors available for students who are starting out, so you will learn everything you will need to compete.",
  },
  {
    question: "Do I need a team?",
    answer:
      "We encourage both solo projects and team projects. If you need help finding a team please refer to the teambuilding channel in our discord server! <link>",
  },
  {
    question: "Where is the hackathon?",
    answer:
      "STEMist Education will be hosting STEMist Hacks online, so you can join from anywhere! However, the workshop and ceremony times are all in PDT.",
  },
  {
    question: "What should I do in STEMist Hacks?",
    answer:
      "You can program and create any sort of project, ranging from physical projects to software to Scratch projects to websites! Any kind of coding project is allowed.",
  },
  {
    question: "When does registration close?",
    answer:
      "Registration closes at the opening ceremony, so you can register anytime before that!",
  },
  {
    question: "What is the theme of the hackathon?",
    answer:
      "There is no theme for this hackathon per se. Just build a coding project, whether it be physical or digital, and wow our judges with your amazing programs.",
  },
  {
    question: "What do I submit for the hackathon?",
    answer:
      "Submissions should be sent through our Devpost. You will need to include your team name, all of your team member names, the dev tools used if any (ex. JS for websites, Arduino for physical, etc.). It is recommended to include a Github repository for your project, as well as photos and videos demoing the project.",
  },
  {
    question: "How do I enter the raffle?",
    answer: "Work in progress.",
  },
  {
    question: "Do I have to create a presentation?",
    answer:
      "All hackathon winners will be expected to create a presentation demoing their project which will be presented during the award ceremony.",
  },
  {
    question: "Is cross submission allowed?",
    answer:
      "Yes, submissions from other hackathons with the same time given to create the project are allowed if there were no edits amongst that time period. The hackathon can also be on the same weekend. If cross submitting, you must include a footer note in the submission that it is a cross submission.",
  },
  {
    question: "Do I need to attend the workshops?",
    answer:
      "The workshops and speaker sessions are completely optional but if you are interested in any topics being discussed, you are more than welcome to join!",
  },
  {
    question: "Do I have to submit a project?",
    answer:
      "No! Submitting a project is completely optional if you wish to join only for the workshops.",
  },
];

export default function FAQ() {
  return (
    <>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
        {questions.map((question, idx) => (
          <Question key={idx} {...question} />
        ))}
      </div>
      <br />
      <h1 className="text-xl text-center font-display">
        Email{" "}
        <a
          className="text-blue-500"
          href="mailto:contact@joinstemist.org"
          target="_blank"
          rel="noreferrer noopener"
          data-tip="Copied!"
        >
          contact@joinstemist.org
        </a>{" "}
        if you have more questions.
      </h1>
    </>
  );
}
