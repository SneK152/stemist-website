import { people } from "../utils"
export default function About() {
	return (
		<div>
			<h1 className="text-center text-3xl font-bold font-display">
				About the Team
			</h1>
			<div className="grid sm:grid-cols-3 gap-2">
				{people.map((person, index) => (
					<div
						key={index}
						className="w-full h-48 overflow-hidden bg-white shadow-lg rounded-xl p-3 flex-col"
					>
						<div className="flex flex-row justify-center items-center gap-5">
							<div>
								<img
									src={person.image}
									className="w-16 h-16"
									alt="User profile"
								/>
							</div>
							<h1 className="font-display text-xl font-normal">
								{person.name}
								<br />
								{person.positions.map((pos, index) => (
									<span
										className="bg-gray-200 text-sm py-1 px-2 m-0.5 rounded-xl"
										key={index}
									>
										{pos}
									</span>
								))}
							</h1>
						</div>
						<div className="text-sm">{person.description}</div>
					</div>
				))}
			</div>
			{/* <Card className="sm:w-9/12 w-full m-auto space-y-3 shadow-lg rounded-xl border border-gray-200 z-50 p-3">
				Hello!
			</Card> */}
		</div>
	)
}
