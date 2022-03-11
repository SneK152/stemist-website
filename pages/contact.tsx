import { memo, ReactElement, useState, useEffect } from "react";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import * as Yup from "yup";
import { CheckIcon, XIcon } from "@heroicons/react/outline";
import { useFormik } from "formik";
import InputField from "@/components/forms/InputField";
import dynamic from "next/dynamic";
import PartialBanner from "@/components/layout/PartialBanner";
import Container from "@/components/layout/Container";

const Spinner = dynamic(() => import("@/components/Spinner"));
const FeedBackForm = dynamic(() => import("@/components/forms/FeedbackForm"));

const MemoedInputField = memo(InputField);

export default function Contact() {
  const [localEmail, setEmail] = useLocalStorage("contactEmailUsage", null);
  const [submit, setSubmit] = useState<ReactElement>(<h1>Submit</h1>);
  useEffect(() => {
    return clearTimeout;
  }, []);

  const formik = useFormik({
    initialValues: {
      contactName: "",
      contactEmail: "",
      message: "",
    },
    onSubmit: async (values, helpers) => {
      setSubmit(<Spinner color="white" className="m-auto h-5 w-5" />);
      if (localEmail !== values.contactEmail) {
        // const formdata = new URLSearchParams()
        // formdata.append("entry.1706588819", values.firstName) // First Name
        // formdata.append("entry.1968315359", values.lastName) // Last Name
        // formdata.append("entry.1473300010", values.email) // Email
        // formdata.append("entry.1047485006", values.questions) // Questions
        // formdata.append("entry.890098326", values.grade) // Grade
        setEmail(values.contactEmail);
        // await fetch(
        // 	"https://docs.google.com/forms/u/0/d/e/1FAIpQLSfgwo15SXKJ-izaP99awlZOGcXszjwBwmYwRnlg3hfhd6CyhA/formResponse",
        // 	{
        // 		method: "POST",
        // 		headers: {
        // 			"Content-Type": "application/x-www-form-urlencoded",
        // 		},
        // 		mode: "no-cors",
        // 		body: formdata.toString(),
        // 	},
        // )
        setTimeout(() => {
          setSubmit(<CheckIcon height={20} width={20} className="m-auto" />);
          setTimeout(() => {
            setSubmit(<h1>Submit</h1>);
            helpers.resetForm();
          }, 1200);
        }, 500);
      } else {
        setSubmit(
          <div className="flex items-center justify-center gap-1">
            <XIcon height={20} width={20} />
            <p>Duplicate user.</p>
          </div>
        );
        setTimeout(() => setSubmit(<h1>Submit</h1>), 2000);
      }
    },
    validationSchema: Yup.object({
      contactName: Yup.string().required("Required"),
      contactEmail: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      message: Yup.string()
        .min(3, "Must be more than 3 characters")
        .max(500, "Cannot be longer than 500 characters")
        .required("Required"),
    }),
  });
  return (
    <Container title="Contact">
      <PartialBanner title="Contact Us" />
      <div className="bg-black bg-opacity-60">
        <div className="mx-auto max-w-6xl px-2 py-3 sm:flex sm:px-6 lg:px-8">
          <div className="flex w-full flex-col gap-3 pt-8">
            <h1 className="font-display text-2xl font-bold">Contact Us</h1>
            <hr className="w-1/3 rounded-2xl border border-gray-400 bg-gray-400 opacity-50" />
            <p className="pr-5">
              Fill out the form to get in touch with our team. We will get back
              to you as soon as possible.
            </p>
          </div>
          <form onSubmit={formik.handleSubmit} className="w-full space-y-3">
            <div className="w-full space-y-3 rounded-lg border border-gray-100 bg-stone-50 p-4 shadow-lg">
              <MemoedInputField
                labelName="Email address"
                name="contactEmail"
                type="email"
                formik={formik}
              />
              <MemoedInputField
                labelName="Full name"
                name="contactName"
                formik={formik}
              />
              <MemoedInputField
                labelName="Message"
                as="textarea"
                formik={formik}
                name="message"
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
        <FeedBackForm />
      </div>
    </Container>
  );
}
