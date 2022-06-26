import { NavLinks } from "@/lib/data/navLinks";
import useAuth from "@/lib/hooks/useAuth";
import React, { useMemo } from "react";
import Container from "../layout/Container";
import PartialBanner from "../layout/PartialBanner";

export default function Dashboard() {
  const [user] = useAuth();
  const dashboardNav: NavLinks = useMemo(
    () =>
      user === null || user === undefined
        ? [
            {
              name: "Login",
              link: "/auth/login",
            },
            {
              name: "Register",
              link: "/auth/register",
            },
          ]
        : [
            {
              name: "Logged in as" + user.displayName,
              link: "/dashboard",
            },
          ],
    [user]
  );
  return (
    <Container
      title="Dashboard"
      noNav
      navTitle="Student Dashboard"
      customNav={dashboardNav}
    >
      <PartialBanner title="Student Dashboard">
        <div className="absolute">asdf</div>
      </PartialBanner>
    </Container>
  );
}
