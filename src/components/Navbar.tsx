import React from "react"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
    const location = useLocation()
    return (
        <nav className="flex justify-between p-3">
            <div>
                <h1 className="font-bold text-2xl">STEMzyme</h1>
            </div>
            <div>
                <ul className="inline-flex gap-4">
                    <li className={`hover:underline ${location.pathname == "/" && "underline"}`}>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className={`hover:underline ${location.pathname == "/signup" && "underline"}`}>
                        <Link to="/signup">
                            Sign Ups
                        </Link>
                    </li>
                    <li className={`hover:underline ${location.pathname == "/contact" && "underline"}`}>
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </li>
                    <li className={`hover:underline ${location.pathname == "/about" && "underline"}`}>
                        <Link to="/about">Meet the Team</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}