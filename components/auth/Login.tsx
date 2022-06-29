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
import Google from "@/public/google.svg";

interface LoginFormik {
  email: string;
  password: string;
}
const MInputField = memo(InputField);

export default function Login() {
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
    <Container title="Dashboard Login">
      <PartialBanner title="Dashboard Login" />
      <div>
        <div className="py-3 my-3 flex-col flex gap-5 padded-section">
          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="w-full space-y-3 rounded-lg">
              <MInputField
                labelName="Email address"
                name="email"
                type="email"
                formik={formik}
              />
              <MInputField
                labelName="Password"
                formik={formik}
                name="password"
              />
              <div className="relative m-auto flex w-full gap-5 sm:w-1/2">
                <button
                  type="submit"
                  className="relative block w-full rounded-none border border-transparent bg-black bg-opacity-10 py-2 px-2 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Submit
                </button>
                <button
                  className="relative w-full rounded-none border border-transparent bg-black bg-opacity-10 py-2 px-2 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 flex items-center gap-2 justify-center"
                  onClick={handleGoogleClick}
                >
                  <Image src={Google} alt="Google Logo" />
                  Login with Google
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
