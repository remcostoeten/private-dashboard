
"use client"

import React, { useState } from "react"
import { getAuth, updateProfile } from "firebase/auth"
import { getStorage } from "firebase/storage"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ChangeUsernameProps {
    buttontext?: string
    title?: string
    label?: string
}

export default function ChangeUsername({ buttontext, title, label }) {
    const [name, setName] = useState("")
    const [avatar, setAvatar] = useState<File | null>(null)
    const auth = getAuth()
    const storage = getStorage()

    const handleForm = async (event: React.FormEvent) => {
        event.preventDefault();

        if (auth.currentUser) {
            try {
                await updateProfile(auth.currentUser, {
                    displayName: name,
                });

                const updatedUser = auth.currentUser;
                if (updatedUser) {
                    setName(updatedUser.displayName || "");
                }
                document.dispatchEvent(new CustomEvent("userUpdated"));
            } catch (error) {
                console.error("Error updating profile:", error);
            }
        }
    };

    const username = name || auth.currentUser?.displayName || ""

    return (
        <><Card>
            <CardHeader>
                <CardTitle>Hi, {username}</CardTitle>
                <CardDescription>
                    This is the name that will be displayed on your profile.
                </CardDescription>
            </CardHeader>
        </Card>
            <form className="mt-4 space-y-2" onSubmit={handleForm}>
                <Label htmlFor="name">{label}</Label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={username}
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <Label htmlFor="avatar">Upload Avatar</Label>
                <Input
                    id="avatar"
                    name="avatar"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                            setAvatar(e.target.files[0])
                        } else {
                            setAvatar(null)
                        }
                    }} />
                <Button
                    type="submit"
                    className="inline-flex h-9 max-w-fit items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                    {buttontext}
                </Button>
            </form>
        </div ></>
        </card >
    )
}