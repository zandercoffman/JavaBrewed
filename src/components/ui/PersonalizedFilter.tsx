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

import { Sparkles } from "lucide-react";

export default function PersonalizedFilter(params: any) {
    const [position, setPosition] = React.useState("");
    return <>
       <div className="relative flex flex-row gap-2 px-4 py-2 font-medium rounded-[1rem] border-none text-white hover:text-gray-300 bg-gradient-to-r from-blue-600 to-violet-600 gradient-animated">
            Personalized
            <Sparkles />
        </div>
    </>
}