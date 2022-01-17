import { Link, useLocation } from "react-router-dom"
import { NavLinkProps } from "../utils"


export default function NavLink(props: NavLinkProps) {
    const location = useLocation()
    return <li className={`hover:underline font-writing underline-offset-1 ${location.pathname === props.href && "underline"}`} onClick={() => window.scrollTo(0, 0)}>
        <Link to={props.href}>
            {props.children}
        </Link>
    </li>
}