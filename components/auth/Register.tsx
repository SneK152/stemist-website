import { useFormik } from 'formik';
import InputField from "../forms/InputField"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import getFirebase from '../../hooks/getFirebase';
import { memo } from 'react';
import Container from '../layout/Container';
import PartialBanner from '@/components/layout/PartialBanner';
import useLocalStorage from '@/lib/hooks/useLocalStorage';
import * as Yup from 'yup';

interface SignUpForm {
    email: string;
    password: string;
}

export default function SignUp() {
    const [localEmail, setEmail] = useLocalStorage("contactEmailUsage", null);
    const MInputField = memo(InputField)
    const formik = useFormik<SignUpForm>({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async ({ email, password }, { resetForm, setSubmitting, setErrors }) => {
            resetForm()
            await createUserWithEmailAndPassword(getAuth(getFirebase()), email, password)
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            password: Yup.string()
                .min(3, "Must be more than 3 characters")
                .max(500, "Cannot be longer than 500 characters")
                .required("Required")
          }),
    })
    
    return (
        <Container title='Auth | Register'>
            <PartialBanner title="Register" />
            <div>
                <div className="mx-auto py-3 flex-col flex gap-5 sm:px-6 lg:px-8 max-w-[100rem] px-2">
                    <h1 className="font-sans text-xl text-center max-w-[80ch] m-auto">
                        Fill out this form if you would like to contact us, if you have
                        feedback on one of our recent sessions, or if you would like to
                        provide a testimonial. We will reach out to
                        you within 2-5 days.
                    </h1>
                <form onSubmit={formik.handleSubmit} className="w-full space-y-3 bg-opacity-90 rounded-3xl bg-slate-800 p-5">
                    <div className="w-full space-y-3 rounded-lg p-4">
                    <MInputField
                        labelName="Email address"
                        name="contactEmail"
                        type="email"
                        formik={formik}
                            />
                            
                    <MInputField
                        labelName="Password"
                        type="password"
                        formik={formik}
                        name="password"
                    />
                    <button
                        type="submit"
                        className="relative m-auto block w-full rounded-md border border-transparent bg-white bg-opacity-5 py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:w-1/2"
                    >
                        Submit
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </Container>
    )
}