import { CardProps } from "../utils"

export default function Card({ children, className, ...rest }: CardProps) {
	return (
		<div
			className={`card ${className || ""} ${
				process.env.NODE_ENV === "development" ? "card-animate" : ""
			}`}
			{...rest}
		>
			{children}
		</div>
	)
}
