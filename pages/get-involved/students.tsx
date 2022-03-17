import { memo, ReactElement, useState } from "react";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
import * as Yup from "yup";
import { CheckIcon, XIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { useFormik } from "formik";
import InputField from "@/components/forms/InputField";
import SelectInputField from "@/components/forms/SelectInputField";
import dynamic from "next/dynamic";
import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import Link from "next/link";

const Spinner = dynamic(() => import("@/components/Spinner"));

const gradeOptions = [
  "Select",
  "Kindergarten",
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
];
const csOptions = [
  "None",
  "Machine Learning",
  "Web Development",
  "Object Oriented Programming",
  "C++",
  "Java",
  "Python",
];
const mathOptions = [
  "None",
  "Combinatorics",
  "Number Theory",
  "Probability",
  "Gauss",
];
const scienceOptions = ["None", "Biology", "Physics", "Chemistry", "Ecology"];

const MemoedInputField = memo(InputField);
const MemoedSelectField = memo(SelectInputField);

export default function Signup() {
  const [localEmail, setEmail] = useLocalStorage("email", null);
  const [submit, setSubmit] = useState<ReactElement>(<h1>Submit</h1>);
  useEffect(() => {
    return clearTimeout;
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      lastName: "",
      questions: "",
      grade: "",
      mathInterest: "",
      scienceInterest: "",
      csInterest: "",
      hearabout: "",
    },
    onSubmit: async (values, helpers) => {
      setSubmit(<Spinner color="white" className="m-auto h-5 w-5" />);
      if (localEmail !== values.email) {
        const formdata = new URLSearchParams();
        formdata.append("entry.1706588819", values.firstName); // First Name
        formdata.append("entry.1968315359", values.lastName); // Last Name
        formdata.append("entry.1473300010", values.email); // Email
        formdata.append("entry.1047485006", values.questions); // Questions
        formdata.append("entry.890098326", values.grade); // Grade
        if (!values.mathInterest.includes("None"))
          formdata.append("entry.1204481380", values.mathInterest); // Math
        if (!values.scienceInterest.includes("None"))
          formdata.append("entry.818035415", values.scienceInterest); // Science
        if (!values.csInterest.includes("None"))
          formdata.append("entry.2000892328", values.csInterest); // CS
        formdata.append("entry.1723165048", values.hearabout);
        setEmail(values.email);
        await fetch(
          "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfgwo15SXKJ-izaP99awlZOGcXszjwBwmYwRnlg3hfhd6CyhA/formResponse",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            mode: "no-cors",
            body: formdata.toString(),
          }
        );
        setTimeout(() => {
          setSubmit(<CheckIcon height={20} width={20} className="m-auto" />);
          setTimeout(() => {
            setSubmit(<h1>Submit</h1>);
            helpers.resetForm();
          }, 1200);
        }, 500);
      } else if (localEmail === values.email) {
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
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      grade: Yup.string()
        .oneOf(gradeOptions, "Choose a grade")
        .notOneOf(["Select"], "Required")
        .required("Required"),
      questions: Yup.string()
        .min(5, "Must be greater than 5 characters")
        .max(300, "Cannot be greater than 300 characters"),
      mathInterest: Yup.string(),
      scienceInterest: Yup.string(),
      csInterest: Yup.string(),
      hearabout: Yup.string().required("Required"),
    }),
  });
  return (
    <Container title="Students">
      <PartialBanner
        title={
          <>
            <span className="block">Student Signups</span>
            <div className="flex sm:mt-4 justify-center">
              <Link href="/programs">
                <a className="bg-blue-500 sm:text-lg text-xs font-sans font-normal py-2 px-3 shadow-md rounded-lg hover:rounded-2xl hover:shadow-xl transition-all duration-300">
                  Programs
                </a>
              </Link>
            </div>
          </>
        }
      />
      <div className="max-w-3xl px-5 m-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full gap-3 space-y-3 sm:flex sm:space-y-0 text-black">
            <div className="w-full space-y-3 rounded-md border border-gray-100 bg-gray-50 p-5 shadow-lg">
              <MemoedInputField
                labelName="Email address"
                name="email"
                type="email"
                formik={formik}
              />
              <div className="flex w-full gap-2">
                <MemoedInputField
                  labelName="First name"
                  name="firstName"
                  formik={formik}
                />
                <MemoedInputField
                  labelName="Last name"
                  name="lastName"
                  formik={formik}
                />
              </div>
              <MemoedInputField
                labelName="How did you hear about us?"
                name="hearabout"
                formik={formik}
              />
              <MemoedSelectField labelName="Grade" name="grade" formik={formik}>
                {gradeOptions.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </MemoedSelectField>
              <MemoedSelectField
                labelName="Computer Science Class Interest"
                name="csInterest"
                formik={formik}
              >
                {csOptions.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </MemoedSelectField>
              <MemoedSelectField
                labelName="Math Class Interest"
                name="mathInterest"
                formik={formik}
              >
                {mathOptions.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </MemoedSelectField>
              <MemoedSelectField
                labelName="Science Class Interest"
                name="scienceInterest"
                formik={formik}
              >
                {scienceOptions.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </MemoedSelectField>
              <MemoedInputField
                labelName="Questions?"
                name="questions"
                formik={formik}
                as="textarea"
              />
            </div>
          </div>
          <br />
          <button
            type="submit"
            className="relative m-auto block w-full rounded-md border border-transparent bg-white py-2 px-4 text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:w-1/2 md:w-1/4"
          >
            {submit}
          </button>
        </form>
      </div>
    </Container>
  );
}
