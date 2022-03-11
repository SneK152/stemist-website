import Question from "./Question";

export default function FAQ() {
  return (
    <div className="my-2 space-y-4">
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
        question="Q: Is this hackathon online or in-person"
        answer="A: Due to the current COVID-19 pandemic, we are holding this hackathon online"
      />
    </div>
  );
}
