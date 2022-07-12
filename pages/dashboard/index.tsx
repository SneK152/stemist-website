import Dashboard from "@/components/auth/Dashboard/Index";
import { useData } from "@/lib/hooks/useData";
import db from "@/lib/serverApp";
import StudentData from "@/lib/types/StudentData";
import { setCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";
import { v4 as uuidv4 } from 'uuid';

interface DashboardProps {
  user: StudentData;
}

export default function Dash(props: DashboardProps) {
  const user = useData(props.user!);
  return <Dashboard user={user} />;
}

export const getServerSideProps: GetServerSideProps<DashboardProps> = async (
  ctx
) => {
  const cookie = cookies(ctx).user! as Object;
  if (cookie === undefined) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  } else {
    const id = uuidv4();
    await db.collection("ids").doc(id).set({});
    setCookie("id", id, ctx);
  }
  return {
    props: {
      user: cookie as StudentData,
    },
  };
};
