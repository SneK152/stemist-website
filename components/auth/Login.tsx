import { useFormik } from "formik";
import InputField from "../forms/InputField";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import getFirebase from "@/lib/hooks/getFirebase";
import { memo } from "react";

interface LoginFormik {
  email: string;
  password: string;
}

export default function Login() {
  const MInputField = memo(InputField);
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
    let GoogleProvider = new GoogleAuthProvider()
    await signInWithPopup(getAuth(getFirebase()), GoogleProvider)
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <MInputField formik={formik} labelName={"Email:"} name={"email"} />
        <MInputField
          type="password"
          formik={formik}
          labelName={"Password:"}
          name={"password"}
        />
        <button type="submit">Submit</button>
        <button onClick={handleGoogleClick}>
          or login with google
        </button>
      </form>
    </div>
  );
}
