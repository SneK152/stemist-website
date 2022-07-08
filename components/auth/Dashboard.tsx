import { NavLinks } from "@/lib/data/navLinks";
import type Class from "@/lib/types/Class";
import StudentData from "@/lib/types/StudentData";
import { getAuth, signOut } from "firebase/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import Container from "../layout/Container";
import PartialBanner from "../layout/PartialBanner";

export default function Dashboard(props: { user: StudentData }) {
  const router = useRouter();
  const dashboardNav = useMemo<NavLinks>(
    () =>
      props.user === null || props.user === undefined
        ? [
            {
              name: "Login",
              link: "/auth/login",
              via: "link",
            },
            {
              name: "Register",
              link: "/auth/register",
              via: "link",
            },
          ]
        : [
            {
              name: `Logged in as ${props.user.name}`,
              via: "function",
              func: () => {},
              customProps: {
                className: "cursor-auto",
              },
              image: props.user.profileUrl,
            },
            {
              name: "Logout",
              func: async () => {
                router.push("/");
                Cookies.remove("user");
                await signOut(getAuth());
              },
              customProps: {
                main: true,
                color: "red",
                textColor: "white",
              },
              via: "function",
            },
          ],
    [props.user, router]
  );

  const [classrooms, setClassrooms] = useState<Class[]>([]);
  useEffect(() => {
    props.user.classes.forEach((class_id) => {
      fetch(`/api/class?class_id=${class_id}`)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setClassrooms((c) => [...c, json]);
        });
    });
  }, [props.user.classes]);

  return (
    <Container
      title="Dashboard"
      noNav
      navTitle="Student Dashboard"
      customNav={dashboardNav}
    >
      <PartialBanner title="Student Dashboard" />
      <div className="p-5">
        <h1 className="text-5xl">Welcome back {props.user.name}!</h1>
        <div>
          {classrooms.map((classroom, index) => {
            return <div key={props.user.classes[index]}>{classroom.name}</div>;
          })}
        </div>
      </div>
    </Container>
  );
}
