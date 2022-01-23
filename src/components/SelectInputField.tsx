import { SelectInputFieldProps } from "../utils"

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
				className="appearance-none rounded-lg shadow-sm relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-500 focus:outline-none focus:ring-night focus:border-night focus:z-10 sm:text-sm"
				{...formik.getFieldProps(name)}
			>
				{children}
			</select>
			{formik.touched[name] && formik.errors[name] ? (
				<div className={errorClass}>{formik.errors[name]}</div>
			) : null}
		</div>
	)
}
