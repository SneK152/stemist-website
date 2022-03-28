import { object, string } from "yup";

export let validationSchema = object({
  name: string()
    .required("Required")
    .matches(/[^a-zA-Z0-9s|]/, "Enter your full name"),
  password: string().required("Required"),
  email: string().email("Invalid email").required("Required"),
});
