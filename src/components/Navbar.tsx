import NavLink from "./NavLink"

export default function Navbar() {
    return (
        <nav className="flex justify-between p-3">
            <div>
                <h1 className="font-bold text-2xl">STEMzyme</h1>
            </div>
            <div>
                <ul className="inline-flex gap-4">
                    <NavLink href="/">
                        Home
                    </NavLink>
                    <NavLink href="/signup">
                        Sign Ups
                    </NavLink>
                    <NavLink href="/about">
                        Meet the Team
                    </NavLink>
                    <NavLink href="/contact">
                        Contact Us
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}