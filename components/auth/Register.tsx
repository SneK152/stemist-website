import { useFormik } from "formik";
import InputField from "../forms/InputField";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import getFirebase from "@/lib/hooks/getFirebase";
import { memo, useState, ReactNode, useRef, useEffect } from "react";
import Container from "../layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import * as Yup from "yup";
import { uploadProfilePic } from "@/lib/auth/storage";
import Image from "next/image";
import FileInput from "../layout/FileInput";
import { fetchUser } from "@/lib/auth/fetch";
import { FirebaseError } from "firebase/app";
import Google from "@/public/google.svg";
import { useData } from "@/lib/hooks/useData";
import { useRouter } from "next/router";

interface SignUpForm {
  email: string;
  password: string;
  profile: any;
  name: string;
}

const MInputField = memo(InputField);

export default function SignUp() {
  const user = useData();
  const router = useRouter();

  useEffect(() => {
    if (user !== null && user.name !== "") {
      router.push("/dashboard");
    }
  }, [user, router]);

  const [message, setMessage] = useState<ReactNode>(<></>);
  const profileImageRef = useRef<File | null | any>();
  const [image, setImage] = useState<string>("");

  async function handleGoogleClick() {
    let GoogleProvider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(
        getAuth(getFirebase()),
        GoogleProvider
      );
      const { user } = response;
      let userId = user.uid;
      let name = user.displayName!;
      let profileURL = user.photoURL!;
      await fetchUser("POST", user.uid, {
        name,
        profileUrl: profileURL,
      });
    } catch (error) {
      let parts = (error as FirebaseError).code.split("/")[0] as string;
      setMessage(<p>{parts[1]}</p>);
    }
  }

  const formik = useFormik<SignUpForm>({
    initialValues: {
      email: "",
      password: "",
      name: "",
      profile: null,
    },
    onSubmit: async (
      { email, password, name },
      { resetForm, setSubmitting, setErrors }
    ) => {
      setSubmitting(true);
      const { user } = await createUserWithEmailAndPassword(
        getAuth(getFirebase()),
        email,
        password
      );
      const url = await uploadProfilePic(
        profileImageRef.current!.files[0],
        user.uid
      );
      await fetchUser("POST", user.uid, {
        name,
        profileUrl: url,
      });
      setSubmitting(false);
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(3, "Must be more than 3 characters")
        .max(500, "Cannot be longer than 500 characters")
        .required("Required"),
      name: Yup.string().required("Required"),
    }),
  });

  return (
    <Container title="Auth | Register">
      <PartialBanner title="Register" />
      <div>
        <div className="py-3 flex-col flex gap-5 padded-section">
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
              <MInputField
                labelName="Name"
                type="text"
                formik={formik}
                name="name"
              />
              <FileInput
                className=""
                name="ProfileURL:"
                ref={profileImageRef}
                setImage={setImage}
                image={image}
              />
              <div className="relative m-auto flex w-full gap-5 sm:w-1/2">
                <button
                  type="submit"
                  className="relative block w-full rounded-none border border-transparent bg-black bg-opacity-25 py-2 px-2 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Submit
                </button>
                <button
                  className="relative w-full rounded-none border border-transparent bg-black bg-opacity-25 py-2 px-2 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 flex items-center gap-2 justify-center"
                  onClick={handleGoogleClick}
                >
                  <Image src={Google} alt="Google Logo" />
                  Login with Google
                </button>
                {message}
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
