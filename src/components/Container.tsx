import { useEffect } from "react";
import Navbar from "./Navbar";

export default function Container({ children }: { children: JSX.Element | string }) {
    useEffect(() => {
        window.onscroll = () => {
            if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
                document.querySelector("nav")!.style.top = "0"
            } else {
                document.querySelector("nav")!.style.top = "-56px"
            }
        }
    }, [])
    return <div className="mx-auto h-[10000px]">
        <Navbar className="sm:px-6 lg:px-6 px-2 transition-[top] duration-300 z-50 sticky top-[-56px] bg-gradient-to-r from-slate-200 to-slate-300" />
        <div className="sm:px-6 max-w-[100rem] mx-auto px-2 lg:px-6 overflow-hidden">
            {children}
        </div>
    </div>
}