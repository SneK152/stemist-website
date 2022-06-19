import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import getFirebase from "../hooks/getFirebase";
import StudentData from "../types/StudentData";

const db = getFirestore(getFirebase());

export const getData = async (uid: string): Promise<StudentData> => {
  const data = await getDoc(doc(db, "users", uid));
  return data.data() as StudentData;
};

export const addData = async (
  data: StudentData,
  uid: string
): Promise<void> => {
  console.log("inside adddata");
  try {
    await setDoc(doc(db, "users", uid), data);
  } catch (e) {
    console.log(e);
  }
};
