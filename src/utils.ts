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
			console.log(error)
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
			console.log(error)
		}
	}
	return [storedValue, setValue]
}
