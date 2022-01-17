import { useEffect } from "react"
import { NavLinkProps } from "../utils"


export default function NavLink(props: NavLinkProps) {
    const scrollFunction = () => {
        document.querySelector(props.href)?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(() => {
        let mainNavLinks = document.querySelectorAll("nav ul li a")
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
    })
    return <li className={`hover:underline font-writing underline-offset-1 ${props.className}`}>
        <a href={props.href} onClick={!("scroll-behavior" in document.body.style) ? scrollFunction : () => null}>
            {props.children}
        </a>
    </li>
}