import { useEffect, useState } from "react";
import { fetchUser } from "../auth/fetch";
import StudentData from "../types/StudentData";
import useAuth from "./useAuth";
import Cookies from "js-cookie";

export const useData = (defaultUser?: StudentData) => {
  const [user, setUser] = useState<StudentData>(
    defaultUser || {
      name: "",
      profileUrl: "/avatar.svg",
    }
  );
  const [authUser, loading] = useAuth();
  useEffect(() => {
    if (!loading) {
      if (authUser !== null && authUser !== undefined) {
        fetchUser("GET", authUser.uid).then((u) => {
          setUser(u as StudentData);
          Cookies.set("user", JSON.stringify(u as StudentData));
        });
      }
    }
  }, [authUser, loading]);

  return user;
};
