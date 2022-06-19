import { getAuth } from "firebase/auth";
import getFirebase from "./getFirebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function useAuth() {
  return useAuthState(getAuth(getFirebase()));
}
