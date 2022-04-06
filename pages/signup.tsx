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
import { GetServerSideProps } from "next";

const Spinner = dynamic(() => import("@/components/Spinner"));

const personOptions = ["Select", "Student", "Parent", "Other"];
const hearaboutOptions = [
  "Select",
  "Returning student",
  "Recommended by a friend",
  "By a teacher/school email",
  "Search engine",
  "Facebook",
  "Instagram",
  "Other",
];

const gradeOptions = ["Select", "3rd", "4th", "5th", "6th", "7th", "8th"];

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
      person: "",
      hearabout: "",
      fullName: "",
      grade: "",
      email: "",
      school: "",
      discord: "",
      friends: "",
      parentName: "",
      parentEmail: "",
    },
    onSubmit: async (values, helpers) => {
      setSubmit(<Spinner color="white" className="m-auto h-5 w-5" />);
      if (localEmail !== values.email) {
        const formdata = new URLSearchParams();
        // formdata.append("entry.1706588819", values.firstName); // First Name
        // formdata.append("entry.1968315359", values.lastName); // Last Name
        // formdata.append("entry.1473300010", values.email); // Email
        // formdata.append("entry.1047485006", values.questions); // Questions
        // formdata.append("entry.890098326", values.grade); // Grade
        // if (!values.mathInterest.includes("None"))
        //   formdata.append("entry.1204481380", values.mathInterest); // Math
        // if (!values.scienceInterest.includes("None"))
        //   formdata.append("entry.818035415", values.scienceInterest); // Science
        // if (!values.csInterest.includes("None"))
        //   formdata.append("entry.2000892328", values.csInterest); // CS
        // formdata.append("entry.1723165048", values.hearabout);
        console.log(values);
        setEmail(values.email);
        // await fetch(
        //   "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfgwo15SXKJ-izaP99awlZOGcXszjwBwmYwRnlg3hfhd6CyhA/formResponse",
        //   {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/x-www-form-urlencoded",
        //     },
        //     mode: "no-cors",
        //     body: formdata.toString(),
        //   }
        // );
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
      person: Yup.string()
        .required("Required")
        .not(["Select"], "Please select an option"),
      hearabout: Yup.string()
        .required("Required")
        .not(["Select"], "Please select an option"),
      fullName: Yup.string()
        .required("Required")
        .matches(/[^a-zA-Z0-9s|]/, "Enter your full name"),
      grade: Yup.string()
        .required("Required")
        .not(["Select"], "Please select an option"),
      email: Yup.string().email("Invalid email").required("Required"),
      school: Yup.string().required("Required"),
      discord: Yup.string(),
      friends: Yup.string(),
      parentName: Yup.string()
        .required("Required")
        .matches(/[^a-zA-Z0-9s|]/, "Enter your full name"),
      parentEmail: Yup.string().email("Invalid email"),
    }),
  });
  return (
    <Container title="Students">
      <PartialBanner title="Student Signups" />
      <div className="max-w-[100rem] px-2 sm:px-6 lg:px-6 m-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full gap-3 space-y-3 flex flex-col sm:space-y-0 text-black">
            <div className="w-full space-y-4 rounded-md border border-gray-100 bg-gray-50 p-5 shadow-lg">
              <h1 className="text-lg font-bold">General Information</h1>
              <MemoedSelectField
                labelName="I am a..."
                name="person"
                formik={formik}
              >
                {personOptions.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </MemoedSelectField>
              <MemoedSelectField
                labelName="How did you hear about STEMist?"
                name="hearabout"
                formik={formik}
              >
                {hearaboutOptions.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </MemoedSelectField>
            </div>
            <div className="w-full space-y-4 rounded-md border border-gray-100 bg-gray-50 p-5 shadow-lg">
              <h1 className="text-lg font-bold">Student Information</h1>
              <MemoedInputField
                labelName="Student's Full Name"
                formik={formik}
                name="fullName"
              />
              <MemoedSelectField
                labelName="Student's Grade as of Spring 2022"
                name="grade"
                formik={formik}
              >
                {gradeOptions.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </MemoedSelectField>
              <MemoedInputField
                labelName="Student's Email"
                formik={formik}
                name="email"
              />
              <MemoedInputField
                labelName="Name of the school student currently attends"
                formik={formik}
                name="school"
              />
              <MemoedInputField
                labelName="Student's Discord (if applicable)"
                formik={formik}
                name="school"
              />
              <MemoedInputField
                labelName="Emails of any friends that would benefit from these classes, if any!"
                formik={formik}
                name="friends"
              />
            </div>
            <div className="w-full space-y-4 rounded-md border border-gray-100 bg-gray-50 p-5 shadow-lg">
              <h1 className="text-lg font-bold">Parent Information</h1>
              <MemoedInputField
                labelName="Parent's Full Name"
                name="parentName"
                formik={formik}
              />
              <MemoedInputField
                labelName="Parent's Email"
                name="parentEmail"
                formik={formik}
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

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "https://forms.gle/ECuJtaGiVR8bVtin9",
      permanent: false,
    },
  };
};
