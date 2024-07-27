"use client";

import { ClerkLoading, SignOutButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { Skeleton } from "@/components/ui/skeleton";
import { ModeToggle } from "@/components/ModeToggle";
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();

    const handleSignOut = () => {
        router.push('/');
    };

    return (
        <header className="flex justify-between items-center py-[22px] px-6 md:px-20 lg:px-32">
            <div>
                <Logo />
            </div>
            <div className="flex items-center gap-3">
                <ClerkLoading>
                    <Skeleton className="h-10 w-[80px] rounded" />
                </ClerkLoading>
                <SignOutButton signOutCallback={handleSignOut}>
                    <Button>Logout</Button>
                </SignOutButton>
                <ModeToggle />
            </div>
        </header>
    );
}
