import { ReactElement, useState } from "react"
import { useLocalStorage } from "../utils"
import * as Yup from "yup"
import { CheckIcon, XIcon } from "@heroicons/react/outline"
import Spinner from "../components/Spinner"
import { useEffect } from "react"
import { useFormik } from "formik"
import InputField from "../components/InputField"
import SelectInputField from "../components/SelectInputField"

const gradeOptions = ["Grade", "Kindergarten", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"]
const csOptions = ["Select an option", "Option 1", "Option 2", "Option 3"]
const mathOptions = ["Select an option", "Option 1", "Option 2", "Option 3"]
const scienceOptions = ["Select an option", "Option 1", "Option 2", "Option 3"]
const errorClass = "text-red-500 font-bold inline-block sm:text-sm pl-3 pt-2"

export default function Signup() {
    const [localEmail, setEmail] = useLocalStorage("email", null)
    const [submit, setSubmit] = useState<ReactElement>(<h1>Submit</h1>)
    useEffect(() => {
        return clearTimeout
    }, [])

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            lastName: "",
            questions: "",
            grade: "",
            mathInterest: "",
            scienceInterest: "",
            csInterest: ""
        },
        onSubmit: async (values) => {
            console.log(formik.submitCount)
            setSubmit(<Spinner color="white" className="w-5 h-5 m-auto" />)
            if (localEmail !== values.email) {
                const formdata = new URLSearchParams()
                formdata.append("entry.1706588819", values.firstName) // First Name
                formdata.append("entry.1968315359", values.lastName) // Last Name
                formdata.append("entry.1473300010", values.email) // Email
                formdata.append("entry.1047485006", values.questions) // Questions
                formdata.append("entry.890098326", values.grade) // Grade
                formdata.append("entry.1204481380", values.mathInterest) // Math
                formdata.append("entry.818035415", values.scienceInterest) // Science
                formdata.append("entry.2000892328", values.csInterest) // CS
                setEmail(values.email)
                console.log(values)
                await fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfgwo15SXKJ-izaP99awlZOGcXszjwBwmYwRnlg3hfhd6CyhA/formResponse", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    mode: "no-cors",
                    body: formdata.toString(),
                })
                setTimeout(() => {
                    setSubmit(<CheckIcon height={20} width={20} className="m-auto" />)
                    setTimeout(() => setSubmit(<h1>Submit</h1>), 1200)
                }, 500)
            } else if (localEmail === values.email) {
                setSubmit(<div className="m-auto flex">
                    <XIcon height={20} width={20} className="m-auto inline-block" />
                    <p>Duplicate user.</p>
                </div>)
                setTimeout(() => setSubmit(<h1>Submit</h1>), 2000)
            }
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            grade: Yup.string().oneOf(gradeOptions, "Choose a grade").notOneOf(["Grade"], "Required").required("Required"),
            questions: Yup.string(),
            mathInterest: Yup.string(),
            scienceInterest: Yup.string(),
            csInterest: Yup.string(),
        })
    })
    return <div>
        <h1 className="text-center text-3xl font-bold font-display">Signup</h1>
        <form onSubmit={formik.handleSubmit} className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 py-3 space-y-3">
            <div className="flex w-full gap-3">
                <div className="bg-gray-50 w-full space-y-3 p-4 border-gray-100 border rounded-lg shadow-lg">
                    <h2>Personal Information</h2>
                    <InputField labelName="Email address" name="email" type="email" formik={formik} errorClass={errorClass} />
                    <div className="flex w-full gap-2">
                        <InputField labelName="First name" name="firstName" formik={formik} errorClass={errorClass} />
                        <InputField labelName="Last name" name="lastName" formik={formik} errorClass={errorClass} />
                    </div>
                    <SelectInputField labelName="Grade" name="grade" formik={formik} errorClass={errorClass}>
                        {gradeOptions.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                    </SelectInputField>
                </div>
                <div className="bg-gray-50 w-full space-y-3 p-4 border-gray-100 border rounded-lg shadow-lg">
                    <h2>Course Information</h2>
                    <SelectInputField labelName="Computer Science Class Interest" name="csInterest" formik={formik} errorClass={errorClass}>
                        {csOptions.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                    </SelectInputField>
                    <SelectInputField labelName="Math Class Interest" name="mathInterest" formik={formik} errorClass={errorClass}>
                        {mathOptions.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                    </SelectInputField>
                    <SelectInputField labelName="Science Class Interest" name="scienceInterest" formik={formik} errorClass={errorClass}>
                        {scienceOptions.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                    </SelectInputField>
                    <InputField labelName="Questions?" name="questions" formik={formik} errorClass={errorClass} />
                </div>
            </div>
            <button type="submit" className="relative w-full sm:w-1/2 md:w-1/4 m-auto block py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-night hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-night">
                {submit}
            </button>
        </form>
    </div>
}