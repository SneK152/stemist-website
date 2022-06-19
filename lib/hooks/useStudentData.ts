import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";
import StudentData from "../types/StudentData";
import getFirebase from "./getFirebase";
import useAuth from "./useAuth";

export default function useStudentData() {
  const [user] = useAuth();
  const [data, setData] = useState<StudentData>({
    name: "",
    profileUrl: "",
  });
  if (user) {
    getDoc(doc(getFirestore(getFirebase()), "users", user.uid)).then((d) => {
      setData(d.data() as StudentData);
    });
  }

  return data;
}
