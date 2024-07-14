"use client"

import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem
} from "@/components/ui/dropdown-menu";
import { Button } from "./button";
import { BrainCircuit, Library, BookType } from "lucide-react";

const returnIcon = (s: string) => {
    switch(s) {
        case "Level":
            return <BrainCircuit />
        case "AP Unit":
            return <Library />
        case "Lesson Type":
            return <BookType />
    }
}

export default function LessonFilter(params: any) {
    const [position, setPosition] = React.useState(params.options[0]);
    const title = params.title;

    React.useEffect(() => {
        params.changeFilters(title, position);
    }, [position])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex flex-row gap-2 rounded-[1rem] dark:bg-slate-900 dark:text-white">
                    {title}
                    {returnIcon(title)}
                </Button>
                
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 overflow-y-auto max-h-[60vh] dark:bg-slate-900 dark:text-white dark:border-none">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition} className="">
                    {params.options.map((option: string, index: React.Key | null | undefined) => (
                        <DropdownMenuRadioItem key={index} value={option}>
                            {option}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
