import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs";
import DemoImage from "./DemoImage";


export default async function Hero() {
    const user = await currentUser();
    return (
        <div className="py-14 px-6 md:px-20 lg:px-32 grid">
            <div className="border mb-4 w-fit sm:mx-auto py-1.5 px-3 rounded-full bg-background">
                <a className="hover:underline" href="">
                    <p className="text-xs flex items-center justify-center gap-1">
                        💎 Explore Premium<ArrowRight className="h-4 w-4" />
                    </p>
                </a>
            </div>
            <div className="grid sm:place-content-center sm:text-center gap-2">
            <h2 className="text-6xl max-w-5xl font-medium text-black dark:text-gray-100 md:text-7xl dark:bg-gray-100 dark:bg-gradient-to-r bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 bg-[200%_auto] bg-clip-text leading-tight text-transparent">
    Not just a link-in-bio.
    <span className="animate-text-gradient inline-flex dark:from-gray-200 dark:via-gray-400 dark:to-gray-400 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 bg-[200%_auto] bg-clip-text leading-tight text-transparent">
        A full creator platform.
    </span>
</h2>

                <p className="md:text-base text-[13.5px] max-w-sm md:max-w-xl sm:text-center sm:mx-auto dark:text-gray-400 text-gray-600">Simplify and elevate your online presence effortlessly. one link connects to endless opportunities.</p>
            </div>
            <div className="sm:flex items-center sm:justify-center grid grid-cols-2 gap-2.5 mt-7">
                <Button asChild variant="pulseBtn"><Link href={!user ? "/sign-in" : "/dashboard/manage"}>Get Started</Link></Button>
                <Button variant="outline" asChild><Link href="/r2hu1" className="flex items-center gap-1">Community<ArrowRight className="h-4 w-4 -rotate-45" /></Link></Button>
            </div>
            <div className="mt-20 bg-secondary/40 p-1 rounded-md w-fit mx-auto">
                <DemoImage />
            </div>
        </div>
    )
}
