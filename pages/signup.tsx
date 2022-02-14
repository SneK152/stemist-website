import { ReactElement, useState } from "react";
import { useLocalStorage } from "../lib/utils";
import * as Yup from "yup";
import { CheckIcon, XIcon } from "@heroicons/react/outline";
import Spinner from "../components/Spinner";
import { useEffect } from "react";
import { useFormik } from "formik";
import InputField from "../components/InputField";
import SelectInputField from "../components/SelectInputField";

const gradeOptions = [
  "Grade",
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
  "Computer Science Class Interest",
  "Option 1",
  "Option 2",
  "Option 3",
];
const mathOptions = ["Math Class Interest", "Option 1", "Option 2", "Option 3"];
const scienceOptions = [
  "Science Class Interest",
  "Option 1",
  "Option 2",
  "Option 3",
];
const errorClass = "text-red-500 font-bold inline-block sm:text-sm pl-3 pt-2";

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
    },
    onSubmit: async (values) => {
      setSubmit(<Spinner color="white" className="m-auto h-5 w-5" />);
      if (localEmail !== values.email) {
        const formdata = new URLSearchParams();
        formdata.append("entry.1706588819", values.firstName); // First Name
        formdata.append("entry.1968315359", values.lastName); // Last Name
        formdata.append("entry.1473300010", values.email); // Email
        formdata.append("entry.1047485006", values.questions); // Questions
        formdata.append("entry.890098326", values.grade); // Grade
        if (!values.mathInterest.includes("Class Interest"))
          formdata.append("entry.1204481380", values.mathInterest); // Math
        if (!values.scienceInterest.includes("Class Interest"))
          formdata.append("entry.818035415", values.scienceInterest); // Science
        if (!values.csInterest.includes("Class Interest"))
          formdata.append("entry.2000892328", values.csInterest); // CS
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
          setTimeout(() => setSubmit(<h1>Submit</h1>), 1200);
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
        .notOneOf(["Grade"], "Required")
        .required("Required"),
      questions: Yup.string(),
      mathInterest: Yup.string(),
      scienceInterest: Yup.string(),
      csInterest: Yup.string(),
    }),
  });
  return (
    <div>
      <h1 className="text-center font-display text-3xl font-bold">Signup</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto max-w-6xl space-y-3 px-2 py-3 sm:px-6 lg:px-8"
      >
        <div className="w-full gap-3 space-y-3 sm:flex sm:space-y-0">
          <div className="w-full space-y-3 rounded-lg border border-gray-100 bg-stone-50 p-4 shadow-lg">
            <h2>Personal Information</h2>
            <InputField
              labelName="Email address"
              name="email"
              type="email"
              formik={formik}
              errorClass={errorClass}
            />
            <div className="flex w-full gap-2">
              <InputField
                labelName="First name"
                name="firstName"
                formik={formik}
                errorClass={errorClass}
              />
              <InputField
                labelName="Last name"
                name="lastName"
                formik={formik}
                errorClass={errorClass}
              />
            </div>
            <SelectInputField
              labelName="Grade"
              name="grade"
              formik={formik}
              errorClass={errorClass}
            >
              {gradeOptions.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </SelectInputField>
          </div>
          <div className="w-full space-y-3 rounded-lg border border-gray-100 bg-stone-50 p-4 shadow-lg">
            <h2>Class Information</h2>
            <SelectInputField
              labelName="Computer Science Class Interest"
              name="csInterest"
              formik={formik}
              errorClass={errorClass}
            >
              {csOptions.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </SelectInputField>
            <SelectInputField
              labelName="Math Class Interest"
              name="mathInterest"
              formik={formik}
              errorClass={errorClass}
            >
              {mathOptions.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </SelectInputField>
            <SelectInputField
              labelName="Science Class Interest"
              name="scienceInterest"
              formik={formik}
              errorClass={errorClass}
            >
              {scienceOptions.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </SelectInputField>
            <InputField
              labelName="Questions?"
              name="questions"
              formik={formik}
              errorClass={errorClass}
            />
          </div>
        </div>
        <button
          type="submit"
          className="relative m-auto block w-full rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:w-1/2 md:w-1/4"
        >
          {submit}
        </button>
      </form>
    </div>
  );
}
