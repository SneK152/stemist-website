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
        const formdata = new URLSearchParams();
        formdata.append("entry.1380619326", values.contactName);
        formdata.append("entry.1953937821", values.contactEmail);
        formdata.append("entry.1040798066", values.message);
        setEmail(values.contactEmail);
        await fetch(
          "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeSa7soAmbGkNmhtXMdOUz2pD1puP_wL8SosKm_IackdbHiPA/formResponse",
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
      <div className="">
        <div className="mx-auto py-3 flex-col flex gap-5 sm:px-6 lg:px-8 max-w-[100rem] px-2">
          <h1 className="font-sans text-xl text-center max-w-[80ch] m-auto">
            Fill out this form if you would like to contact us, if you have
            feedback on one of our recent sessions, or if you would like to
            provide a testimonial (thank you by the way). We will reach out to
            you within 2-5 days.
          </h1>
          <form onSubmit={formik.handleSubmit} className="w-full space-y-3">
            <div className="w-full space-y-3 rounded-lg p-4">
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
                className="relative m-auto block w-full rounded-md border border-transparent bg-white bg-opacity-5 py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:w-1/2 md:w-1/3"
              >
                {submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
