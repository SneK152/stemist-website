import type Person from "./Person";

export default interface PersonProps {
  person: Person;
  roles?: string[];
}
