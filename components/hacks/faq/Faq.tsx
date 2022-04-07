import Question from "./Question";
import useAos from "../../useAos";
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
      "Submissions should be sent through our Devpost <link>. You will need to include your team name, all of your team member names, the dev tools used if any (ex. JS for websites, Bash for a script, Arduino for physical, etc.). Optionally, but strongly recommended, you can include a Github repository for your project, as well as photos and videos for demoing the project. The more the better!",
  },
  {
    question: "How do I enter the raffle?",
    answer: "IDK",
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
    <div {...useAos()} className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
      {questions.map((question, idx) => (
        <Question key={idx} {...question} />
      ))}
      {/* <Question
        question="What is a Hackathon?"
        answer="A hackathon is a 48 hour long session where people can code and bring their amazing ideas to life."
      />
      <Question
        question="How much does it cost?"
        answer="This hackathon is free to attend."
      />
      <Question
        question="Do I need experience to join?"
        answer="No, this a beginner friendly hackathon where we also have workshops for you to learn."
      />
      <Question
        question="Do I need a team?"
        answer="We try to encourage having people in teams and have a team building channel in the discord but if you want you can also work solo."
      />
      <Question
        question="Where is the hackathon?"
        answer="Due to the COVID-19 (Coronavirus) pandemic, STEMist Education will be hosting STEMist Hacks online."
      />
      <Question
        question="What should I do in STEMist Hacks?"
        answer="You can program and create an application and/or you can attend our amazing workshops and speaker events hosted around the clock."
      />
      <Question
        question="When does registration close?"
        answer="Registration for this hackathon will close at 11:30pm on June 23rd."
      />
      <Question
        question="What is the theme of this hackathon?"
        answer="There is no theme for this hackathon per se. Just build an application, and wow our judges with your amazing programs."
      />
      <Question
        question="How do I submit during this hackathon?"
        answer="Submit a video less than 2 minutes long, along with your code on GitHub."
      />
      <Question
        question="How do I enter the raffle?"
        answer="There will be a certain task available on the weekend of the Hackathon."
      />
      <Question
        question="Will there be presentations?"
        answer="For winners, they will have to demo and do a presentation about their software."
      />
      <Question
        question="Is Cross-Submission allowed for this hackathon?"
        answer="Yes, Cross-Submissions are allowed."
      />
      <Question
        question="Do I have to attend all the workshops?"
        answer="No, these workshops are optional but we would advise you to go to ones that you are interested in when you have the time."
      />
      <Question
        question="Do I have to submit a project?"
        answer="No, you do not have to submit a project."
      />
      <Question
        question="Any more questions?"
        answer="Email stemisteducation@gmail.com if you have more questions."
      /> */}
    </div>
  );
}
