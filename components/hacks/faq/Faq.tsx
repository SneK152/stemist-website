import Question from "./Question";
import useAos from '../../useAos';

export default function FAQ() {
  return (
    <div {...useAos()} className="grid md:grid-cols-2">
      <Question
        question="Q: What is a Hackathon"
        answer="A: A hackathon is a 48 hour long session where people can code and bring their amazing ideas to life"
      />
      <Question
        question="Q: How much does it cost"
        answer="A: This hackathon is free to attend"
      />
      <Question
        question="Q: Do I need experience to join"
        answer="A: No, this a beginner friendly hackathon where we also have workshops for you to learn"
      />
      <Question
        question="Q: Do I need a team"
        answer="A: We try to encourage having people in teams and have a team building channel in the discord but if you want you can also work solo"
      />
      <Question
        question="Q: Where is the hackathon"
        answer="A: Due to the COVID-19 (Coronavirus) pandemic, STEMist Education will be hosting STEMist Hacks online"
      />
      <Question
        question="Q: What should I do in STEMist Hacks?"
        answer="A: You can program and create an application and/or you can attend our amazing workshops and speaker events hosted around the clock"
      />
      <Question
        question="Q: When does registration close?"
        answer="A: Registration for this hackathon will close at 11:30pm on June 23rd"
      />
      <Question
        question="Q: What is the theme of this hackathon?"
        answer="A: There is no theme for this hackathon per se. Just build an application, and wow our judges with your amazing programs"
      />
      <Question
        question="Q: How do I submit during this hackathon?"
        answer="A: Submit a video less than 2 minutes long, along with your code on GitHub"
      />
      <Question
        question="Q: Is Cross-Submission allowed for this hackathon"
        answer="A: Yes, Cross-Submission is allowed"
      />
      <Question
        question="Q: Do I have to attend all the workshops"
        answer="A: No, these workshops are optional but we would advise you to go to ones that you are interested in when you have the time"
      />
      <Question
        question="Q: Do I have to submit a project"
        answer="A: When you sign up, you have to submit a project"
      />
    </div>
  );
}
