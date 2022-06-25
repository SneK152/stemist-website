// import {
//   deleteDoc,
//   doc,
//   getDoc,
//   getFirestore,
//   setDoc,
//   updateDoc,
// } from "firebase/firestore";
import db from "../serverApp";
import StudentData from "../types/StudentData";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import getFirebase from "../hooks/getFirebase";

export const getData = async (uid: string): Promise<StudentData> => {
  const data = await db.collection("users").doc(uid).get();
  return data.data() as StudentData;
};

export const addData = async (
  data: StudentData,
  uid: string
): Promise<void> => {
  await db.collection("users").doc(uid).set(data);
};

export const updateData = async (
  data: Partial<StudentData>,
  uid: string
): Promise<void> => {
  await db.collection("users").doc(uid).update(data);
};

export const deleteData = async (uid: string): Promise<void> => {
  await db.collection("users").doc(uid).delete();
};

export const uploadProfilePic = async (image: File, user: StudentData) => {
  const storageRef = ref(getStorage(getFirebase()), `images/${user.name}`);
  await uploadBytes(storageRef, image);
  const url = await getDownloadURL(storageRef);
  return url;
};
