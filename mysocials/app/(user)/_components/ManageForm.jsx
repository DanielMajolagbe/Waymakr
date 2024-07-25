"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

export default function ManageForm() {
    const { toast } = useToast();

    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [insta, setInsta] = useState('');
    const [face, setFace] = useState('');
    const [github, setGithub] = useState('');
    const [youtube, setYoutube] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true); // Corrected typo from loding to loading
    const [isPublished, setIsPublished] = useState(false);

    const handlePublishEvent = async (e) => {
        e.preventDefault();
        setIsPublished(true);

        if (username.length < 5) {
            toast({
                title: "Username length is less than 5, please make it longer!"
            });
            setIsPublished(false);
            return;
        }

        try {
            const response = await fetch("/api/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, bio, insta, face, github, youtube, name }),
            });

            const data = await response.json();

            if (data.error) {
                toast({
                    title: data.error
                });
            } else {
                toast({
                    title: "Successfully published your profile",
                });
                setTimeout(() => {
                    location.reload(); // Reloading the page after successful publish
                }, 1000);
            }
        } catch (error) {
            console.error('Error publishing profile:', error);
            toast({
                title: "Fill out the blanks and have your link ready in seconds.",
                status: "error",
            });
        }

        setIsPublished(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/get");
                const data = await response.json();

                if (data.data !== null) {
                    setName(data.data.name);
                    setUsername(data.data.username);
                    setBio(data.data.bio);
                    setInsta(data.data.instagram);
                    setFace(data.data.facebook);
                    setGithub(data.data.github);
                    setYoutube(data.data.youtube);
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
                toast({
                    title: "Failed to fetch profile data. Please try again later.",
                    status: "error",
                });
            }
        };

        fetchData();
    }, []);

    return (
        <form className="grid gap-2 mt-5 lg:px-40" method="post" onSubmit={handlePublishEvent}>
            {!loading ? (
                <div className="grid gap-2 mt-5">
                    <Label htmlFor="username" className="mt-2">Username</Label>
                    <Input value={username} onChange={(e) => setUsername(e.target.value.trim().toLowerCase())} id="username" type="text" placeholder="Unique username" maxLength={10} />

                    <Label htmlFor="name" className="mt-2">Full Name</Label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} id="name" type="text" placeholder="John Doe" maxLength={40} />

                    <Label htmlFor="bio" className="mt-2">Bio</Label>
                    <Textarea value={bio} onChange={(e) => setBio(e.target.value)} id="bio" placeholder="Tell others about yourself" maxLength={500}></Textarea>

                    <Label htmlFor="youtube" className="mt-8">YouTube</Label>
                    <Input value={youtube} onChange={(e) => setYoutube(e.target.value)} id="youtube" type="url" placeholder="https://youtube.com/channel" />

                    <Label htmlFor="insta" className="mt-2">Instagram</Label>
                    <Input value={insta} onChange={(e) => setInsta(e.target.value)} id="insta" type="url" placeholder="https://instagram.com/username" />

                    <Label htmlFor="face" className="mt-2">Facebook</Label>
                    <Input value={face} onChange={(e) => setFace(e.target.value)} id="face" type="url" placeholder="https://facebook.com/username" />

                    <Label htmlFor="github" className="mt-2">Github</Label>
                    <Input value={github} onChange={(e) => setGithub(e.target.value)} id="github" type="url" placeholder="https://github.com/username" />

                    <div className="grid mt-5">
                        <Button className="w-full" type="submit" disabled={isPublished}>
                            {isPublished ? (<LoaderIcon className="w-4 h-4 animate-spin" />) : "Publish"}
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="grid gap-2 mt-5">
                    {/* Skeleton loading UI */}
                    <Skeleton className="h-5 w-20 mt-2" />
                    <Skeleton className="h-10 w-full" />

                    <Skeleton className="h-5 w-20 mt-2" />
                    <Skeleton className="h-10 w-full" />

                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-20 w-full mb-8" />

                    <Skeleton className="h-5 w-20 mt-2" />
                    <Skeleton className="h-10 w-full" />

                    <Skeleton className="h-5 w-20 mt-2" />
                    <Skeleton className="h-10 w-full" />

                    <Skeleton className="h-5 w-20 mt-2" />
                    <Skeleton className="h-10 w-full" />

                    <Skeleton className="h-5 w-20 mt-2" />
                    <Skeleton className="h-10 w-full" />

                    <div className="flex gap-2 mt-8">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                    </div>
                </div>
            )}
        </form>
    );
}
