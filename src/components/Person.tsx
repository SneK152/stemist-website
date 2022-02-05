import { PersonProps } from "../utils"

export default function Person(props: PersonProps) {
	return (
		<div className="flex h-full flex-row items-center justify-center gap-5 group">
			<div>
				<img
					src={props.person.image}
					className="h-20 w-20 max-w-none"
					alt="User profile"
				/>
			</div>
			<h1 className="space-y-1 font-display text-lg font-normal">
				<span className="group-hover:hidden transition-all">
					{props.person.name}
					<br />
					<div className="flex flex-wrap gap-1">
						{props.person.positions.map((pos, index) => (
							<span
								className="m-0.5 rounded-xl w-min bg-gray-200 py-1 px-2 text-xs"
								key={index}
							>
								{pos}
							</span>
						))}
					</div>
				</span>
				<p className="text-xs hidden group-hover:block transition-all">
					{props.person.description}
				</p>
			</h1>
		</div>
	)
}
