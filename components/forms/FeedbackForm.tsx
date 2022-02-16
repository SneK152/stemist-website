import { CheckIcon } from "@heroicons/react/outline";
import { FormikHelpers, useFormik } from "formik";
import { memo, ReactElement, useEffect, useState } from "react";
import * as Yup from "yup";
import InputField from "./InputField";
import Spinner from "../Spinner";
interface InputField {
  name: string;
  email: string;
  feedback: string;
}
const errorClass = "text-red-500 font-bold inline-block sm:text-sm pl-3 pt-2";
const MemoedInputField = memo(InputField);

export default function FeedBackForm() {
  const [submit, setSubmit] = useState<ReactElement>(<h1>Submit</h1>);
  useEffect(() => {
    return clearTimeout;
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      feedback: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().required("Required").email("Invalid email"),
      feedback: Yup.string()
        .min(4, "Must be greater than 4 characters")
        .max(200, "Must be less than 200 characters")
        .required("Required"),
    }),
    onSubmit: (
      { name, email, feedback },
      { resetForm }: FormikHelpers<InputField>
    ) => {
      setSubmit(<Spinner color="white" className="m-auto h-5 w-5" />);
      console.log(name, email, feedback);

      setTimeout(() => {
        setSubmit(<CheckIcon height={20} width={20} className="m-auto" />);
        setTimeout(() => {
          setSubmit(<h1>Submit</h1>);
          resetForm();
        }, 1200);
      }, 500);
    },
  });

  return (
    <div className="text-white">
      <p>Please leave your feedback here</p>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <MemoedInputField
            labelName="Name"
            name="name"
            formik={formik}
            errorClass={errorClass}
          />
        </div>
        <div>
          <MemoedInputField
            labelName="Email"
            name="email"
            formik={formik}
            errorClass={errorClass}
          />
        </div>
        <div>
          <MemoedInputField
            labelName="Feedback"
            name="feedback"
            as="textarea"
            formik={formik}
            errorClass={errorClass}
          />
        </div>
        <button type="submit">{submit}</button>
      </form>
    </div>
  );
}
