"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { CodePiece } from "./CodePiece"
import { returnIcon } from "../../../public/lessons/Lessons";
import { Button } from "./button";
import { Circle } from "lucide-react";
import React from "react";
import CoCodeCodePiece from "./CoCodeCodePiece";
import Link from "next/link";

interface CoCodeChallenges {
    easy: {
        question: string;
        expected: string;
    };
    medium: {
        question: string;
        expected: string;
    };
    hard: {
        question: string;
        expected: string;
    };
}

export default function CoCodeLesson(params: any) {
    const lesson = params.lesson;
    const Icon = returnIcon(lesson.icon);

    const linkName = lesson.name.trim().replace(/\s+/g, '').toLowerCase();

    const [text, setText] = React.useState("");
    const [difficulty, setDifficulty] = React.useState("");

    const cocode = lesson.cocode;
    const { easy, medium, hard }: CoCodeChallenges = lesson.cocode || { easy: { question: "", expected: "" }, medium: { question: "", expected: "" }, hard: { question: "", expected: "" } };

    const set = (difficulty: string) => {
        if (cocode && easy && medium && hard) {
            switch (difficulty) {
                case "hard":
                    setText(hard.question);
                    setDifficulty("hard");
                    break;
                case "medium":
                    setText(medium.question);
                    setDifficulty("medium");
                    break;
                case "easy":
                    setText(easy.question);
                    setDifficulty("easy");
                    break;  
            }
        }
    }

    const getText = (s: string) => {
        if (s.length > 130) {
            return s.substring(0, 130) + "...";
        } else {
            return s;
        }
    }

    return <>
        <Card>
            <CardHeader>
                <CardTitle className="flex flex-row gap-2"><Icon className="w-8 h-8"/> {lesson.name}</CardTitle>
                <CardDescription>{lesson.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Card>
                    <CardHeader className="pb-1">
                        <CardTitle>Your problem...</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                        <CoCodeCodePiece code={getText(text)}/>
                    </CardContent>
                </Card>
            </CardContent>
            <CardFooter className="flex w-full justify-between">
                <div className="flex">
                    <Button asChild>
                        <Link href={`/cocode/${linkName}?difficulty=${difficulty}`}>Login</Link>
                    </Button>
                </div>
                <div className="flex space-x-2">
                    <Button className="!border-none bg-[#ec695f]  rounded-[50px] w-[32px] h-[32px]" onClick={() => set("hard")}></Button>
                    <Button className="!border-none bg-[#f6bd4f]  rounded-[50px] w-[32px] h-[32px]" onClick={() => set("medium")}></Button>
                    <Button className="!border-none bg-[#63bd59]  rounded-[50px] w-[32px] h-[32px]" onClick={() => set("easy")}></Button>
                </div>
            </CardFooter>

        </Card>
    </>
}