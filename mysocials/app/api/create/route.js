import User from "@/models/user";
import { currentUser } from "@clerk/nextjs";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        console.log("Attempting to connect to the database...");
        await mongoose.connect(process.env.NEXT_MONGO_URI);
        console.log("Successfully connected to the database");

        const { emailAddresses, imageUrl } = await currentUser();
        const email = emailAddresses[0].emailAddress;

        const { username, bio, youtube, insta, face, github, name } = await request.json();

        const findCurrentUser = await User.findOne({ email: email });

        const getSimilarUsername = await User.findOne({ username: username });
        if (getSimilarUsername && getSimilarUsername.email !== email) {
            console.log("Username is already in use by:", getSimilarUsername.email);
            return NextResponse.json({ error: "Username is already in use" }, { status: 500 });
        }

        if (findCurrentUser) {
            await User.findOneAndUpdate(
                { email: email },
                {
                    name: name,
                    username: username,
                    bio: bio,
                    youtube: youtube,
                    instagram: insta,
                    facebook: face,
                    github: github,
                    image: imageUrl
                }
            );
            return NextResponse.json({ message: "success", name, username, bio, youtube, insta, face, github }, { status: 200 });
        } else {
            await User.create({
                name: name,
                username: username,
                bio: bio,
                youtube: youtube,
                instagram: insta,
                facebook: face,
                github: github,
                image: imageUrl,
                email: email
            });
            return NextResponse.json({ message: "success", name, username, bio, youtube, insta, face, github }, { status: 200 });
        }
    } catch (error) {
        console.error("Error during database operation:", error.message);  // Enhanced error logging
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
