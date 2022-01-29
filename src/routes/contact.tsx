import { ReactElement, useState } from "react"
import { useLocalStorage } from "../utils"
import * as Yup from "yup"
import { CheckIcon, XIcon } from "@heroicons/react/outline"
import Spinner from "../components/Spinner"
import { useEffect } from "react"
import { useFormik } from "formik"
import InputField from "../components/InputField"

const errorClass = "text-red-500 font-bold inline-block sm:text-sm pl-3 pt-2"

export default function Signup() {
	const [localEmail, setEmail] = useLocalStorage("email", null)
	const [submit, setSubmit] = useState<ReactElement>(<h1>Submit</h1>)
	useEffect(() => {
		return clearTimeout
	}, [])

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			message: "",
		},
		onSubmit: async (values) => {
			setSubmit(<Spinner color="white" className="w-5 h-5 m-auto" />)
			if (localEmail !== values.email) {
				// const formdata = new URLSearchParams()
				// formdata.append("entry.1706588819", values.firstName) // First Name
				// formdata.append("entry.1968315359", values.lastName) // Last Name
				// formdata.append("entry.1473300010", values.email) // Email
				// formdata.append("entry.1047485006", values.questions) // Questions
				// formdata.append("entry.890098326", values.grade) // Grade
				// if (!values.mathInterest.includes("Class Interest"))
				// 	formdata.append("entry.1204481380", values.mathInterest) // Math
				// if (!values.scienceInterest.includes("Class Interest"))
				// 	formdata.append("entry.818035415", values.scienceInterest) // Science
				// if (!values.csInterest.includes("Class Interest"))
				// 	formdata.append("entry.2000892328", values.csInterest) // CS
				setEmail(values.email)
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
					setSubmit(<CheckIcon height={20} width={20} className="m-auto" />)
					setTimeout(() => setSubmit(<h1>Submit</h1>), 1200)
				}, 500)
			} else if (localEmail === values.email) {
				setSubmit(
					<div className="flex items-center justify-center gap-1">
						<XIcon height={20} width={20} />
						<p>Duplicate user.</p>
					</div>,
				)
				setTimeout(() => setSubmit(<h1>Submit</h1>), 2000)
			}
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Required"),
			email: Yup.string().email("Invalid email address").required("Required"),
			message: Yup.string()
				.min(3, "Must be more than 3 characters")
				.max(500, "Cannot be longer than 500 characters")
				.required("Required"),
		}),
	})
	return (
		<div className="sm:flex max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 py-3">
			<div className="w-full flex flex-col gap-3 pt-8">
				<h1 className="text-2xl font-display font-bold">Contact Us</h1>
				<hr className="border-gray-400 w-1/3 border bg-gray-400 rounded-2xl opacity-50" />
				<p className="pr-5">
					Fill out the form to get in touch with our team. We will get back to
					you as soon as possible.
				</p>
			</div>
			<form onSubmit={formik.handleSubmit} className="w-full space-y-3">
				<div className="bg-stone-50 w-full space-y-3 p-4 border-gray-100 border rounded-lg shadow-lg">
					<InputField
						labelName="Email address"
						name="email"
						type="email"
						formik={formik}
						errorClass={errorClass}
					/>
					<InputField
						labelName="Full name"
						name="name"
						formik={formik}
						errorClass={errorClass}
					/>
					<InputField
						labelName="Message"
						as="textarea"
						formik={formik}
						name="message"
						errorClass={errorClass}
					/>
				</div>
				<button
					type="submit"
					className="relative w-full sm:w-1/2 md:w-1/3 m-auto block py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-night hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-night"
				>
					{submit}
				</button>
			</form>
		</div>
	)
}
