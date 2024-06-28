"use client"
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"



export default function SignupPage() {

    const [name, setName] = React.useState("");
    const { toast } = useToast();

    const submit = () => {
        if (name !== "") {
            toast({
                title: "Created Account Successfully!",
                description: `Thank you, ${name}, for signing up for JavaBrewed. You will be redirected shortly.`
            })

            const obj = {
                name: name,
                titles: ["Superstar", "Fast Learner"],
                points: 0
            }

            const parsed = JSON.stringify(obj);
            localStorage.setItem("UserData", parsed);
            localStorage.setItem("Focus", "");

            setTimeout(() => {
                window.location.href = "/profile"
            }, 500);
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12 lg:p-24 pt-5">
        <Card className="mx-auto w-[60vw]">
            <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Make your account</CardTitle>
            <CardDescription>Enter your name to get started to your account.</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <Button type="submit" className="w-full" onClick={() => submit()}>
                    Login
                </Button>
            </div>
            </CardContent>
        </Card>
        </main>
    );
}
