import { CardProps } from "../utils"
import { useEffect } from "react"

export default function Card({ children, className, ...rest }: CardProps) {
    useEffect(() => {
        if (process.env.NODE_ENV === "production") {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.classList.contains("card-animate")) {
                        setTimeout(() => entry.target.classList.add("card-animate"), 250)
                    }
                })
            }, {
                threshold: 0.5
            })
            observer.observe(document.querySelector(".card")!)
            return observer.disconnect
        }
    }, [])
    return <div className={`card sm:w-9/12 w-full m-auto ${className} ${process.env.NODE_ENV === "development" && "card-animate"}`} {...rest}>
        {children}
    </div>
}