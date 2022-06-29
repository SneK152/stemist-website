import { useFormik } from "formik";
import InputField from "../forms/InputField";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import getFirebase from "@/lib/hooks/getFirebase";
import { memo, useState, useRef, useEffect, useCallback } from "react";
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

  const [message, setMessage] = useState<string>("");
  const profileImageRef = useRef<any>();
  const [image, setImage] = useState<string>("");

  const handleError = (e: FirebaseError) => {
    let code = e.code.substring(5).replace(/-/g, " ");
    code = code.charAt(0).toUpperCase() + code.slice(1);
    setMessage(code);
  };

  async function handleGoogleClick() {
    let GoogleProvider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(
        getAuth(getFirebase()),
        GoogleProvider
      );
      const { user } = response;
      let name = user.displayName!;
      let profileURL = user.photoURL!;
      await fetchUser("POST", user.uid, {
        name,
        profileUrl: profileURL,
      });
    } catch (error) {
      handleError(error as FirebaseError);
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
      try {
        // setSubmitting(true);
        const { user } = await createUserWithEmailAndPassword(
          getAuth(getFirebase()),
          email,
          password
        );
        if (profileImageRef.current!.files.length === 0) {
          await fetchUser("POST", user.uid, {
            name,
            profileUrl: "/avatar.svg",
          });
          // setSubmitting(false);
        }
        const url = await uploadProfilePic(
          profileImageRef.current!.files[0],
          user.uid
        );
        await fetchUser("POST", user.uid, {
          name,
          profileUrl: url,
        });
        // setSubmitting(false);
      } catch (error) {
        handleError(error as FirebaseError);
      }
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
              <div
                className="text-red-800 text-center border-2 rounded-md bg-green-200 border-slate-400 mx-auto w-1/2"
                style={{ marginTop: '1.5rem', display: message ? '' : 'hidden' }}
              >{message}</div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
