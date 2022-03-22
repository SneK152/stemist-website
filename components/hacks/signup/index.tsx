import { useFormik } from "formik";
import { validationSchema } from "./validation";
import { Signup } from "./types";
import Container from "@/components/layout/Container";
import PartialBanner from "@/components/layout/PartialBanner";
import Button from "@/components/hacks/layout/Button";
import InputField from "@/components/forms/InputField";
import { hackathonNavLinks } from "@/lib/data/navLinks";

export default function SignupForm() {
  const formik = useFormik<Signup>({
    initialValues: { name: "", password: "", email: "" },
    onSubmit: (v, h) => {
      console.log(v);
    },
    validationSchema,
  });
  return (
    <Container
      title="STEMist Hacks Signups"
      noNav
      navTitle="STEMist Hacks"
      customNav={hackathonNavLinks}
    >
      <PartialBanner title="Hackathon Signups" />
      <div className="p-8 text-center justify-center">
        <div className="justify-center shadow-md p-5">
          <h1 className="text-center text-white font-bold text-4xl">
            Sign Up for the Hackthon Today!
          </h1>
          <p className="text-white text-center py-3 font-semibold text-lg">
            Register for the amazing hackathon
          </p>
          <div className="text-black bg-gray-50 p-5 rounded-lg space-y-5">
            <InputField name="name" labelName="Full name" formik={formik} />
            <InputField name="email" formik={formik} labelName="Email" />
            <InputField
              name="password"
              formik={formik}
              labelName="Password"
              type="password"
            />
            <Button type="submit" onClick={formik.handleSubmit}>
              Sign Up for STEMist Hacks
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
