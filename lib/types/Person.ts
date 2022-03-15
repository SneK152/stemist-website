type Person<T = string> = {
  name: string;
  positions: T[];
  description: string;
  image: string;
  qualifications?: string[];
};

export interface ExtendedPerson {
  name: string;
  description: string;
  image: string;
  teacherRoles?: TeacherSubject[];
  officerRoles?: string[];
  teamRoles?: TeamRole[];
  qualifications?: string[];
}

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
