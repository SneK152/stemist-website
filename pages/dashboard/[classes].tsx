import { NavLinks } from "@/lib/data/navLinks";
import type Class from "@/lib/types/Class";
import StudentData from "@/lib/types/StudentData";
import { getAuth, signOut } from "firebase/auth";
import Cookies from "js-cookie";
import { useRouter, NextRouter } from "next/router";
import { useMemo } from "react";
import { useQueries, useQuery, UseQueryResult } from "react-query";
import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import { useData } from "@/lib/hooks/useData";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";
import { v4 as uuidv4 } from "uuid";
import db from "@/lib/serverApp";
import { setCookie } from "cookies-next";

interface DashboardClassProps {
  user: StudentData;
  class: string;
}

export default function DashboardClasses(props: DashboardClassProps) {
  const user = useData(props.user!);
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

  const { data, isSuccess }: UseQueryResult<Class, unknown> = useQuery(
    ["user", props.class],
    async () => {
      const res = await fetch("/api/class/?class_id=" + props.class);
      return res.json();
    }
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
        <h1 className="text-5xl">Welcome back {props.user.name}!</h1>
        <button>Back to Dashboard</button>
        {isSuccess && (
          <div>
            <h2>Class: {data.name}</h2>
            <p>Taught By{data.teacher}</p>
          </div>
        )}
      </div>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps<
  DashboardClassProps
> = async (ctx) => {
  const cookie = cookies(ctx).user! as Object;
  const cl = ctx.params!.classes as string;
  if (cookie === undefined) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  const user = cookie as StudentData;
  if (!user.classes.includes(cl)) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  const id = uuidv4();
  await db.collection("ids").doc(id).set({});
  setCookie("id", id, ctx);
  return {
    props: {
      user: cookie as StudentData,
      class: cl,
    },
  };
};
