import InputFieldProps from "@/lib/types/InputFieldProps";
import useLocalStorage from "@/lib/hooks/useLocalStorage";

export default function InputField({
  labelName,
  name,
  type = "text",
  autoComplete,
  className,
  formik,
  errorClass,
  as: Elem = "input",
  ...rest
}: InputFieldProps) {
  const [local, setLocal] = useLocalStorage(name, formik.values[name]);
  return (
    <div className="w-full">
      <label htmlFor={name} className="sr-only">
        {labelName}
      </label>
      <Elem
        id={name}
        name={name}
        type={type}
        className={`${className} relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 shadow-sm focus:z-10 focus:border-black focus:outline-none focus:ring-black sm:text-sm`}
        placeholder={labelName}
        autoComplete="off"
        {...formik.getFieldProps(name)}
        {...rest}
        onChange={(e) => {
          setLocal(e.target.value);
          formik.handleChange(e);
        }}
        value={local}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <div
          className={
            errorClass ||
            "text-red-500 font-bold inline-block sm:text-sm pl-3 pt-2"
          }
        >
          {formik.errors[name]}
        </div>
      ) : null}
    </div>
  );
}
