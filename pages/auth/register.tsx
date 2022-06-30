import SignUp from "@/components/auth/Register";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";

export default function Register() {
  return <SignUp />;
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
