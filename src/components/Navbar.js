import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <Link to="/">About</Link>
            <Link to="/signup">Signup</Link>
            <hr />
        </>
    )
}