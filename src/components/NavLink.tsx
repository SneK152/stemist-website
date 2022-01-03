import { Link, useLocation } from "react-router-dom"
import { NavLinkProps } from "../types"


export default function NavLink(props: NavLinkProps) {
    const location = useLocation()
    return <li className={`hover:underline font-display underline-offset-1 ${location.pathname === props.href && "underline"}`}>
        <Link to={props.href}>
            {props.children}
        </Link>
    </li>
}