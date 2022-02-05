import React, { useState } from "react"

export interface NavLinkProps extends React.HTMLAttributes<HTMLElement> {
	href: string
	children: React.ReactNode
}
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode
}

export interface SpinnerProps {
	color: string
	className?: string
}

export interface InputFieldProps
	extends React.HTMLAttributes<HTMLInputElement> {
	labelName: string
	name: string
	type?: string
	autoComplete?: string
	className?: string
	formik: any
	errorClass: string
	as?: "input" | "textarea"
}

export interface SelectInputFieldProps
	extends React.HTMLAttributes<HTMLSelectElement> {
	labelName: string
	name: string
	children: React.ReactNode
	formik: any
	errorClass: string
}

export function useLocalStorage(key: string, initialValue: any) {
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState(() => {
		try {
			// Get from local storage by key
			const item = window.localStorage.getItem(key)
			// Parse stored json or if none return initialValue
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			// If error also return initialValue
			return initialValue
		}
	})
	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = (value: any) => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore =
				value instanceof Function ? value(storedValue) : value
			// Save state
			setStoredValue(valueToStore)
			// Save to local storage
			window.localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
			// A more advanced implementation would handle the error case
		}
	}
	return [storedValue, setValue]
}

interface Person {
	name: string
	positions: string[]
	description: string
	image: string
}

console.log(require("./images/avatar.svg").default)
export const people: Person[] = [
	{
		name: "Steve Yang",
		positions: ["position 1", "position 2"],
		image: require("./images/avatar.svg").default,
		description:
			"Steve Yang is a freshman at Lynbrook High who focuses on Earth Science and Chemistry.  When not reading textbooks, he likes to conduct synthesis reactions, run five miles a day, and talk with friends.",
	},
	{
		name: "Justin Zhang",
		positions: ["position 1", "position 2"],
		image: require("./images/avatar.svg").default,
		description:
			"Justin Zhang is a computer science and math enthusiast who codes in his free time. If he's not playing video games or watching Youtube, he's busy studying for his upcoming exams.",
	},
	{
		name: "Snehil Kakani",
		positions: ["position 1"],
		image: require("./images/avatar.svg").default,
		description:
			"Snehil Kakani is a freshman at Lynbrook High who loves web development. He enjoys working on user interfaces and backend APIs. He's also a graphic designer, drummer, actor, and more!",
	},
	{
		name: "Anish Bhethanabotla",
		positions: ["position 1"],
		image: require("./images/avatar.svg").default,
		description:
			"Anish is a freshman at Lynbrook High School who specializes in Physics and Computer Science. He enjoys listening to music.",
	},
	{
		name: "Shanker Ram",
		positions: ["position 1"],
		image: require("./images/avatar.svg").default,
		description:
			"Shanker Ram - Freshman at Lynbrook High School, Specializes in Math, Computer Science, and Data Science, Likes watching the NBA, in specific the Warriors",
	},
]
