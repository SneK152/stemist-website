import { InputFieldProps } from "../lib/utils";

export default function InputField({
  labelName,
  name,
  type,
  autoComplete,
  className,
  formik,
  errorClass,
  as: Elem = "input",
  ...rest
}: InputFieldProps) {
  return (
    <div className="w-full">
      <label htmlFor={name} className="sr-only">
        {labelName}
      </label>
      <Elem
        id={name}
        name={name}
        type={type ? type : "text"}
        className={`${className} relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 shadow-sm focus:z-10 focus:border-black focus:outline-none focus:ring-black sm:text-sm`}
        placeholder={labelName}
        autoComplete="off"
        {...formik.getFieldProps(name)}
        {...rest}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <div className={errorClass}>{formik.errors[name]}</div>
      ) : null}
    </div>
  );
}
