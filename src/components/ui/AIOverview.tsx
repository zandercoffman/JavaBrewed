"use client"

import { Tabs } from "@/components/ui/3DTabs"
import { getLessonByParamName, returnIcon } from "../../../../public/lessons/Lessons";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import Link from "next/link";
import { Menu, Terminal, Bell } from "lucide-react";
import React, { createContext, useContext, useState } from "react";
import { Textarea } from "@/components/ui/textarea"
import { TeachComponent } from "@/components/ui/TeachComponent";
import { LeftSideLearnSide } from "@/components/ui/LearnLeft";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function Overview(params) {

    const [content, setContent] = React.useState(params.content);
    React.useEffect(() => {
        setContent(params.content);
    }, [params.content])

    const isValid = () => {
        let num = 0;
        Object.keys(content).map((key, index) => {
            const obj = content[key];
            if (obj !== "")
               num++;
        })

        return num / Object.keys(content).length > 0.5;
    }

    const submit = () => {
        if (isValid())
            params.submit();
    }
    
    return <>
        <Card className="border-none">
                <CardHeader>
                    <CardTitle>Overview</CardTitle>
                    <CardDescription>
                        In this simulation, you will teach {params.lesson.name} to AI. Your job is to make a curriculum that the AI can understand.
                        Press the <Button className="relative w-fit px-3 py-1" variant={"outline"}>
                            Submit
                        </Button> button when you are ready to test your curriculum.
                    </CardDescription>
                </CardHeader>
                <CardFooter className="!flex-col !gap-4">
                <Alert>
                        <Bell className="h-4 w-4" />
                        <AlertTitle>Heads up!</AlertTitle>
                        <AlertDescription>
                            
There's a bug in this section where sentences in textareas are cut off at the last character, and to render sentences correctly in the dragging nodes area, you need to click on another tab and then return.  Sorry! It will be fixed.
                        </AlertDescription>
                    </Alert>
                    <div className="flex flex-row gap-4 w-full">
                        <Button className="relative w-[70%]" onClick={submit}>
                            Submit
                        </Button>
                        <div className="grid place-items-center w-[30%]">
                            <div className="flex flex-col w-full">
                                <Progress value={33} />
                                
                            </div>
                        </div>
                    </div>
                </CardFooter>
                </Card>
    </>
}