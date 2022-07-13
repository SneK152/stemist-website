import Banner from "@/components/layout/Banner";
import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import { updateData } from "@/lib/auth/collection";
import StudentData from "@/lib/types/StudentData";
import { FieldValue } from "firebase-admin/firestore";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";

interface ClassProps {
  class: string;
}

export default function Class() {
  return (
    <Container title="Class Joined">
      <PartialBanner title="Class Joined" />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cl = ctx.params!.class as string;
  const cookie = cookies(ctx).user! as Object;
  if (cookie === undefined) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  const user = cookie as StudentData;
  await updateData(
    { ...user, classes: FieldValue.arrayUnion(cl) },
    user.uid,
    "users"
  );
  return {
    props: {},
  };
};
