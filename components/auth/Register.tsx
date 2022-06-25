import { useFormik } from "formik";
import InputField from "../forms/InputField";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, UserCredential, User } from "firebase/auth";
import getFirebase from "@/lib/hooks/getFirebase";
import { memo, useState, ReactNode, useRef } from 'react';
import Container from "../layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import * as Yup from "yup";
import { addData } from "@/lib/auth/user";
import Image from 'next/image'
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage'
import FileInput from "../layout/FileInput";
import { fetchUser } from "@/lib/auth/fetch";

const GoogleLogo = require('./Google.png')

interface SignUpForm {
  email: string;
  password: string;
  profile: any;
  name: string;
}

const MInputField = memo(InputField);

export default function SignUp() {

  const [message, setMessage] = useState<ReactNode>(<></>)
  const [image, setImage] = useState<any>()
  const profileImageRef = useRef <File | null | any>()

  async function handleGoogleClick() {
    let GoogleProvider = new GoogleAuthProvider()
    await signInWithPopup(getAuth(getFirebase()), GoogleProvider)
      .then((response: UserCredential) => {
        const { user } = response
        let userId = user.uid
        let name = user.displayName!
        let profileURL = user.photoURL!
        addData({
          name,
          profileUrl: profileURL
        }, userId)
      })
      .catch((error) => {
        let parts = error.code.split('/')[0] as string
        setMessage(<p>{parts[1]}</p>)
      })
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

      const firebaseStorage = ref(getStorage(getFirebase()), `profile/${user.uid}`)
      uploadBytes(firebaseStorage, profileImageRef.current!.files[0])
        .then(snap => {
          getDownloadURL(firebaseStorage)
            .then(async url => {

              await addData(
                {
                  name: name,
                  profileUrl: url,
                },
                user.uid
              );
            })
        })

      // TODO: Add name and pfp uploads
      await fetchUser("POST", user.uid, {
        name: "<name>",
        profileUrl: "<pfpUrl>",
      });
      setSubmitting(false);
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(3, "Must be more than 3 characters")
        .max(500, "Cannot be longer than 500 characters")
        .required("Required"),
    }),
  });

  return (
    <Container title="Auth | Register">
      <PartialBanner title="Register" />
      <div>
        <div className="mx-auto py-3 flex-col flex gap-5 sm:px-6 lg:px-8 max-w-[100rem] px-2">
          <h1 className="font-sans text-xl text-center max-w-[80ch] m-auto">
            Fill out this form if you would like to contact us, if you have
            feedback on one of our recent sessions, or if you would like to
            provide a testimonial. We will reach out to you within 2-5 days.
          </h1>
          <form
            onSubmit={formik.handleSubmit}
            className="w-full space-y-3 bg-opacity-90 rounded-3xl bg-slate-800 p-5"
          >
            <div className="w-full space-y-3 rounded-lg p-4">
              <MInputField
                labelName="Email address"
                name="email"
                type="email"
                formik={formik}
              />
              <MInputField
                labelName="Password"
                type="password"
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
                setImage={setImage}
              />
              <button
                className="relative m-auto block w-full rounded-md border border-transparent bg-white bg-opacity-5 py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:w-1/2"
                type="submit"
              >
                Submit
              </button>
              <button
                className="relative m-auto block w-full rounded-md border border-transparent bg-white bg-opacity-5 py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:w-1/2"
                onClick={handleGoogleClick}
              >
                <Image src={GoogleLogo} alt='Google Logo' />
                Register with Google
              </button>
              {message}
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
