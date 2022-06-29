import { useFormik } from "formik";
import InputField from "../forms/InputField";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import getFirebase from "@/lib/hooks/getFirebase";
import { memo, useEffect } from "react";
import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import Image from "next/image";
import { useData } from "@/lib/hooks/useData";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";

interface LoginFormik {
  email: string;
  password: string;
}
const MInputField = memo(InputField);

export default function Login() {
  const GoogleLogo = require("./Google.png");
  const user = useData();
  const router = useRouter();

  useEffect(() => {
    if (user !== null && user.name !== "") {
      router.push("/dashboard");
    }
  }, [user, router]);

  const formik = useFormik<LoginFormik>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (
      { email, password },
      { resetForm, setSubmitting, setErrors }
    ) => {
      resetForm();
      await signInWithEmailAndPassword(getAuth(getFirebase()), email, password);
    },
  });

  async function handleGoogleClick() {
    let GoogleProvider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(getFirebase()), GoogleProvider);
  }

  return (
    <Container title="Auth | Login">
      <PartialBanner title="Login" />
      <form
        onSubmit={formik.handleSubmit}
        className="w-full space-y-3 bg-opacity-90 rounded-3xl bg-slate-800 p-5"
      >
        <div className="w-full space-y-3 rounded-lg p-4">
          <MInputField formik={formik} labelName={"Email:"} name={"email"} />
          <MInputField
            type="password"
            formik={formik}
            labelName={"Password:"}
            name={"password"}
          />
          <button type="submit">Submit</button>
          <button
            className="relative m-auto block w-full rounded-md border border-transparent bg-white bg-opacity-5 py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:w-1/2"
            onClick={handleGoogleClick}
          >
            <Image src={GoogleLogo} alt="Google Logo" />
            Register with Google
          </button>
        </div>
      </form>
    </Container>
  );
}
