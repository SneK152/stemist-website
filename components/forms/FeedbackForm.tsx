import { CheckIcon } from "@heroicons/react/outline";
import { FormikHelpers, useFormik } from "formik";
import { memo, ReactElement, useEffect, useState } from "react";
import * as Yup from "yup";
import InputField from "./InputField";
import Spinner from "../Spinner";

interface Input {
  feedbackName: string;
  feedbackEmail: string;
  feedback: string;
}
const MemoedInputField = memo(InputField);

export default function FeedBackForm() {
  const [submit, setSubmit] = useState<ReactElement>(<h1>Submit</h1>);
  useEffect(() => {
    return clearTimeout;
  }, []);

  const formik = useFormik({
    initialValues: {
      feedbackName: "",
      feedbackEmail: "",
      feedback: "",
    },
    validationSchema: Yup.object({
      feedbackName: Yup.string().required("Required"),
      feedbackEmail: Yup.string().required("Required").email("Invalid email"),
      feedback: Yup.string()
        .min(4, "Must be greater than 4 characters")
        .max(200, "Must be less than 200 characters")
        .required("Required"),
    }),
    onSubmit: (
      { feedbackName, feedbackEmail, feedback },
      { resetForm }: FormikHelpers<Input>
    ) => {
      setSubmit(<Spinner color="white" className="m-auto h-5 w-5" />);
      console.log(feedbackEmail, feedbackName, feedback);
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
    <div className="mx-auto max-w-6xl px-2 py-3 sm:flex sm:px-6 lg:px-8 flex-row-reverse">
      <div className="flex w-full flex-col gap-3 pt-8 pl-5">
        <h1 className="font-display text-2xl font-bold">Session Feedback</h1>
        <hr className="w-1/3 rounded-2xl border border-gray-400 bg-gray-400 opacity-50" />
        <p>
          If you are a student who attended one of our classes, please fill out
          this feedback form to let us know what went well and what we could
          improve on!
        </p>
      </div>
      <form onSubmit={formik.handleSubmit} className="w-full space-y-3">
        <div className="w-full space-y-3 rounded-lg border border-gray-100 bg-stone-50 p-4 shadow-lg">
          <MemoedInputField
            labelName="Name"
            name="feedbackName"
            formik={formik}
          />
          <MemoedInputField
            labelName="Email"
            name="feedbackEmail"
            formik={formik}
          />
          <MemoedInputField
            labelName="Feedback"
            name="feedback"
            as="textarea"
            formik={formik}
          />
          <button
            type="submit"
            className="relative m-auto block w-full rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:w-1/2 md:w-1/3"
          >
            {submit}
          </button>
        </div>
      </form>
    </div>
  );
}
