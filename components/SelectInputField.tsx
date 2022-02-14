import { SelectInputFieldProps } from "../lib/utils";

export default function SelectInputField({
  name,
  formik,
  errorClass,
  labelName,
  children,
}: SelectInputFieldProps) {
  return (
    <div>
      <label className="sr-only" htmlFor={name}>
        {labelName}
      </label>
      <select
        id={name}
        autoComplete="off"
        className="relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-500 placeholder-gray-500 shadow-sm focus:z-10 focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        {...formik.getFieldProps(name)}
      >
        {children}
      </select>
      {formik.touched[name] && formik.errors[name] ? (
        <div className={errorClass}>{formik.errors[name]}</div>
      ) : null}
    </div>
  );
}
