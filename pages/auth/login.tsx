import _Login from "@/components/auth/Login";
import { useData } from "@/lib/hooks/useData";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";

export default function Login() {
  const user = useData();
  return <_Login />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = cookies(ctx).user as any;
  if (user !== undefined) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
