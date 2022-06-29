import { NavLinks } from "@/lib/data/navLinks";
import StudentData from "@/lib/types/StudentData";
import { getAuth, signOut } from "firebase/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
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
  return (
    <Container
      title="Dashboard"
      noNav
      navTitle="Student Dashboard"
      customNav={dashboardNav}
    >
      <PartialBanner title="Student Dashboard" />
    </Container>
  );
}
