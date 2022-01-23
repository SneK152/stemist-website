import { InputFieldProps } from "../utils"

export default function InputField({
	labelName,
	name,
	type,
	autoComplete,
	className,
	formik,
	errorClass,
	...rest
}: InputFieldProps) {
	return (
		<div className="w-full">
			<label htmlFor={name} className="sr-only">
				{labelName}
			</label>
			<input
				id={name}
				name={name}
				type={type ? type : "text"}
				className={`${className} appearance-none rounded-lg shadow-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-night focus:border-night focus:z-10 sm:text-sm`}
				placeholder={labelName}
				autoComplete="off"
				{...formik.getFieldProps(name)}
				{...rest}
			/>
			{formik.touched[name] && formik.errors[name] ? (
				<div className={errorClass}>{formik.errors[name]}</div>
			) : null}
		</div>
	)
}
