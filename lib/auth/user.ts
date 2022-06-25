import {
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import getFirebase from "../hooks/getFirebase";
import StudentData from "../types/StudentData";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";

const db = getFirestore(getFirebase());

export const getData = async (uid: string): Promise<StudentData> => {
  const data = await getDoc(doc(db, "users", uid));
  return data.data() as StudentData;
};

export const addData = async (
  data: StudentData,
  uid: string
): Promise<void> => {
  await setDoc(doc(db, "users", uid), data);
};

export const updateData = async (
  data: Partial<StudentData>,
  uid: string
): Promise<void> => {
  await updateDoc(doc(db, "users", uid), data);
};

export const deleteData = async (uid: string): Promise<void> => {
  await deleteDoc(doc(db, "users", uid));
};

export const uploadProfilePic = async (image: File, user: StudentData) => {
  const storageRef = ref(getStorage(getFirebase()), `images/${user.name}`);
  await uploadBytes(storageRef, image);
  const url = await getDownloadURL(storageRef);
  return url;
};
