import React, { ReactElement, useState } from "react"
import { useRef } from "react"
import { useLocalStorage } from "../utils"
import { CheckIcon, XIcon } from "@heroicons/react/outline"
import Spinner from "../components/Spinner"
import { useEffect } from "react"

export default function Signup() {
    const email = useRef<HTMLInputElement>(null)
    const name = useRef<HTMLInputElement>(null)
    const hearsay = useRef<HTMLInputElement>(null)
    const [localEmail, setEmail] = useLocalStorage("email", null)
    const [submit, setSubmit] = useState<ReactElement>(<h1>Submit</h1>)
    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmit(<Spinner color="white" className="w-5 h-5 m-auto" />)
        if (email.current && name.current && hearsay.current && localEmail !== email.current.value) {
            const formdata = new URLSearchParams()
            formdata.append("entry.187006080", email.current.value) // Email
            formdata.append("entry.782191400", hearsay.current.value) // How did you find out
            formdata.append("entry.479709865", name.current.value) // Name
            setEmail(email.current.value)
            await fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSe4XsTBN_6-RJhl1DXkLdvu3dkaP3SjydLVslHD4nHRhKMUfA/formResponse", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: formdata.toString(),
            })
            setTimeout(() => {
                setSubmit(<CheckIcon height={20} width={20} className="m-auto" />)
                setTimeout(() => setSubmit(<h1>Submit</h1>), 1200)
            }, 500)

        } else if (localEmail === email.current?.value) {
            setSubmit(<div className="m-auto flex">
                <XIcon height={20} width={20} className="m-auto inline-block" />
                <p>Duplicate user.</p>
            </div>)
            setTimeout(() => setSubmit(<h1>Submit</h1>), 2000)
        }
    }
    useEffect(() => {
        return clearTimeout
    }, [])
    return <div>
        <h1 className="text-center text-xl font-bold font-display">Signup</h1>
        <form onSubmit={formSubmit} className="max-w-2xl mx-auto px-2 sm:px-6 lg:px-8 py-3 space-y-3">
            <label htmlFor="email-address" className="sr-only">
                Email address
            </label>
            <input
                ref={email}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-night focus:border-night focus:z-10 sm:text-sm"
                placeholder="Email address"
            />
            <label htmlFor="fullname" className="sr-only">
                Full name
            </label>
            <input
                ref={name}
                id="fullname"
                name="fullname"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-night focus:border-night focus:z-10 sm:text-sm"
                placeholder="Full name"
            />
            <label htmlFor="hearsay" className="sr-only">
                Where did you hear about us?
            </label>
            <input
                ref={hearsay}
                id="hearsay"
                name="hearsay"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-night focus:border-night focus:z-10 sm:text-sm"
                placeholder="Where did you hear about us?"
            />

            <button type="submit" className="relative w-full sm:w-1/2 md:w-1/4 m-auto block py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-night hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-night">
                {submit}
            </button>
        </form>
    </div>
}