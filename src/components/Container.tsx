import { useEffect } from "react"
import Navbar from "./Navbar"

export default function Container({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        window.onhashchange = (e) => {
            window.history.replaceState("", document.title, e.oldURL)
        }
    }, [])
    useEffect(() => {
        let mainNavLinks = document.querySelectorAll("nav ul li a")
        mainNavLinks.forEach(a => console.log(a))
        const callback = () => {
            let fromTop = window.scrollY

            mainNavLinks.forEach(link => {
                let section: HTMLElement = document.querySelector(link.getAttribute("href")!)!
                if (section!.offsetTop - 1 <= fromTop && section.offsetTop + section.offsetHeight >= fromTop) {
                    link.parentElement?.classList.add("underline")
                }

                else {
                    link.parentElement?.classList.remove("underline")
                }
            })
        }
        window.addEventListener("scroll", callback)
        return () => window.removeEventListener("scroll", callback)
    }, [])
    return <div className="mx-auto h-[10000px]">
        <Navbar className="sm:px-6 lg:px-6 px-2 w-full z-50 fixed bg-gradient-to-r from-slate-200 to-slate-300" />
        <div className="sm:px-6 max-w-[100rem] mx-auto px-2 lg:px-6 overflow-hidden">
            {children}
        </div>
    </div>
}