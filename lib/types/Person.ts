type Person<T = string> = {
  name: string;
  positions: T[];
  description: string;
  image: string;
};

export type TeacherSubject =
  | "Math Lead"
  | "Biology Lead"
  | "Physical Science Lead"
  | "Computer Science Lead"
  | "Physical Science"
  | "Math"
  | "Biology"
  | "Computer Science"
  | "All";

export type TeamRole =
  | "Outreach"
  | "HR"
  | "Intern"
  | "Teacher"
  | "Graphic Design"
  | "Operations"
  | "Technology"
  | "Website";

export default Person;
