import { useEffect } from "react"
import Navbar from "./Navbar"

export default function Container({ children }: { children: React.ReactNode }) {
	//
	useEffect(() => {
		window.onhashchange = (e) => {
			window.history.replaceState("", document.title, e.oldURL)
		}
	}, [])
	useEffect(() => {
		let mainNavLinks = document.querySelectorAll("nav ul li a")
		const callback = () => {
			let fromTop = window.scrollY

			mainNavLinks.forEach((link) => {
				let section: HTMLElement = document.querySelector(
					link.getAttribute("href")!,
				)!
				if (
					section!.offsetTop <= fromTop + 56.286 &&
					section.offsetTop + section.offsetHeight >= fromTop + 56.286
				) {
					link.parentElement?.classList.add("underline")
				} else {
					link.parentElement?.classList.remove("underline")
				}
			})
		}
		window.addEventListener("scroll", callback)
		return () => window.removeEventListener("scroll", callback)
	}, [])
	return (
		<div className="mx-auto h-[10000px]">
			<Navbar className="fixed z-50 w-full bg-gradient-to-r from-slate-200 to-slate-300 px-2 sm:px-6 lg:px-6" />
			<div className="mx-auto max-w-[100rem] overflow-hidden px-2 sm:px-6 lg:px-6">
				{children}
			</div>
		</div>
	)
}
