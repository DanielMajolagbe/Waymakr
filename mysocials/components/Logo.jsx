import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="select-none">
          <h1 className="text-2xl font-bold dark:text-white">
          <span className="text-black dark:text-white">Way</span>Makrr.<span style={{color: "black"}}></span></h1>
        </Link>
    )
}