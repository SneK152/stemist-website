import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export default function Container({ children }: { children: JSX.Element | string }) {
    const location = useLocation()
    useEffect(() => {
        window.onscroll = () => {
            if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
                document.querySelector("nav")!.style.top = "0"
            } else {
                document.querySelector("nav")!.style.top = "-56px"
            }
        }
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])
    return <div className="mx-auto h-[10000px]">
        <Navbar className="sm:px-6 lg:px-6 px-2 transition-[top] duration-300 z-50 sticky top-[-56px] bg-gradient-to-r from-slate-200 to-slate-300 backdrop-filter backdrop-blur" />
        <div className="sm:px-6 max-w-[100rem] mx-auto px-2 lg:px-6">
            {children}
        </div>
    </div>
}