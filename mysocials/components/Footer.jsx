import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="px-8 md:px-20 lg:px-32 py-5 mt-3 grid gap-4 text-center">
            <div className="flex flex-col items-center">
                <Logo />
                <p className="text-xs">Built by <a href="https://ng.linkedin.com/in/daniel-majolagbe-91b0b9214" className="hover:text-primary hover:underline">Daniel</a></p>
            </div>
            <ul className="text-sm grid gap-1">
                <li className="hover:underline hover:text-primary text-sm"><Link href="">More Projects</Link></li>
                <li className="hover:underline hover:text-primary text-sm"><Link href="">Report an Issue</Link></li>
            </ul>
        </footer>
    )
}
