import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import getFirebase from "../hooks/getFirebase";

export const uploadProfilePic = async (image: File, uid: string) => {
  const storageRef = ref(getStorage(getFirebase()), `images/${uid}`);
  await uploadBytes(storageRef, image);
  const url = await getDownloadURL(storageRef);
  return url;
};
