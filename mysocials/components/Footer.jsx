import Link from "next/link";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";

export default function Footer() {
    return (
        <footer className="px-8 md:px-20 lg:px-32 py-5 mt-3 grid gap-4">
            <div className="flex justify-between">
                <div>
                    <Logo />
                    <p className="text-xs">Built by <a href="https://ng.linkedin.com/in/daniel-majolagbe-91b0b9214" className="hover:text-primary hover:underline">Daniel Majolagbe</a></p>
                </div>
                <div>
                    <ModeToggle/>
                </div>
            </div>
            <ul className="text-sm grid gap-1">
                <li className="hover:underline hover:text-primary text-sm"><Link href="">More Projects</Link></li>
                <li className="hover:underline hover:text-primary text-sm"><Link href="">Rept An Issue</Link></li>
            </ul>
            <p className="text-xs">&copy; {new Date().getFullYear()} <Link href="/" className="text-primary hover:underline">WayMakr</Link> All Rights Reserved.</p>
        </footer>
    )
}