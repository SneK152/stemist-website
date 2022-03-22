import Question from "./Question";
import useAos from "../../useAos";

export default function FAQ() {
  return (
    <div {...useAos()} className="grid md:grid-cols-3 gap-3">
      <Question
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
      />
    </div>
  );
}
