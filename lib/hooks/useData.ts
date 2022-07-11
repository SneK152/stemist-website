import { fetchUser } from "../auth/fetch";
import StudentData from "../types/StudentData";
import useAuth from "./useAuth";
import Cookies from "js-cookie";
import { useQuery } from "react-query";

export const useData = (defaultUser?: StudentData) => {
  const [authUser, loading] = useAuth();
  const { data } = useQuery<StudentData>(
    ["userData", authUser],
    async () => {
      const user = await fetchUser("GET", authUser?.uid!);
      Cookies.set("user", JSON.stringify(user as StudentData));
      return user as StudentData;
    },
    {
      enabled: !loading && authUser !== null && authUser !== undefined,
      initialData: defaultUser || {
        name: "",
        profileUrl: "/avatar.svg",
        classes: [],
        uid: "",
        role: "student",
      },
    }
  );
  return data;
};
