import { NavLinks } from "@/lib/data/navLinks";
import type Class from "@/lib/types/Class";
import StudentData from "@/lib/types/StudentData";
import { getAuth, signOut } from "firebase/auth";
import Cookies from "js-cookie";
import { useRouter, NextRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useQueries, useQuery, UseQueryResult } from "react-query";
import { getClasses } from "../Classes";
import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";

export default function Dashboard(props: { user: StudentData }) {

  const [classes, setClasses] = useState<any[]>([])

  useEffect(() => {
    const _class = getClasses()
    setClasses(_class)
  }, [])

  const router: NextRouter = useRouter();
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

  const queries: UseQueryResult<Class, unknown>[] = useQueries(
    props.user.classes.map((id) => ({
      queryKey: ["user", id],
      queryFn: async () => {
        const res = await fetch("/api/class/?class_id=" + id);
        return res.json();
      },
    }))
  );

  return (
    <Container
      title="Dashboard"
      noNav
      navTitle="Student Dashboard"
      customNav={dashboardNav}
    >
      <PartialBanner title="Student Dashboard" />
      <div className="p-5">
        <h1 className="text-5xl">
          Welcome back {props.user.name}!
        </h1>
        <div>
        {queries.map((query, index) => {
            return (
              query.isSuccess && (
                <div key={props.user.classes[index]}>{query.data.name}</div>
              )
            );
        })}
          {classes.map((values: any, index: number) => {
            return (
              <div key={`class-${index}`} >
                <div className='p-4'>
                  <h1>
                    {values.name} by {values.teacher}
                  </h1>
                  <div>
                    Zoom Link: {values.zoom}
                  </div>
                </div>
                {values.video.map((_: any, indexer: number) => {
                  return (
                    <button key={`Video-Button-${indexer}`} onClick={() => router.push({ pathname: `/dashboard/classes`, query: { class: index, video: indexer }})} className="px-4 py-2 shadow-md bg-black text-white rounded-md">
                      {`Video ${indexer + 1}`}
                    </button>
      
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  );
}
